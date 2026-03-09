import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-services.jpg";
import { Cloud, Shield, Code, Lightbulb, Server, CheckCircle, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    category: "IT Services & Solutions",
    items: [
      { icon: Cloud, title: "Cloud Solutions", desc: "Cloud architecture, migration, and optimization." },
      { icon: Shield, title: "Cybersecurity", desc: "Threat detection, compliance, and security audits." },
      { icon: Code, title: "Software Development", desc: "Custom web, mobile, and enterprise applications." },
      { icon: Lightbulb, title: "IT Consulting", desc: "Digital transformation and technology strategy." },
      { icon: Server, title: "Infrastructure", desc: "Data centers, DevOps, and network operations." },
      { icon: CheckCircle, title: "QA & Testing", desc: "Automated testing and quality assurance." },
    ],
  },
  {
    category: "Staffing & Recruitment",
    items: [
      { icon: Users, title: "IT Staffing", desc: "Contract and permanent technology professionals." },
      { icon: Users, title: "Executive Search", desc: "C-level and senior technology leadership." },
      { icon: Users, title: "Bench Sales", desc: "Available consultant placements." },
      { icon: Users, title: "Placement Services", desc: "End-to-end candidate placement." },
    ],
  },
];

const Solutions = () => {
  return (
    <div>
      <HeroSection
        title="Complete Technology & Talent Solutions"
        subtitle="From enterprise IT services to strategic talent acquisition, LKM Tech provides end-to-end solutions for your business."
        image={heroImage}
        badge="Solutions"
        ctas={[
          { label: "Explore Services", to: "/it-services" },
          { label: "Find Talent", to: "/recruitment" },
        ]}
      />

      {solutions.map((sol) => (
        <section key={sol.category} className="section-padding bg-background even:bg-secondary">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">{sol.category}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sol.items.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl border border-border bg-card hover-lift">
                    <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Let's Build Something Great Together"
        subtitle="Contact us to discuss your technology and talent needs."
        primaryCta={{ label: "Get Started", to: "/contact" }}
      />
    </div>
  );
};

export default Solutions;
