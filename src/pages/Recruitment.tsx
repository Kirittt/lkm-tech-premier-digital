import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { Link } from "react-router-dom";
import { Users, Briefcase, Building, FileText, UserCheck, Network, ArrowRight, CheckCircle, Shield, Clock, Award, Zap, Star } from "lucide-react";

const whyMatters = [
  "Find qualified candidates with specialized skills",
  "Compete for talent in increasingly tight markets",
  "Reduce lengthy hiring cycles",
  "Assess technical capabilities accurately",
  "Retain top performers long-term",
  "Scale teams rapidly for critical projects",
];

const services = [
  { icon: Users, title: "Staffing & Recruiting", desc: "Permanent and contract technology professionals across all specializations.", to: "/recruitment" },
  { icon: Briefcase, title: "Bench Sales", desc: "Rapid deployment of available consultants (OPT, H1B, H4-EAD, GC, USC).", to: "/bench-sales" },
  { icon: FileText, title: "Placement Services", desc: "Permanent, contract, and contract-to-hire arrangements.", to: "/placement-services" },
  { icon: Building, title: "Job Categories", desc: "IT, engineering, data science, cybersecurity, and business technology roles.", to: "/job-categories" },
  { icon: UserCheck, title: "Administrative Services", desc: "Back-office, HR, and operational support staffing.", to: "/admin-services" },
  { icon: Network, title: "Alumni Network", desc: "Ongoing career development for placed candidates.", to: "/alumni-network" },
  { icon: Users, title: "Contingent Staffing", desc: "Short-term and project-based talent solutions.", to: "/contingent-staffing" },
  { icon: Star, title: "Direct Permanent Staffing", desc: "Executive and senior-level technology leadership placement.", to: "/direct-permanent" },
];

const processSteps = [
  { step: "1", title: "Requirement Analysis", items: ["Skills and experience requirements", "Cultural fit criteria", "Compensation benchmarking", "Timeline and urgency assessment"] },
  { step: "2", title: "Talent Sourcing", items: ["Active candidate outreach", "Passive candidate recruitment", "Internal database leveraging", "University & bootcamp partnerships"] },
  { step: "3", title: "Screening & Assessment", items: ["Resume and portfolio review", "Technical screening interviews", "Coding challenges & assessments", "Reference checks"] },
  { step: "4", title: "Client Presentation", items: ["Curated candidate shortlist", "Detailed candidate profiles", "Technical assessment results", "Availability & notice periods"] },
  { step: "5", title: "Interview Coordination", items: ["Scheduling and logistics", "Candidate preparation", "Interview feedback collection", "Communication facilitation"] },
  { step: "6", title: "Offer & Onboarding", items: ["Offer negotiation support", "Background verification", "Onboarding coordination", "Post-placement follow-up"] },
];

const employerBenefits = [
  { icon: Clock, title: "Speed", items: ["Average time-to-hire: 4-6 weeks", "Urgent placements in 2-4 weeks", "Large-scale hiring campaigns supported"] },
  { icon: Award, title: "Quality", items: ["Pre-vetted technical skills", "Cultural fit assessment", "Background verification", "90-day replacement guarantee"] },
  { icon: Zap, title: "Cost Efficiency", items: ["Reduced internal recruiting burden", "Lower cost-per-hire", "Flexible fee structures", "No success, no fee options"] },
  { icon: Shield, title: "Expertise", items: ["Technical recruiters with domain knowledge", "Market intelligence & salary data", "Compliance and immigration support"] },
];

const candidateBenefits = [
  { title: "Career Opportunities", desc: "Access to unadvertised positions and exclusive client relationships." },
  { title: "Career Support", desc: "Resume optimization, interview preparation, technical coaching, salary negotiation." },
  { title: "Visa Assistance", desc: "H1B sponsorship, OPT/CPT placement, H4-EAD, Green Card & USC positions." },
  { title: "Long-term Partnership", desc: "Alumni network membership, ongoing career development, future opportunity notifications." },
];

