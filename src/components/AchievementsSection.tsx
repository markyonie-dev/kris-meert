import { TrendingUp, Clock, DollarSign, Shield, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: DollarSign,
    metric: "$250M+",
    title: "Portfolio Value",
    description: "Mission-critical programs delivered for US federal agencies including DoD and IRS",
  },
  {
    icon: TrendingUp,
    metric: "35%",
    title: "Efficiency Gains",
    description: "Cross-team friction reduction through unified ICT & R&D governance",
  },
  {
    icon: Clock,
    metric: "30%",
    title: "Faster Delivery",
    description: "Supply chain cycle time reduction through ERP re-architecture",
  },
  {
    icon: Shield,
    metric: "100%",
    title: "Audit Compliance",
    description: "Multi-year federal audits passed for DoD and IRS cybersecurity standards",
  },
  {
    icon: Users,
    metric: "500+",
    title: "Engineers Led",
    description: "Global teams across US, EMEA, and APJ delivering high-security infrastructure",
  },
  {
    icon: Zap,
    metric: "50+",
    title: "Programs Delivered",
    description: "Concurrent engineering programs with 100% on-time delivery rate",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Impact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-gradient-gold">Achievements</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={item.title}
                className="group glass-card rounded-2xl p-8 hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-3">
                  {item.metric}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
