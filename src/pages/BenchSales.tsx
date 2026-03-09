import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { Cloud, Shield, Brain, Code, Server, CheckCircle } from "lucide-react";

const domains = [
  { icon: Cloud, title: "Cloud" },
  { icon: Brain, title: "AI" },
  { icon: Shield, title: "Cybersecurity" },
  { icon: Code, title: "Software Engineering" },
  { icon: Server, title: "DevOps" },
];

const BenchSales = () => {
  return (
    <div>
      <HeroSection
        title="Bench Sales Services"
        subtitle="Helping technology consultants find new project placements quickly through our established recruiter and client network."
        image={heroImage}
        badge="Bench Sales"
      />

      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">What Is Bench Sales</span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-6">Accelerating Consultant Placements</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bench sales helps technology consultants find new project placements quickly through an established recruiter network. Our dedicated team markets your profile to our extensive client base, ensuring minimal bench time.
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Why LKM Tech</h3>
            <ul className="space-y-3">
              {["Strong client network", "Fast placement cycles", "Dedicated account managers", "Competitive rates"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Technology Domains</h3>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((d) => (
                <div key={d.title} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <d.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-medium text-card-foreground">{d.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Get Placed?"
        subtitle="Submit your profile and our team will start marketing you immediately."
        primaryCta={{ label: "Submit Your Profile", to: "/contact" }}
      />
    </div>
  );
};

export default BenchSales;
