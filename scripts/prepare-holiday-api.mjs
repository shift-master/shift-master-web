import { readdir, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const holidaysDirectory = path.join(process.cwd(), 'out', 'api', 'holidays');
const entries = await readdir(holidaysDirectory, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile() || !/^\d{4}$/.test(entry.name)) continue;

  const sourcePath = path.join(holidaysDirectory, entry.name);
  const body = await readFile(sourcePath, 'utf8');

  // 壊れたデータを配信しないよう、移動前に JSON と対象年の一致を検証する。
  const response = JSON.parse(body);
  if (response.year !== Number(entry.name) || !Array.isArray(response.items)) {
    throw new Error(`${entry.name}年の祝日APIレスポンスが不正です`);
  }

  const destinationDirectory = path.join(holidaysDirectory, entry.name);
  await rm(sourcePath);
  await mkdir(destinationDirectory);
  await writeFile(path.join(destinationDirectory, 'index.html'), body);
}
