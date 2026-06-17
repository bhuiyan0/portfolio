import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/shared/glow";
import { Section } from "@/components/shared/section";
import { profile, socialLinks } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <Glow className="bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" />
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
          Contact
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 max-w-md text-pretty text-muted-foreground sm:text-lg">
          I&apos;m currently {profile.availability.toLowerCase()}. If you have a
          project in mind or just want to talk frontend, my inbox is open.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href={`mailto:${profile.email}`}>
            <Mail data-icon="inline-start" />
            {profile.email}
          </a>
        </Button>
        <p className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5" />
          {profile.location}
        </p>
        <div className="mt-4 flex items-center gap-1">
          {socialLinks
            .filter((social) => !social.href.startsWith("mailto:"))
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <social.icon className="size-5" />
              </a>
            ))}
        </div>
      </div>
    </Section>
  );
}
