import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-contingent.jpg";
import { CheckCircle, Clock, Zap, Shield, Users, Briefcase } from "lucide-react";

const whyChoose = [
  "Rapid scaling for project demands", "Seasonal and cyclical workforce needs", "Specialized expertise for short-term initiatives",
  "Budget flexibility and cost control", "Risk mitigation through flexible arrangements", "Trial period before permanent commitment",
];

const roles = ["Software Developers", "QA Engineers", "Data Analysts", "Cloud Engineers", "DevOps Specialists", "Business Analysts", "Project Managers", "IT Support Staff"];

const engagementModels = [
  { title: "Short-Term Contracts", desc: "1-6 month engagements for specific project needs or seasonal demands.", icon: Clock },
  { title: "Long-Term Contracts", desc: "6-12+ month engagements for extended projects with option to convert.", icon: Briefcase },
  { title: "Team Augmentation", desc: "Supplement your existing team with specialized talent as needed.", icon: Users },
  { title: "Project-Based", desc: "Dedicated resources for specific project deliverables with clear milestones.", icon: Zap },
];

const employerBenefits = ["Workforce flexibility and scalability", "Reduced hiring risk and overhead", "Access to specialized skills on demand", "No long-term commitment required", "Consistent quality at scale", "Compliance and payroll handled"];

const ContingentStaffing = () => (
  <div>
    <HeroSection title="Contingent & Temporary Staffing Solutions" subtitle="LKM Tech provides flexible workforce solutions that scale with your business needs. From short-term project support to long-term team augmentation, we deliver qualified technology professionals when you need them." image={heroImage} badge="Contingent Staffing" ctas={[{ label: "Request Talent", to: "/contact" }]} />
    <section className="section-padding bg-background">
      <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why Contingent</span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-6">Why Choose Contingent Staffing?</h2>
          <ul className="space-y-3">{whyChoose.map(w => <li key={w} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span className="text-foreground font-medium text-sm">{w}</span></li>)}</ul>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="p-8 rounded-2xl border border-border bg-card">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-4">Roles We Staff</h3>
            <div className="grid grid-cols-2 gap-3">{roles.map(r => <div key={r} className="flex items-center gap-2 p-3 rounded-lg bg-accent"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span className="text-sm text-foreground">{r}</span></div>)}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-12"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Engagement Models</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-border bg-card hover-lift text-center h-full">
                <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mx-auto mb-4"><m.icon className="h-5 w-5 text-primary-foreground" /></div>
                <h4 className="font-display font-semibold text-card-foreground mb-2">{m.title}</h4>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-max max-w-3xl">
        <ScrollReveal><div className="text-center mb-12"><h2 className="font-display text-3xl font-bold text-foreground">Benefits for Employers</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4">
          {employerBenefits.map((b, i) => (
            <ScrollReveal key={b} delay={i * 0.06}>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span className="text-foreground font-medium text-sm">{b}</span></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Need Flexible Talent?" subtitle="Get the right technology professionals for your project timeline and budget." primaryCta={{ label: "Request Talent", to: "/contact" }} secondaryCta={{ label: "View All Services", to: "/recruitment" }} />
  </div>
);

export default ContingentStaffing;
