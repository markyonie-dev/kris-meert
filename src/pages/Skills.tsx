import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
