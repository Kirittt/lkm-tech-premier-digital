import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-home.jpg";
import { Link } from "react-router-dom";
import {
  Cloud, Shield, Code, Lightbulb, Server, CheckCircle, Users, Zap,
  Building2, Heart, Cpu, ShoppingCart, Factory, GraduationCap, Landmark,
  ArrowRight, TrendingUp
} from "lucide-react";

const features = [
  { icon: Zap, title: "Integrated IT & Staffing Solutions", desc: "Unified technology and talent services under one roof." },
  { icon: Lightbulb, title: "Innovation Driven Approach", desc: "Cutting-edge solutions leveraging emerging technologies." },
  { icon: Users, title: "Nationwide Talent Network", desc: "Access to thousands of pre-vetted technology professionals." },
  { icon: TrendingUp, title: "Rapid Deployment Model", desc: "Swift team mobilization and project kickoffs." },
  { icon: Shield, title: "Security First Architecture", desc: "Enterprise-grade security built into every solution." },
  { icon: CheckCircle, title: "Proven Delivery Success", desc: "Consistent track record of on-time, on-budget delivery." },
];

const itServices = [
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure & multi-cloud architecture" },
  { icon: Shield, title: "Cybersecurity", desc: "Threat detection & compliance frameworks" },
  { icon: Code, title: "Software Development", desc: "Custom web, mobile & enterprise platforms" },
  { icon: Lightbulb, title: "IT Consulting", desc: "Digital transformation & tech strategy" },
  { icon: Server, title: "Infrastructure Management", desc: "Data centers, DevOps & automation" },
  { icon: CheckCircle, title: "QA & Automation Testing", desc: "Quality assurance & test automation" },
];

const staffingServices = [
  "IT Staffing", "Placement Services", "Bench Sales", "Executive Search", "Contract & Permanent Hiring"
];

const processSteps = [
  { step: "01", title: "Discovery & Assessment", desc: "Deep-dive analysis of your technology landscape and talent needs." },
  { step: "02", title: "Strategy Development", desc: "Tailored roadmap aligned with your business objectives." },
  { step: "03", title: "Implementation", desc: "Agile execution with dedicated project management." },
  { step: "04", title: "Quality Assurance", desc: "Rigorous testing and validation at every milestone." },
  { step: "05", title: "Optimization & Support", desc: "Continuous improvement and 24/7 operational support." },
];

const industries = [
  { icon: Landmark, title: "Financial Services" },
  { icon: Heart, title: "Healthcare" },
  { icon: Cpu, title: "Technology" },
  { icon: ShoppingCart, title: "Retail & Ecommerce" },
  { icon: Factory, title: "Manufacturing" },
  { icon: GraduationCap, title: "Education" },
  { icon: Building2, title: "Government" },
];

const caseStudies = [
  { title: "Cloud Migration for FinTech Company", metric: "48%", metricLabel: "Infrastructure cost reduction", category: "Cloud" },
  { title: "Healthcare Telemedicine Platform", metric: "3x", metricLabel: "Patient engagement increase", category: "Healthcare" },
  { title: "Cybersecurity Modernization", metric: "99.9%", metricLabel: "Threat detection rate", category: "Security" },
  { title: "Cloud Infrastructure Transformation", metric: "60%", metricLabel: "Deployment speed improvement", category: "Cloud" },
];

const Index = () => {
  return (
    <div>
      <HeroSection
        title="Inspire. Educate. Elevate."
        subtitle="LKM Tech delivers transformative IT services and strategic talent solutions that empower businesses and technology professionals to thrive in the digital era."
        image={heroImage}
        ctas={[
          { label: "Explore IT Services", to: "/it-services" },
          { label: "Find Technology Talent", to: "/recruitment" },
        ]}
      />

      {/* Why Choose LKM Tech */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
                Why Choose LKM Tech
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
                We combine deep technical expertise with strategic talent solutions to drive measurable business outcomes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover-lift cursor-default">
                  <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-5">
                    <f.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Services</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
                Core Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="p-8 md:p-10 bg-card rounded-2xl border border-border shadow-sm">
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center">
                    <Server className="h-5 w-5 text-primary-foreground" />
                  </div>
                  IT Services
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {itServices.map((s) => (
                    <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent transition-colors">
                      <s.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-card-foreground">{s.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/it-services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all">
                  Explore IT Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-8 md:p-10 bg-card rounded-2xl border border-border shadow-sm">
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Staffing & Recruitment
                </h3>
                <ul className="space-y-3">
                  {staffingServices.map((s) => (
                    <li key={s} className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium text-sm text-card-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/recruitment" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all">
                  Explore Recruitment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Process</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">How We Operate</h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 0.1}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-lg relative z-10">
                      {s.step}
                    </div>
                    <h4 className="font-display font-semibold text-foreground mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Industries</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Industries We Serve</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 0.06}>
                <div className="group flex flex-col items-center p-8 rounded-2xl bg-card border border-border hover-lift cursor-default text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <ind.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-display font-semibold text-card-foreground text-sm">{ind.title}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Success Stories</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Case Studies</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover-lift">
                  <span className="text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full">{cs.category}</span>
                  <h3 className="font-display text-xl font-bold text-card-foreground mt-4 mb-4">{cs.title}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-display text-4xl font-bold text-primary">{cs.metric}</span>
                    <span className="text-muted-foreground text-sm pb-1">{cs.metricLabel}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Partner with LKM Tech for enterprise IT services and technology talent solutions."
        primaryCta={{ label: "Schedule a Consultation", to: "/contact" }}
        secondaryCta={{ label: "View Our Solutions", to: "/solutions" }}
      />
    </div>
  );
};

export default Index;
