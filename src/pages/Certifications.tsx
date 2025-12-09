import Navigation from "@/components/Navigation";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
