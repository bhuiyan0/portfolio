import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/shared/glow";
import { profile, socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="bg-dots absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <Glow className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/3" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-start px-6 pb-28 pt-40 sm:pb-36 sm:pt-52">
        <Badge
          variant="secondary"
          className="mb-8 gap-2 rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </Badge>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gradient">{profile.name}.</span>
          <br />
          <span className="text-muted-foreground/80">{profile.headline}</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View my work
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl} download>
                <Download data-icon="inline-start" />
                Download resume
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-1 sm:ml-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-md p-2 text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Horizon line where the hero meets the first section */}
      <div
        aria-hidden
        className="bg-hairline absolute inset-x-0 bottom-0 h-px"
      />
    </section>
  );
}
