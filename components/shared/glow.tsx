import { cn } from "@/lib/utils";

/**
 * Decorative radial glow. Parent must be `relative`; rendered behind content.
 */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-[320px] w-[380px] rounded-full blur-2xl sm:h-[480px] sm:w-[640px]",
        "bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--brand)_12%,transparent),transparent_65%)]",
        "dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--brand)_20%,transparent),transparent_65%)]",
        className
      )}
    />
  );
}
