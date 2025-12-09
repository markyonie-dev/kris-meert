import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient-gold">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Interested in discussing technology transformation, leadership opportunities, 
              or strategic partnerships? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a 
              href="mailto:kris.meert@hotmail.com"
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <Mail className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground block mb-1">Email</span>
              <span className="text-foreground font-medium text-sm">kris.meert@hotmail.com</span>
            </a>
            
            <a 
              href="tel:+32469145641"
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <Phone className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground block mb-1">Phone</span>
              <span className="text-foreground font-medium text-sm">+32 469 145 641</span>
            </a>
            
            <div className="glass-card rounded-xl p-6">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <span className="text-sm text-muted-foreground block mb-1">Location</span>
              <span className="text-foreground font-medium text-sm">Belgium</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/KRIS_PROFESSIONAL_RESUME.pdf" download>
                <Download className="w-5 h-5" />
                Download Résumé
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a href="https://www.linkedin.com/in/kris-meert-4101b62/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
