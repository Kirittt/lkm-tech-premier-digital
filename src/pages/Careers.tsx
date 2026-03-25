import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-careers.jpg";
import { Rocket, BookOpen, Globe, Star, CheckCircle, Users, Heart, Briefcase, Code, Shield, Quote, GraduationCap } from "lucide-react";

const whyWork = [
  { icon: Rocket, title: "Mission-Driven Work", desc: "Make meaningful impact by helping businesses transform digitally and empowering technology professionals to achieve their career goals." },
  { icon: BookOpen, title: "Growth & Development", desc: "Access to certifications, training programs, conferences, structured career paths, and mentorship from industry leaders." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside passionate problem-solvers in a supportive, inclusive environment that values diverse perspectives." },
  { icon: Globe, title: "Work-Life Balance", desc: "Remote and hybrid work environments, flexible scheduling, comprehensive health benefits, and wellness programs." },
];

const careerPaths = [
  { icon: Code, title: "Technology Services", roles: ["Cloud Architects", "Security Engineers", "Software Developers", "DevOps Engineers", "QA Specialists", "IT Consultants"] },
  { icon: Briefcase, title: "Staffing & Recruiting", roles: ["Technical Recruiters", "Account Managers", "Talent Acquisition Leads", "Client Relationship Managers", "Recruitment Coordinators"] },
  { icon: Shield, title: "Operations & Support", roles: ["Operations Managers", "HR Specialists", "Marketing Coordinators", "Finance Analysts", "Administrative Staff", "Project Managers"] },
];

const testimonials = [
  { name: "Sarah Chen", role: "Senior Cloud Architect", quote: "LKM Tech gave me the platform to work on cutting-edge cloud projects while growing as a leader. The mentorship program has been invaluable." },
  { name: "Marcus Johnson", role: "Technical Recruiter", quote: "Being part of a company that genuinely cares about both clients and candidates makes every placement feel meaningful. The culture here is unmatched." },
  { name: "Anita Patel", role: "QA Lead", quote: "The diversity of projects and the supportive team environment have accelerated my career growth beyond what I imagined. LKM Tech invests in its people." },
];

const openings = [
  { title: "Senior Cloud Architect", type: "Full-time", location: "Remote", department: "Technology Services" },
  { title: "Cybersecurity Analyst", type: "Full-time", location: "Hybrid", department: "Technology Services" },
  { title: "Full Stack Developer", type: "Contract", location: "Remote", department: "Technology Services" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", department: "Technology Services" },
  { title: "Data Scientist", type: "Full-time", location: "Hybrid", department: "Technology Services" },
  { title: "IT Project Manager", type: "Contract", location: "On-site", department: "Operations" },
  { title: "Technical Recruiter", type: "Full-time", location: "Remote", department: "Staffing" },
  { title: "Account Manager", type: "Full-time", location: "Hybrid", department: "Staffing" },
];

const howToApply = [
  { step: "1", title: "Browse Positions", desc: "Review our open positions and find roles matching your skills and interests." },
  { step: "2", title: "Submit Application", desc: "Apply online with your resume, cover letter, and portfolio (if applicable)." },
  { step: "3", title: "Initial Screening", desc: "Our recruiting team reviews your application and conducts an initial phone screen." },
  { step: "4", title: "Interview Process", desc: "Technical and behavioral interviews with hiring managers and team members." },
  { step: "5", title: "Offer & Onboarding", desc: "Receive your offer, complete onboarding, and start your LKM Tech journey!" },
];

const Careers = () => {
  return (
    <div>
      <HeroSection
        title="Build Your Future With LKM Tech"
        subtitle="Join a team of innovators, problem-solvers, and technology enthusiasts who are shaping the future of enterprise technology. At LKM Tech, your growth is our priority."
        image={heroImage}
        badge="Careers"
        ctas={[{ label: "View Open Positions", to: "#openings" }]}
      />

      {/* Why Work With Us */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why LKM Tech</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Why Work With Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {whyWork.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full flex gap-5">
                  <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center shrink-0">
                    <p.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Opportunities</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Career Paths at LKM Tech</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((cp, i) => (
              <ScrollReveal key={cp.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mb-4">
                    <cp.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground mb-3">{cp.title}</h3>
                  <ul className="space-y-2">
                    {cp.roles.map(r => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our People</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Employee Testimonials</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="font-display font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Join Us</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Open Positions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.05}>
                <div className="flex items-center justify-between p-5 rounded-xl border border-border bg-card hover-lift">
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground">{o.title}</h4>
                    <p className="text-sm text-muted-foreground">{o.type} · {o.location} · {o.department}</p>
                  </div>
                  <button className="gradient-bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0">
                    Apply
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">How to Apply</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {howToApply.map((h, i) => (
              <ScrollReveal key={h.step} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">{h.step}</div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">{h.title}</h4>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity & Internships */}
      <section className="section-padding bg-secondary">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="p-8 rounded-2xl border border-border bg-card h-full">
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">Internship & Entry-Level</h3>
              <p className="text-muted-foreground text-sm mb-4">We offer structured internship programs and entry-level positions for recent graduates looking to launch their technology careers.</p>
              <ul className="space-y-2">
                {["Hands-on project experience", "Mentorship from senior professionals", "Pathway to full-time employment", "Skill development programs"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-2xl border border-border bg-card h-full">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">Diversity & Inclusion</h3>
              <p className="text-muted-foreground text-sm mb-4">LKM Tech is committed to building a diverse and inclusive workplace where every team member can thrive and contribute their unique perspective.</p>
              <ul className="space-y-2">
                {["Equal opportunity employer", "Diverse leadership commitment", "Inclusive hiring practices", "Employee resource groups"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        subtitle="Send us your resume and we'll reach out when we have a position that matches your skills."
        primaryCta={{ label: "Submit Your Resume", to: "/contact" }}
        secondaryCta={{ label: "Contact Recruiting Team", to: "/contact" }}
      />
    </div>
  );
};

export default Careers;
