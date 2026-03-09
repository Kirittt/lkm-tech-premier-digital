import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-services.jpg";
import { Cloud, Shield, Code, Lightbulb, Server, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "End-to-end cloud services from architecture design to migration and optimization.",
    features: ["Cloud architecture design", "AWS / Azure migration", "Cloud optimization", "Multi-cloud strategy"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security services to protect your digital assets.",
    features: ["Threat detection & response", "Security audits", "Compliance frameworks", "Zero-trust architecture"],
  },
  {
    icon: Code,
    title: "Software Development",
    desc: "Custom software solutions built with modern technologies.",
    features: ["Web applications", "Enterprise platforms", "Mobile solutions", "API development"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Strategic technology guidance for digital transformation.",
    features: ["Digital transformation", "Technology strategy", "Architecture planning", "IT roadmapping"],
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    desc: "Reliable infrastructure operations and DevOps automation.",
    features: ["Data center management", "Network operations", "DevOps automation", "24/7 monitoring"],
  },
  {
    icon: CheckCircle,
    title: "QA & Automation Testing",
    desc: "Quality assurance ensuring flawless software delivery.",
    features: ["Automated testing", "Performance testing", "Security testing", "CI/CD integration"],
  },
];

const ITServices = () => {
  return (
    <div>
      <HeroSection
        title="Enterprise IT Services That Transform Businesses"
        subtitle="From cloud migration to cybersecurity, our comprehensive IT services help enterprises modernize, secure, and scale their technology infrastructure."
        image={heroImage}
        badge="IT Services"
        ctas={[{ label: "Get a Consultation", to: "/contact" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Expertise</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
                Comprehensive IT Solutions
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-card hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-5">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Modernize Your IT?"
        subtitle="Let's discuss how our IT services can transform your business operations."
        primaryCta={{ label: "Schedule a Call", to: "/contact" }}
      />
    </div>
  );
};

export default ITServices;
