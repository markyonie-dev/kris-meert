import { 
  Server, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Cpu, 
  Building, 
  Briefcase,
  Workflow,
  Globe,
  Brain,
  Network
} from "lucide-react";

const skills = [
  { icon: Workflow, name: "R&D Operations Leadership", category: "Leadership" },
  { icon: Building, name: "ERP / CRM Modernization", category: "Enterprise" },
  { icon: BarChart3, name: "PMO & Portfolio Governance", category: "Management" },
  { icon: Cpu, name: "Enterprise Architecture", category: "Technical" },
  { icon: Cloud, name: "Cloud & Infrastructure", category: "Technical" },
  { icon: BarChart3, name: "KPI Frameworks & P&L", category: "Business" },
  { icon: Server, name: "Mainframe & Mission-Critical", category: "Technical" },
  { icon: Users, name: "C-Suite & Board Engagement", category: "Leadership" },
  { icon: Shield, name: "Cybersecurity & Risk", category: "Security" },
  { icon: Globe, name: "Vendor Ecosystem Management", category: "Business" },
  { icon: Brain, name: "Digital & AI Transformation", category: "Innovation" },
  { icon: Network, name: "Multisite Engineering", category: "Leadership" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Core <span className="text-gradient-gold">Competencies</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group glass-card rounded-xl p-5 hover-lift cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm leading-tight mb-1">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
