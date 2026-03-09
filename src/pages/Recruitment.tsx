import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { Link } from "react-router-dom";
import { Users, Briefcase, Building, FileText, UserCheck, Network, ArrowRight } from "lucide-react";

const services = [
  { icon: Users, title: "Staffing & Recruiting", desc: "Full-cycle recruitment for technology roles.", to: "/recruitment" },
  { icon: Briefcase, title: "Bench Sales", desc: "Quick placements for available consultants.", to: "/bench-sales" },
  { icon: FileText, title: "Placement Services", desc: "Permanent and contract placement solutions.", to: "/recruitment" },
  { icon: Building, title: "Job Categories", desc: "Specialized technology role categories.", to: "/job-categories" },
  { icon: UserCheck, title: "Administrative Services", desc: "Administrative and support staffing.", to: "/admin-services" },
  { icon: Network, title: "Contingent Staffing", desc: "Flexible workforce on demand.", to: "/recruitment" },
  { icon: Users, title: "Direct Permanent Staffing", desc: "Find your next full-time team member.", to: "/recruitment" },
  { icon: Network, title: "Alumni Network", desc: "Stay connected with our talent community.", to: "/recruitment" },
];

const Recruitment = () => {
  return (
    <div>
      <HeroSection
        title="Connecting Businesses With Exceptional Technology Talent"
        subtitle="Our comprehensive recruitment services help enterprises build world-class technology teams with speed and precision."
        image={heroImage}
        badge="Recruitment Hub"
        ctas={[{ label: "Find Talent", to: "/contact" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Services</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
                Recruitment Solutions
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.06}>
                <Link to={s.to}>
                  <div className="group p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <s.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-card-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for Top Technology Talent?"
        subtitle="Tell us about your staffing needs and we'll match you with the right professionals."
        primaryCta={{ label: "Request Talent", to: "/contact" }}
        secondaryCta={{ label: "View Job Categories", to: "/job-categories" }}
      />
    </div>
  );
};

export default Recruitment;
