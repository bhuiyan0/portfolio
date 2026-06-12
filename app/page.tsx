import { FadeIn } from "@/components/shared/fade-in";
import { SectionDivider } from "@/components/shared/section-divider";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <Skills />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <Experience />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <Projects />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
