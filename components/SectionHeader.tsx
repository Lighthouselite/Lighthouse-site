interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lighthouse-lightBlue">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-slate-200 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
