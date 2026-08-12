import { JAPANESE_HOLIDAYS, type JapaneseHoliday } from '@/config/japanese-holidays';

export const JAPANESE_HOLIDAY_YEARS = Array.from(
  new Set(JAPANESE_HOLIDAYS.map(holiday => Number(holiday.date.slice(0, 4))))
);

export function getJapaneseHolidaysByYear(year: number): readonly JapaneseHoliday[] {
  const yearPrefix = `${year}-`;
  return JAPANESE_HOLIDAYS.filter(holiday => holiday.date.startsWith(yearPrefix));
}

export function isJapaneseHolidayYear(year: number): boolean {
  return JAPANESE_HOLIDAY_YEARS.includes(year);
}
