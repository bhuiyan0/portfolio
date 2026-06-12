import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Four domains, one goal: shipping product that feels great to use."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card
            key={group.title}
            className={cn(
              "group relative overflow-hidden bg-card/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20",
              group.wide && "sm:col-span-2"
            )}
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 transition-colors duration-300 group-hover:border-brand/30 group-hover:text-brand">
                <group.icon className="size-5" />
              </div>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="transition-colors duration-200 hover:border-foreground/25 hover:text-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
