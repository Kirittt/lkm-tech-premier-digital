import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { Cloud, Shield, Brain, Code, Server, CheckCircle, Users, FileText, Briefcase, Award, Network, Globe, ArrowRight } from "lucide-react";

const whyLKM = [
  { title: "Extensive Client Network", items: ["600+ active employer relationships", "Fortune 500 companies to innovative startups", "Nationwide geographic coverage", "Diverse industry representation"] },
  { title: "Rapid Placement", items: ["Average placement time: 2-3 weeks", "Urgent placements possible within days", "Multiple interview opportunities simultaneously", "High conversion rates"] },
  { title: "Visa Expertise", items: ["H1B transfer and amendment experience", "OPT and CPT placement specialization", "H4-EAD opportunity matching", "Green Card and USC positions"] },
  { title: "Complete Support", items: ["Resume optimization for U.S. market", "Interview preparation and coaching", "Rate negotiation assistance", "Onboarding coordination"] },
];

const candidateProfiles = [
  { title: "OPT & CPT Students", desc: "Recent graduates seeking first U.S. employment", items: ["Entry-level to 2 years experience", "STEM and non-STEM degree holders", "Campus placement support", "Career guidance and mentorship"] },
  { title: "H1B Visa Holders", desc: "Skilled professionals requiring project continuity", items: ["Software developers and engineers", "QA and test automation specialists", "Business analysts and project managers", "Data analysts and scientists"] },
  { title: "H4-EAD Candidates", desc: "Spouses of H1B holders with work authorization", items: ["All technology domains", "Flexible location preferences", "Part-time and full-time opportunities", "Career restart support"] },
  { title: "Green Card & USC", desc: "Permanent residents and citizens seeking advancement", items: ["Senior and leadership roles", "Long-term project opportunities", "Career growth focus", "Geographic flexibility"] },
];

const processSteps = [
  { step: "1", title: "Profile Development", items: ["Resume enhancement and formatting", "Skills inventory and assessment", "Project history documentation", "Career objective clarification"] },
  { step: "2", title: "Market Research", items: ["Current demand analysis", "Rate benchmarking", "Location preference mapping", "Competition assessment"] },
  { step: "3", title: "Active Marketing", items: ["Daily job board submissions", "Direct client outreach", "Vendor partner engagement", "Targeted email campaigns"] },
  { step: "4", title: "Interview Coordination", items: ["Multiple interview scheduling", "Technical interview coaching", "Mock interview sessions", "Real-time feedback"] },
  { step: "5", title: "Offer Management", items: ["Rate negotiation on your behalf", "Contract terms review", "Start date coordination", "Visa paperwork support"] },
  { step: "6", title: "Onboarding & Support", items: ["Client orientation", "First-day coordination", "Ongoing check-ins", "Issue resolution"] },
];

const techDomains = [
  { icon: Code, title: "Software Development", desc: "Java, .NET, Python, JavaScript, full-stack, mobile" },
  { icon: CheckCircle, title: "Quality Assurance", desc: "Manual & automation, performance testing, SDET" },
  { icon: Brain, title: "Data & Analytics", desc: "Data scientists, BI developers, ETL, data warehouse" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP, CI/CD, infrastructure automation" },
  { icon: Briefcase, title: "Business & Functional", desc: "Business analysts, project managers, scrum masters" },
  { icon: Shield, title: "Specialized", desc: "Cybersecurity, AI/ML, blockchain, Salesforce, SAP" },
];

const successStories = [
  { title: "OPT Graduate Rapid Placement", profile: "Java developer, limited U.S. experience", results: ["4 interview opportunities in 2 weeks", "Full-time offer received in 16 days", "Competitive salary for entry-level", "H1B sponsorship confirmed"] },
  { title: "Large-Scale Team Deployment", profile: "Client needed 18 QA automation engineers urgently", results: ["18 consultants placed in 3 weeks", "Mix of H1B, GC, and USC", "Client project deadline met", "12 extended beyond initial contract"] },
];

const BenchSales = () => {
  return (
    <div>
      <HeroSection
        title="Bench Sales Services for Rapid Technology Consultant Placement"
        subtitle="LKM Tech specializes in bench sales—quickly placing technology consultants between projects with leading employers nationwide. Our extensive client network and expert marketing ensure continuous career progression for visa holders and U.S. citizens alike."
        image={heroImage}
        badge="Bench Sales"
        ctas={[
          { label: "Get Bench Sales Support", to: "/contact" },
          { label: "Hire Bench Consultants", to: "/contact" },
        ]}
      />

      {/* What Is Bench Sales */}
      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Overview</span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-6">What Is Bench Sales?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bench sales refers to marketing and placing technology professionals who are currently "on the bench"—available for immediate deployment but not actively working on projects. This model benefits both consultants and employers.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="p-5 rounded-xl border border-border bg-card">
                <h4 className="font-display font-semibold text-card-foreground mb-2 text-sm">Consultants Benefit From:</h4>
                <ul className="space-y-1.5">
                  {["Continuous employment and income", "Career momentum maintenance", "Skill development through diverse projects", "Visa status preservation"].map(i => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card">
                <h4 className="font-display font-semibold text-card-foreground mb-2 text-sm">Employers Benefit From:</h4>
                <ul className="space-y-1.5">
                  {["Access to immediately available talent", "Pre-screened technical expertise", "Reduced onboarding time", "Competitive rates"].map(i => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Why LKM Tech Bench Sales?</h3>
            <div className="space-y-4">
              {whyLKM.map((w) => (
                <div key={w.title} className="p-5 rounded-xl border border-border bg-card hover-lift">
                  <h4 className="font-display font-semibold text-card-foreground text-sm mb-2">{w.title}</h4>
                  <ul className="space-y-1">
                    {w.items.map(i => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Candidate Profiles */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Who We Serve</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Candidate Profiles We Market</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {candidateProfiles.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                  <h4 className="font-display text-lg font-bold text-card-foreground">{c.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                  <ul className="space-y-1.5">
                    {c.items.map(item => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Our Bench Sales Process</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-3">{p.step}</div>
                  <h4 className="font-display font-semibold text-card-foreground mb-2">{p.title}</h4>
                  <ul className="space-y-1">
                    {p.items.map(item => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Domains */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Expertise</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Technology Domains</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techDomains.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <d.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground">{d.title}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{d.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Results</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Success Stories</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-card hover-lift h-full">
                  <h4 className="font-display text-xl font-bold text-card-foreground mb-2">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Profile:</strong> {s.profile}</p>
                  <ul className="space-y-1.5">
                    {s.results.map(r => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary shrink-0" />{r}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Placed?"
        subtitle="Whether you're a consultant seeking your next project or an employer needing immediate talent, LKM Tech bench sales delivers results."
        primaryCta={{ label: "Submit Your Profile", to: "/contact" }}
        secondaryCta={{ label: "Request Bench Consultants", to: "/contact" }}
      />
    </div>
  );
};

export default BenchSales;
