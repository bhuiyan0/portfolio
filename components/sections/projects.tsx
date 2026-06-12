import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A few things I've built — from geospatial dashboards to AI tooling."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group relative flex flex-col overflow-hidden bg-card/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2">
                {project.title}
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-wrap content-start gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </CardContent>
            {(project.links.live || project.links.source) && (
              <CardFooter className="gap-2">
                {project.links.live && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      <ExternalLink data-icon="inline-start" />
                      Live
                    </a>
                  </Button>
                )}
                {project.links.source && (
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.links.source} target="_blank" rel="noreferrer">
                      <GithubIcon data-icon="inline-start" />
                      Source
                    </a>
                  </Button>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
