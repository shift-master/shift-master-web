import { readFile, writeFile } from 'node:fs/promises';

const SOURCE_URL = 'https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv';
const OUTPUT_PATH = new URL('../src/config/japanese-holidays.ts', import.meta.url);
const EXPECTED_HEADER = '国民の祝日・休日月日,国民の祝日・休日名称';

async function readSource() {
  const sourcePath = process.argv[2];
  if (sourcePath) return readFile(sourcePath);

  const response = await fetch(SOURCE_URL, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) {
    throw new Error(`内閣府CSVを取得できませんでした: HTTP ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

function parseCsv(buffer) {
  const text = new TextDecoder('shift_jis', { fatal: true }).decode(buffer).replace(/^\uFEFF/, '');
  const lines = text.trim().split(/\r?\n/);
  if (lines.shift() !== EXPECTED_HEADER) throw new Error('内閣府CSVのヘッダーが想定と異なります');

  const holidays = lines.map((line, index) => {
    const match = /^(\d{4})\/(\d{1,2})\/(\d{1,2}),(.+)$/.exec(line);
    if (!match) throw new Error(`内閣府CSVの${index + 2}行目が不正です`);
    const [, year, month, day, name] = match;
    return { date: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`, name };
  });

  if (holidays.length < 1_000) throw new Error(`祝日件数が少なすぎます: ${holidays.length}件`);

  const dates = holidays.map(holiday => holiday.date);
  if (new Set(dates).size !== dates.length) throw new Error('祝日の日付が重複しています');
  if (dates.some((date, index) => index > 0 && date <= dates[index - 1])) {
    throw new Error('祝日が日付順に並んでいません');
  }

  const latestYear = Number(dates.at(-1).slice(0, 4));
  if (latestYear < new Date().getUTCFullYear()) {
    throw new Error(`最新の収録年が古すぎます: ${latestYear}年`);
  }
  return holidays;
}

function render(holidays) {
  const items = holidays
    .map(({ date, name }) => `  { date: '${date}', name: '${name.replaceAll("'", "\\'")}' },`)
    .join('\n');
  return `/**
 * 内閣府「国民の祝日」CSVを基にした日本の祝日・休日一覧。
 * 公開データの更新時は出典と収録範囲を確認して、この配列を更新する。
 */
export const JAPANESE_HOLIDAYS = [
${items}
] as const;

export type JapaneseHoliday = (typeof JAPANESE_HOLIDAYS)[number];
`;
}

const holidays = parseCsv(await readSource());
await writeFile(OUTPUT_PATH, render(holidays));
console.log(
  `${holidays.length}件の祝日を更新しました（${holidays[0].date}〜${holidays.at(-1).date}）`
);
