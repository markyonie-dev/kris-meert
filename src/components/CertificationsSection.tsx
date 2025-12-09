import { Award, GraduationCap } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Credentials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="text-gradient-gold">Certifications</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    Master of Science
                  </h4>
                  <p className="text-primary font-medium">
                    Electromechanical Engineering
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Katholieke Industriële Hogeschool Oost-Vlaanderen
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Gent, Belgium • June 1995
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">PMP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Project Management Professional®
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      PMI Certified
                    </p>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <h4 className="font-semibold text-foreground mb-3">Awards</h4>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Egemin Reward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
