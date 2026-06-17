"use client";

import { RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/shared/glow";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Glow className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" />
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
        Error
      </p>
      <h1 className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground sm:text-lg">
        An unexpected error occurred. Try again, or head back home.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" onClick={reset}>
          <RotateCcw data-icon="inline-start" />
          Try again
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
}
