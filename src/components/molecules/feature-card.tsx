import type { Feature } from '@/config/features';

export function FeatureCard({
  feature,
  detailed = false,
}: {
  feature: Feature;
  detailed?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="text-3xl" aria-hidden="true">
        {feature.icon}
      </div>
      <h3 className="mt-3 font-bold">{feature.title}</h3>
      <p className="mt-1.5 text-sm text-muted">
        {detailed ? feature.description : feature.summary}
      </p>
    </div>
  );
}
