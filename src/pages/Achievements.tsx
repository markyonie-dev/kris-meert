import Navigation from "@/components/Navigation";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
