'use client';

import { useState } from 'react';
import type { JapaneseHoliday } from '@/config/japanese-holidays';

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'] as const;

type HolidayCalendarProps = {
  holidays: readonly JapaneseHoliday[];
  years: readonly number[];
  initialYear: number;
};

function getMonthCells(year: number, month: number) {
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
}

export function HolidayCalendar({ holidays, years, initialYear }: HolidayCalendarProps) {
  const [year, setYear] = useState(initialYear);
  const holidaysByDate = new Map<string, JapaneseHoliday>(
    holidays
      .filter(holiday => holiday.date.startsWith(`${year}-`))
      .map(holiday => [holiday.date, holiday])
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <label className="flex flex-col gap-2 text-sm font-bold text-muted">
          表示する年
          <select
            value={year}
            onChange={event => setYear(Number(event.target.value))}
            className="min-w-36 rounded-xl border border-border bg-surface px-4 py-2.5 text-base text-foreground"
          >
            {[...years].reverse().map(option => (
              <option key={option} value={option}>
                {option}年
              </option>
            ))}
          </select>
        </label>
        <a
          href={`/api/holidays/${year}/`}
          className="text-sm font-bold text-brand underline decoration-brand/30 underline-offset-4 hover:text-brand-dark"
        >
          {year}年のJSONを見る
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 12 }, (_, month) => {
          const cells = getMonthCells(year, month);
          return (
            <section
              key={month}
              className="rounded-2xl border border-border bg-surface p-4 shadow-sm"
            >
              <h2 className="mb-3 text-center text-lg font-bold">{month + 1}月</h2>
              <div className="grid grid-cols-7 text-center text-xs font-bold text-muted">
                {WEEKDAYS.map((weekday, index) => (
                  <div
                    key={weekday}
                    className={index === 0 ? 'text-red-600' : index === 6 ? 'text-blue-600' : ''}
                  >
                    {weekday}
                  </div>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-sm">
                {cells.map((day, index) => {
                  if (day === null) return <div key={`blank-${index}`} aria-hidden="true" />;
                  const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const holiday = holidaysByDate.get(date);
                  const weekday = index % 7;
                  return (
                    <div
                      key={date}
                      title={holiday?.name}
                      className={`flex min-h-12 flex-col items-center rounded-lg px-0.5 py-1 ${holiday ? 'bg-red-50 font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300' : weekday === 0 ? 'text-red-600' : weekday === 6 ? 'text-blue-600' : ''}`}
                    >
                      <span>{day}</span>
                      {holiday && (
                        <span className="line-clamp-2 text-[9px] leading-tight">
                          {holiday.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
