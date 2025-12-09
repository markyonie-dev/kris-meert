import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
