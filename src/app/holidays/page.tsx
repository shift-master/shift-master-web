import type { Metadata } from 'next';
import { HolidayCalendar } from '@/components/organisms/holiday-calendar';
import { JAPANESE_HOLIDAYS } from '@/config/japanese-holidays';
import { JAPANESE_HOLIDAY_YEARS } from '@/lib/japanese-holidays';
import { SITE } from '@/config/site';

export const metadata: Metadata = {
  title: '日本の祝日カレンダー',
  description: '振替休日と国民の休日を含む、日本の祝日を年ごとに確認できるカレンダーです。',
  alternates: { canonical: '/holidays/' },
  openGraph: {
    title: `日本の祝日カレンダー | ${SITE.shortName}`,
    description: '振替休日と国民の休日を含む、日本の祝日を年ごとに確認できます。',
  },
};

export default function HolidaysPage() {
  const currentYear = new Date().getUTCFullYear();
  const initialYear = JAPANESE_HOLIDAY_YEARS.includes(currentYear)
    ? currentYear
    : JAPANESE_HOLIDAY_YEARS.at(-1)!;

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-bold text-brand">日本の祝日</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">祝日カレンダー</h1>
        <p className="mt-4 leading-7 text-muted">
          内閣府の公開データを基に、振替休日と国民の休日を含む祝日を表示しています。
        </p>
      </div>
      <HolidayCalendar
        holidays={JAPANESE_HOLIDAYS}
        years={JAPANESE_HOLIDAY_YEARS}
        initialYear={initialYear}
      />
    </main>
  );
}
