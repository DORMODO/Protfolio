import {
  ThemeToggle,
  StarBackground,
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "@/components";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
