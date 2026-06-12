import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
    >
      <ol className="relative space-y-12 border-l border-border pl-8">
        {experiences.map((job) => (
          <li key={job.company} className="group relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-1.5 size-2.5 rounded-full border-2 border-border bg-background transition-colors duration-300 group-hover:border-brand"
            />
            <p className="font-mono text-sm text-muted-foreground">
              {job.period}
              <span className="text-muted-foreground/60"> · {job.location}</span>
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              {job.role}
              <span className="text-muted-foreground"> · {job.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {job.summary}
            </p>
            <ul className="mt-4 max-w-2xl space-y-2 text-sm text-muted-foreground">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
