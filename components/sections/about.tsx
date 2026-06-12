import { GraduationCap } from "lucide-react";
import { Section } from "@/components/shared/section";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A frontend engineer who ships">
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <div className="space-y-10">
          <dl className="flex flex-row gap-8 lg:flex-col lg:gap-10">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-border pl-4 transition-colors duration-300 hover:border-brand/50 lg:pl-6"
            >
              <dd className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
          </dl>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <GraduationCap className="size-4 text-muted-foreground" />
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((entry) => (
                <li key={entry.degree}>
                  <p className="text-sm font-medium text-foreground">
                    {entry.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {entry.institution}
                    <span className="text-muted-foreground/60">
                      {" "}
                      · {entry.period}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
