import { Building2, Globe, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "25+", label: "Years Experience" },
  { icon: Globe, value: "€100M+", label: "Portfolio Managed" },
  { icon: Users, value: "500+", label: "Engineers Led" },
  { icon: TrendingUp, value: "$250M", label: "Programs Delivered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />
      
      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient-gold">Summary</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Global ICT, R&D, and Transformation Executive with extensive experience 
                in leading large-scale engineering operations, enterprise modernization, 
                hybrid cloud implementations, and mission-critical programs across 
                telecom, SaaS, retail, and government sectors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proven track record in managing portfolios exceeding €100M, significantly 
                improving delivery performance, and strengthening operational efficiency. 
                A trusted partner to executive leadership with deep expertise in architecture, 
                AI, cloud, cybersecurity, and ERP/CRM modernization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recognized for modernizing legacy environments, elevating PMO governance, 
                and building high-performing global teams that deliver exceptional results.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
