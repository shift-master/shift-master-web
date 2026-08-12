import { getJapaneseHolidaysByYear, JAPANESE_HOLIDAY_YEARS } from '@/lib/japanese-holidays';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return JAPANESE_HOLIDAY_YEARS.map(year => ({ year: String(year) }));
}

/** 静的書き出し時に、年ごとの日本の祝日一覧を JSON として生成する。 */
export async function GET(_request: Request, context: { params: Promise<{ year: string }> }) {
  const { year: rawYear } = await context.params;
  const year = Number(rawYear);

  return Response.json({
    countryCode: 'JP',
    year,
    items: getJapaneseHolidaysByYear(year),
  });
}
