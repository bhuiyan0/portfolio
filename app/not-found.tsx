import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/shared/glow";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Glow className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" />
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
        404
      </p>
      <h1 className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground sm:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft data-icon="inline-start" />
            Back home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/#contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  );
}
