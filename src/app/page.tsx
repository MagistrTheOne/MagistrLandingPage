import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PatentsSection } from "@/components/sections/PatentsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="patents">
        <PatentsSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}