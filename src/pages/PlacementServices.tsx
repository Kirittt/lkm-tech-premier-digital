import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-placement.jpg";
import { CheckCircle, Briefcase, Users, Globe, Shield, ArrowRight } from "lucide-react";

const models = [
  { title: "Permanent Placements", desc: "Full-time employment for long-term career growth.", bestFor: ["Senior and leadership roles", "Core team building", "Cultural integration importance", "Long-term projects"], benefits: ["Stability and benefits", "Career advancement paths", "Employer investment in development"] },
  { title: "Contract Placements", desc: "Project-based or temporary technology resources.", bestFor: ["Specific project needs", "Seasonal workload increases", "Specialized expertise requirements", "Budget flexibility"], benefits: ["Immediate availability", "Specialized skills access", "Cost efficiency"] },
  { title: "Contract-to-Hire", desc: "Evaluate before committing to permanent employment.", bestFor: ["Risk mitigation", "Cultural fit validation", "Skills verification in real scenarios", "Budget considerations"], benefits: ["Reduced hiring risk", "Extended evaluation period", "Proven fit before commitment"] },
  { title: "Remote & Hybrid Roles", desc: "Flexible work arrangements for modern workforce.", bestFor: ["Geographic diversity", "Work-life balance priority", "Cost efficiency", "Access to nationwide talent"], benefits: ["Location independence", "Expanded talent pool", "Improved work-life balance"] },
];

const domains = [
  { title: "Software Engineering", items: ["Backend, frontend, full-stack", "Mobile application developers", "Embedded systems engineers"] },
  { title: "Infrastructure & Operations", items: ["Systems & network admins", "Database administrators", "DevOps and SRE"] },
  { title: "Data & Analytics", items: ["Data scientists & engineers", "BI developers & analysts", "Data architects"] },
  { title: "Security", items: ["Security engineers & architects", "SOC analysts", "Penetration testers"] },
  { title: "Product & Leadership", items: ["Product managers", "Engineering managers", "Technical directors, CTOs"] },
];

const PlacementServices = () => (
  <div>
    <HeroSection title="Placement Services That Match Talent With Opportunity" subtitle="LKM Tech delivers placement services that create lasting matches between exceptional technology professionals and forward-thinking employers. Whether you seek permanent, contract, or contract-to-hire, we facilitate connections that drive mutual success." image={heroImage} badge="Placement Services" ctas={[{ label: "Find Your Next Role", to: "/contact" }, { label: "Hire Technology Talent", to: "/contact" }]} />
    <section className="section-padding bg-background">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-16"><span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Models</span><h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Our Placement Models</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.08}>
              <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
                <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Best For</h5>
                <ul className="space-y-1 mb-4">{m.bestFor.map(b => <li key={b} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{b}</li>)}</ul>
                <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Benefits</h5>
                <ul className="space-y-1">{m.benefits.map(b => <li key={b} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{b}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-12"><span className="text-sm font-semibold text-primary tracking-wider uppercase">Expertise</span><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Technology Domains</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {domains.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.06}>
              <div className="p-5 rounded-2xl border border-border bg-card hover-lift h-full">
                <h4 className="font-display font-semibold text-card-foreground text-sm mb-3">{d.title}</h4>
                <ul className="space-y-1.5">{d.items.map(item => <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{item}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Find Your Perfect Match" subtitle="Whether you're seeking your next career opportunity or building your technology team, LKM Tech placement services deliver exceptional results." primaryCta={{ label: "Browse Open Positions", to: "/contact" }} secondaryCta={{ label: "Submit Your Resume", to: "/contact" }} />
  </div>
);

export default PlacementServices;
