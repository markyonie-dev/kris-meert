import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--navy-light)),hsl(var(--background)))]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
              Global Technology Executive
            </span>
          </div>

          {/* Name */}
          <h1 className="opacity-0 animate-fade-up delay-100 font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Kris</span>
            <span className="text-gradient-gold ml-4">Meert</span>
          </h1>

          {/* Title */}
          <p className="opacity-0 animate-fade-up delay-200 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            ICT, R&D & Technology Transformation Executive
          </p>

          {/* Summary */}
          <p className="opacity-0 animate-fade-up delay-300 text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            25+ years leading large-scale engineering operations, enterprise modernization, 
            and mission-critical programs across telecom, SaaS, retail, and government sectors.
          </p>

          {/* Contact Info */}
          <div className="opacity-0 animate-fade-up delay-400 flex flex-wrap justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <a href="mailto:kris.meert@hotmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              kris.meert@hotmail.com
            </a>
            <a href="tel:+32469145641" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +32 469 145 641
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Belgium
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-up delay-500 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/KRIS_PROFESSIONAL_RESUME.pdf" download>
                <Download className="w-5 h-5" />
                Download Résumé
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a href="https://www.linkedin.com/in/kris-meert-4101b62/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
