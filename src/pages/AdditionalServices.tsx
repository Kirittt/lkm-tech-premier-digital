import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-additional.jpg";
import { CheckCircle, BookOpen, Award, Users, BarChart3, Shield, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Training & Upskilling Programs", desc: "Custom training programs to upskill your existing workforce on emerging technologies.", items: ["Cloud certification preparation", "Cybersecurity awareness training", "Agile and DevOps methodology", "Leadership development programs"] },
  { icon: Award, title: "Employer Branding", desc: "Build a compelling employer brand that attracts top technology talent.", items: ["Employer value proposition development", "Career page optimization", "Social media recruitment strategy", "Employee advocacy programs"] },
  { icon: Users, title: "Onboarding & Integration Support", desc: "Ensure smooth transitions for new hires with structured onboarding programs.", items: ["30/60/90 day onboarding plans", "Cultural integration support", "Buddy and mentorship pairing", "Performance milestone tracking"] },
  { icon: Shield, title: "DEI Programs", desc: "Diversity, equity, and inclusion initiatives for building inclusive teams.", items: ["Diversity hiring strategies", "Inclusive job description writing", "Bias-free assessment processes", "DEI metrics and reporting"] },
  { icon: GraduationCap, title: "Interview Training & Assessment", desc: "Comprehensive interview preparation and candidate assessment tools.", items: ["Structured interview frameworks", "Technical assessment design", "Interviewer training workshops", "Candidate evaluation scorecards"] },
  { icon: TrendingUp, title: "Salary Benchmarking & Market Intelligence", desc: "Data-driven compensation insights for competitive hiring.", items: ["Role-specific salary data", "Geographic compensation analysis", "Benefits benchmarking", "Market trend reports"] },
  { icon: BarChart3, title: "Workforce Analytics", desc: "Data-driven insights to optimize your workforce strategy.", items: ["Hiring funnel analytics", "Time-to-fill tracking", "Quality-of-hire metrics", "Workforce planning forecasts"] },
  { icon: Briefcase, title: "Career Development Services", desc: "Comprehensive career support for technology professionals.", items: ["Career path mapping", "Skill gap analysis", "Professional coaching", "Portfolio and resume development"] },
];

const AdditionalServices = () => (
  <div>
    <HeroSection title="Additional Services to Elevate Your Workforce Strategy" subtitle="Beyond staffing and IT services, LKM Tech offers a comprehensive suite of additional services designed to optimize your talent strategy, develop your workforce, and drive organizational excellence." image={heroImage} badge="Additional Services" />
    <section className="section-padding bg-background">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-16"><span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Offerings</span><h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Additional Services</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mb-4"><s.icon className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-1.5">{s.items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />{item}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Optimize Your Workforce Strategy" subtitle="Explore our additional services to enhance your talent management and workforce development capabilities." primaryCta={{ label: "Learn More", to: "/contact" }} secondaryCta={{ label: "View All Solutions", to: "/solutions" }} />
  </div>
);

export default AdditionalServices;
