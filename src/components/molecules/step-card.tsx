export function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-4 rounded-[18px] border border-border bg-surface p-[22px] shadow-sm">
      <div className="flex gap-3.5">
        <div className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-brand text-[1.05rem] font-bold text-white">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="mt-0.5 mb-1.5 text-[1.08rem] font-semibold">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
