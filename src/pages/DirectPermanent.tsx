import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-permanent.jpg";
import { CheckCircle, Users, Shield, Award, TrendingUp, Briefcase } from "lucide-react";

const whyPermanent = [
  "Build stable, committed technology teams", "Invest in long-term employee development", "Ensure cultural alignment and retention",
  "Reduce turnover costs and disruption", "Create career growth pathways", "Strengthen organizational knowledge",
];

const process = [
  { step: "1", title: "Requirement Definition", items: ["Detailed role specification", "Cultural fit criteria", "Compensation benchmarking", "Growth path mapping"] },
  { step: "2", title: "Talent Sourcing", items: ["Multi-channel candidate search", "Passive candidate outreach", "Database and network leverage", "Diversity-focused sourcing"] },
  { step: "3", title: "Rigorous Screening", items: ["Technical assessments", "Behavioral interviews", "Background verification", "Reference checks"] },
  { step: "4", title: "Client Matching", items: ["Curated shortlist presentation", "Interview coordination", "Feedback management", "Offer negotiation support"] },
  { step: "5", title: "Onboarding & Follow-up", items: ["Seamless transition support", "30/60/90-day check-ins", "Performance monitoring", "Ongoing relationship management"] },
];

const metrics = [
  { metric: "92%", label: "12-Month Retention Rate" },
  { metric: "96%", label: "Offer Acceptance Rate" },
  { metric: "4-6 wk", label: "Average Time-to-Hire" },
  { metric: "90-day", label: "Replacement Guarantee" },
];

const DirectPermanent = () => (
  <div>
    <HeroSection title="Direct Permanent Staffing for Long-Term Success" subtitle="LKM Tech's direct permanent staffing connects you with technology professionals who become integral members of your team. We focus on long-term fit, career alignment, and sustainable employment relationships." image={heroImage} badge="Direct Permanent" ctas={[{ label: "Hire Permanent Talent", to: "/contact" }, { label: "Find Your Role", to: "/contact" }]} />
    <section className="section-padding bg-background">
      <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">The Advantage</span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-6">Why Direct Permanent Staffing?</h2>
          <ul className="space-y-3">{whyPermanent.map(w => <li key={w} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span className="text-foreground font-medium text-sm">{w}</span></li>)}</ul>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="grid grid-cols-2 gap-4">
            {metrics.map(m => (
              <div key={m.label} className="p-6 rounded-2xl bg-accent text-center">
                <p className="font-display text-3xl font-bold text-primary">{m.metric}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-16"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Permanent Staffing Process</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <ScrollReveal key={p.step} delay={i * 0.06}>
              <div className="p-5 rounded-2xl border border-border bg-card hover-lift h-full">
                <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-3">{p.step}</div>
                <h4 className="font-display font-semibold text-card-foreground text-sm mb-2">{p.title}</h4>
                <ul className="space-y-1">{p.items.map(item => <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{item}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Build Your Permanent Team" subtitle="Find technology professionals who will grow with your organization." primaryCta={{ label: "Start Hiring", to: "/contact" }} secondaryCta={{ label: "View All Services", to: "/recruitment" }} />
  </div>
);

export default DirectPermanent;
