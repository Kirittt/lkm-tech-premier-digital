import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-careers.jpg";
import { Rocket, BookOpen, Globe, Star, CheckCircle } from "lucide-react";

const perks = [
  { icon: Rocket, title: "Career Development", desc: "Structured growth paths and mentorship programs." },
  { icon: BookOpen, title: "Learning Opportunities", desc: "Access to certifications, courses, and conferences." },
  { icon: Globe, title: "Flexible Work", desc: "Remote and hybrid work environments." },
  { icon: Star, title: "Competitive Benefits", desc: "Health, retirement, and wellness programs." },
];

const openings = [
  { title: "Senior Cloud Architect", type: "Full-time", location: "Remote" },
  { title: "Cybersecurity Analyst", type: "Full-time", location: "Hybrid" },
  { title: "Full Stack Developer", type: "Contract", location: "Remote" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote" },
  { title: "Data Scientist", type: "Full-time", location: "Hybrid" },
  { title: "IT Project Manager", type: "Contract", location: "On-site" },
];

const Careers = () => {
  return (
    <div>
      <HeroSection
        title="Build Your Future With LKM Tech"
        subtitle="Join a team of innovators, problem-solvers, and technology enthusiasts who are shaping the future of enterprise technology."
        image={heroImage}
        badge="Careers"
        ctas={[{ label: "View Open Positions", to: "#openings" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why LKM Tech</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Why Work With Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift text-center h-full">
                  <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mx-auto mb-4">
                    <p.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Opportunities</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Open Positions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.06}>
                <div className="flex items-center justify-between p-5 rounded-xl border border-border bg-card hover-lift">
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground">{o.title}</h4>
                    <p className="text-sm text-muted-foreground">{o.type} · {o.location}</p>
                  </div>
                  <button className="gradient-bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    Apply
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        subtitle="Send us your resume and we'll reach out when we have a position that matches your skills."
        primaryCta={{ label: "Submit Your Resume", to: "/contact" }}
      />
    </div>
  );
};

export default Careers;
