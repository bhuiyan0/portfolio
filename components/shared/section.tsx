import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-10 py-10 sm:py-12", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl sm:mb-10">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