const caseStudy1 = {
  title: "SaaS Company Engineering Team Build",
  challenge: "Competitive market, specific tech stack (React, Node.js, AWS), cultural fit critical",
  results: ["48 engineers hired in 6 months", "96% offer acceptance rate", "92% 12-month retention", "Engineering velocity increased by 85%"],
};

const caseStudy2 = {
  title: "Cybersecurity Team Deployment",
  challenge: "Specialized skills (SIEM, threat hunting, incident response), security clearances needed",
  results: ["SOC team fully staffed in 7 weeks", "Mix of senior and junior talent", "100% security certification compliance", "Zero turnover in first year"],
};

const Recruitment = () => {
  return (
    <div>
      <HeroSection
        title="Strategic IT Staffing Solutions That Build Exceptional Teams"
        subtitle="LKM Tech connects businesses with exceptional technology professionals across all specializations. From software engineers to cybersecurity experts, we deliver pre-vetted talent that drives innovation and business success."
        image={heroImage}
        badge="Recruitment Hub"
        ctas={[
          { label: "Hire Technology Talent", to: "/contact" },
          { label: "Submit Your Resume", to: "/contact" },
        ]}
      />

      {/* Why Staffing Matters */}
      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">The Challenge</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Why IT Staffing Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">The technology talent shortage is real and growing. Organizations struggle to find and retain qualified professionals.</p>
            <ul className="space-y-3">
              {whyMatters.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6">LKM Tech solves these challenges through deep technical expertise, extensive networks, and proven recruitment methodologies.</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-accent text-center"><p className="font-display text-3xl font-bold text-primary">12K+</p><p className="text-sm text-muted-foreground mt-1">Professionals in Database</p></div>
              <div className="p-6 rounded-2xl bg-accent text-center"><p className="font-display text-3xl font-bold text-primary">4-6 wk</p><p className="text-sm text-muted-foreground mt-1">Avg. Time-to-Hire</p></div>
              <div className="p-6 rounded-2xl bg-accent text-center"><p className="font-display text-3xl font-bold text-primary">96%</p><p className="text-sm text-muted-foreground mt-1">Offer Acceptance Rate</p></div>
              <div className="p-6 rounded-2xl bg-accent text-center"><p className="font-display text-3xl font-bold text-primary">90-day</p><p className="text-sm text-muted-foreground mt-1">Replacement Guarantee</p></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Services</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Recruitment Solutions</h2>
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

      {/* Recruitment Process */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Our Recruitment Process</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-3">{p.step}</div>
                  <h4 className="font-display font-semibold text-card-foreground mb-2">{p.title}</h4>
                  <ul className="space-y-1">
                    {p.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle className="h-3 w-3 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Employers */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">For Employers</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Benefits for Employers</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employerBenefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-10 h-10 rounded-xl gradient-bg-primary flex items-center justify-center mb-4">
                    <b.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-card-foreground mb-3">{b.title}</h4>
                  <ul className="space-y-1.5">
                    {b.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle className="h-3 w-3 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Candidates */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">For Candidates</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Benefits for Candidates</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {candidateBenefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover-lift">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground">{b.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Results</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Case Studies</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[caseStudy1, caseStudy2].map((cs, i) => (
              <ScrollReveal key={cs.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-card hover-lift h-full">
                  <h4 className="font-display text-xl font-bold text-card-foreground mb-3">{cs.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Challenge:</strong> {cs.challenge}</p>
                  <h5 className="font-display font-semibold text-card-foreground text-sm mb-2">Results:</h5>
                  <ul className="space-y-1.5">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Build Your Technology Team"
        subtitle="Build your technology team with LKM Tech staffing solutions."
        primaryCta={{ label: "Post a Job Opening", to: "/contact" }}
        secondaryCta={{ label: "View Job Categories", to: "/job-categories" }}
      />
    </div>
  );
};

export default Recruitment;
