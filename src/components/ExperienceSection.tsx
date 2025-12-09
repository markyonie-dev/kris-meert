import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Director R&D Operations / Director of PMO / Site R",
    company: "Ekinops",
    location: "Heverlee, Belgium",
    period: "Jan 2025 - Present",
    achievements: [
      "Built and unified ICT & R&D governance across hardware, software, cloud, and infrastructure, reducing cross-team friction by 35%",
      "Modernized hybrid cloud and data center environments, boosting innovation throughput by 30%",
      "Established global PMO and portfolio governance for a €100M+ R&D portfolio, increasing delivery efficiency by 20%",
      "Enhanced cross-functional coordination achieving 20% facility efficiency gains",
    ],
  },
  {
    title: "Senior ICT Transformation Director",
    company: "Colruyt Group",
    location: "Brussels, Belgium",
    period: "2023 - 2025",
    achievements: [
      "Led multi-year ICT transformation delivering 30% operational efficiency uplift across core business units",
      "Executed enterprise-wide ERP re-architecture reducing supply chain cycle time by 30% and costs by 15%",
      "Consolidated fragmented CRM into unified Salesforce platform, eliminating legacy risk",
      "Built and deployed GenAI architecture improving project throughput by 25%",
    ],
  },
  {
    title: "Executive Program Director / Chief Architect",
    company: "Hewlett Packard Enterprise",
    location: "Valencia, Spain",
    period: "2019 - 2023",
    achievements: [
      "Oversaw $250M mission-critical portfolio for US federal agencies with 30% improved uptime",
      "Implemented enterprise architecture frameworks increasing global release predictability by 10% YoY",
      "Directed cybersecurity modernization to meet DoD and IRS compliance",
      "Led 500+ engineers across continents, optimizing operating budgets",
    ],
  },
  {
    title: "Senior Director – R&D Program Engineering",
    company: "Hewlett Packard Enterprise",
    location: "Valencia, Spain",
    period: "2015 - 2019",
    achievements: [
      "Directed global R&D programs generating $180M in annual revenue",
      "Increased operational efficiency 25% through architecture modernization",
      "Built advanced executive reporting frameworks improving C-suite decision-making by 30%",
      "Delivered multi-year transformation under budget with 15+ product initiatives",
    ],
  },
  {
    title: "Director – Software Engineering & Program M.",
    company: "Hewlett-Packard",
    location: "Valencia, Spain",
    period: "2012 - 2015",
    achievements: [
      "Led 10 Agile engineering teams increasing customer satisfaction by 35%",
      "Launched proprietary storage platform raising competitive win rate by 45%",
      "Reduced feature rollout time by 20% through Agile methodologies",
      "Managed $5M–$15M engineering budgets with full governance compliance",
    ],
  },
  {
    title: "Program Director – R&D Factory Consulting",
    company: "Hewlett-Packard",
    location: "Valencia, Spain",
    period: "2007 - 2012",
    achievements: [
      "Delivered 50+ concurrent programs with 100% on-time delivery",
      "Reduced cybersecurity vulnerabilities by 30%, protecting $90M in recurring revenue",
      "Standardized Agile/Lean practices across US, EMEA, and APJ",
    ],
  },
  {
    title: "Enterprise Solutions Architect – EMEA",
    company: "Hewlett-Packard",
    location: "Brussels / Valencia",
    period: "2000 - 2007",
    achievements: [
      "Drove technical strategy across five countries achieving 3% YoY market share growth",
      "Led EMEA contract negotiations delivering 29% profit growth",
      "Executed large-scale ICT deployments increasing customer satisfaction by 30%",
    ],
  },
  {
    title: "IT Architect – Mainframe & Infrastructure",
    company: "IBM",
    location: "Brussels, Belgium",
    period: "1995 - 2000",
    achievements: [
      "Designed high-availability mainframe architectures for finance and public sector",
      "Reduced batch processing times by 30% through system optimization",
      "Delivered DR/BCP solutions achieving RTO <4 hours and RPO <15 minutes",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium to-background" />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Career Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient-gold">Experience</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background glow-gold z-10" />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 ml-8 md:ml-0 hover-lift">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
