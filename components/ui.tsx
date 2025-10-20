type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
export function Kicker({ children }: { children: React.ReactNode }) {
return <p className="uppercase tracking-wider text-xs text-indigo-600 font-semibold">{children}</p>;
}
export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
return (
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
{subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
</div>
);
}
