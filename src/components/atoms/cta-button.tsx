export function CtaButton({
  href,
  variant = 'solid',
  children,
}: {
  href: string;
  variant?: 'solid' | 'ghost';
  children: React.ReactNode;
}) {
  const base = 'block w-full rounded-xl px-4 py-3.5 text-center font-bold transition-colors';
  const styles =
    variant === 'solid'
      ? 'bg-brand text-white hover:bg-brand-dark'
      : 'border border-brand bg-brand-tint text-brand';

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
