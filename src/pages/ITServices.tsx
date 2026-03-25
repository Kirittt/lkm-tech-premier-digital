import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-services.jpg";
import { Cloud, Shield, Code, Lightbulb, Server, CheckCircle, Laptop, TestTube, ArrowRight, Award, Landmark, Heart, ShoppingCart, Factory } from "lucide-react";

const whyMatters = [
  "Modernize legacy systems and infrastructure",
  "Enhance cybersecurity against evolving threats",
  "Scale rapidly to meet dynamic market demands",
  "Reduce operational costs while improving performance",
  "Ensure compliance with regulatory requirements",
  "Enable remote and hybrid work capabilities",
];

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Transform your infrastructure with cloud-native and hybrid architectures.",
    features: ["Cloud migration and modernization strategies", "Multi-cloud strategy and management", "Cloud-native application development", "Cost optimization and FinOps", "Disaster recovery and business continuity"],
    benefit: "40-65% cost reduction, infinite scalability, improved reliability",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    desc: "Protect your assets with comprehensive security solutions.",
    features: ["Security assessments and comprehensive audits", "Penetration testing and vulnerability management", "24/7 SOC monitoring and incident response", "Compliance frameworks (HIPAA, SOC 2, PCI-DSS, ISO 27001)", "Zero-trust architecture implementation"],
    benefit: "Risk mitigation, regulatory compliance, brand protection",
  },
  {
    icon: Code,
    title: "Software Development",
    desc: "Build custom solutions tailored to your business needs.",
    features: ["Enterprise web application development", "Cross-platform mobile apps (iOS, Android, hybrid)", "Enterprise software and portals", "API development and system integration", "Legacy system modernization"],
    benefit: "Competitive differentiation, process automation, business agility",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Strategic guidance for technology decisions.",
    features: ["Digital transformation roadmaps", "Technology architecture and design", "Vendor selection and evaluation", "IT governance and compliance", "CTO/CIO advisory services"],
    benefit: "Informed decisions, risk mitigation, strategic alignment",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    desc: "Reliable IT operations and support.",
    features: ["Comprehensive managed IT services", "Network design and optimization", "Server and database management", "24/7 monitoring and proactive support", "Help desk and end-user support"],
    benefit: "Reduced downtime, predictable costs, business continuity",
  },
  {
    icon: TestTube,
    title: "QA & SDET Services",
    desc: "Quality assurance ensuring flawless software delivery.",
    features: ["Manual & automation testing (Selenium, Cypress, Playwright)", "Performance, load, and stress testing", "CI/CD pipeline automation integration", "Test strategy planning & test case development", "API automation and integration testing"],
    benefit: "Faster releases, fewer defects, superior user experience",
  },
];

const approach = [
  { step: "01", title: "Discovery & Assessment", items: ["Current state analysis", "Pain point identification", "Opportunity mapping", "ROI estimation"] },
  { step: "02", title: "Solution Design", items: ["Architecture planning", "Technology selection", "Implementation roadmap", "Risk mitigation strategy"] },
  { step: "03", title: "Implementation", items: ["Agile delivery methodology", "Regular stakeholder communication", "Continuous integration & testing", "Change management support"] },
  { step: "04", title: "Optimization", items: ["Performance monitoring", "Cost optimization", "Security hardening", "Continuous improvement"] },
];

const partnerships = [
  { title: "AWS Partner", desc: "Certified solutions and migration expertise" },
  { title: "Microsoft Partner", desc: "Azure, Microsoft 365, and enterprise solutions" },
  { title: "Google Cloud Partner", desc: "GCP implementation and optimization" },
  { title: "Security Vendors", desc: "Partnerships with leading cybersecurity platforms" },
  { title: "DevOps Tools", desc: "Expertise across the modern DevOps ecosystem" },
];

const industrySolutions = [
  { icon: Landmark, title: "Financial Services", items: ["Core banking modernization", "Payment processing platforms", "Trading systems & risk management", "Regulatory compliance automation"] },
  { icon: Heart, title: "Healthcare", items: ["EHR integration & optimization", "Telemedicine platforms", "HIPAA-compliant infrastructure", "Medical device connectivity"] },
  { icon: ShoppingCart, title: "Retail & E-Commerce", items: ["Omnichannel commerce platforms", "Inventory management", "Customer analytics", "POS & payment integration"] },
  { icon: Factory, title: "Manufacturing", items: ["Industrial IoT & smart factory", "Supply chain visibility", "Quality management systems", "Predictive maintenance"] },
];

const caseStudies = [
  { title: "Cloud Migration Success", desc: "Migrated 250+ applications for a financial services firm to AWS, achieving 48% cost reduction and 99.99% uptime.", metric: "48%", label: "Cost Reduction" },
  { title: "Cybersecurity Transformation", desc: "Implemented zero-trust architecture for retail chain with 600+ locations, preventing breaches while enabling secure remote access.", metric: "600+", label: "Locations Secured" },
  { title: "Custom Platform Development", desc: "Built healthcare telemedicine platform serving 12,000+ monthly consultations with complete HIPAA compliance.", metric: "12K+", label: "Monthly Consultations" },
];

const whyChoose = [
  "Proven Expertise: 600+ successful projects across industries",
  "Certified Professionals: AWS, Azure, GCP, security certifications",
  "Integrated Approach: IT services plus staffing under one partnership",
  "Transparent Pricing: No hidden fees, clear scope and deliverables",
  "Ongoing Support: Post-implementation optimization and support",
  "Security Focus: Security embedded in every solution",
  "Business Alignment: Technology serving business objectives",
];

const ITServices = () => {
  return (
    <div>
      <HeroSection
        title="Enterprise IT Services That Transform Business Capabilities"
        subtitle="LKM Tech delivers comprehensive IT services that modernize infrastructure, enhance security, and accelerate digital innovation. From cloud architecture to cybersecurity, we provide the technology foundation businesses need to compete and grow."
        image={heroImage}
        badge="IT Services"
        ctas={[
          { label: "Explore Services", to: "#services" },
          { label: "Request Assessment", to: "/contact" },
        ]}
      />

      {/* Why IT Services Matter */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why It Matters</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Why IT Services Matter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Digital transformation is no longer optional—it's essential for organizational survival and growth. Organizations face mounting pressure to modernize while maintaining security and compliance.
              </p>
              <ul className="space-y-3">
                {whyMatters.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 leading-relaxed">LKM Tech helps businesses navigate these challenges through strategic IT services that deliver measurable, sustainable results.</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-3xl font-bold text-primary">600+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-3xl font-bold text-primary">99.99%</p>
                  <p className="text-sm text-muted-foreground mt-1">Uptime Achieved</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-3xl font-bold text-primary">40-65%</p>
                  <p className="text-sm text-muted-foreground mt-1">Avg. Cost Savings</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground mt-1">Support Available</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Expertise</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Our IT Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-card hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-5">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2 mb-4 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-primary font-semibold">Benefits: {s.benefit}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Methodology</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Our Approach</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((a, i) => (
              <ScrollReveal key={a.step} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-10 h-10 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">{a.step}</div>
                  <h4 className="font-display font-semibold text-card-foreground mb-3">{a.title}</h4>
                  <ul className="space-y-1.5">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
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

      {/* Technology Partnerships */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Partnerships</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Technology Partnerships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">LKM Tech maintains strategic partnerships with leading technology providers.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partnerships.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.06}>
                <div className="p-5 rounded-xl border border-border bg-card text-center hover-lift h-full">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h4 className="font-display font-semibold text-card-foreground text-sm">{p.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Industry Focus</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Industry Solutions</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {industrySolutions.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <ind.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground mb-2">{ind.title}</h4>
                    <ul className="space-y-1">
                      {ind.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
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
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="flex items-end gap-2 mb-4">
                    <span className="font-display text-4xl font-bold text-primary">{cs.metric}</span>
                    <span className="text-sm text-muted-foreground pb-1">{cs.label}</span>
                  </div>
                  <h4 className="font-display font-semibold text-card-foreground mb-2">{cs.title}</h4>
                  <p className="text-sm text-muted-foreground">{cs.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Why LKM Tech</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">Why Choose LKM Tech IT Services</h2>
              <ul className="space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="gradient-bg-primary rounded-2xl p-10 text-center">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">Ready to Get Started?</h3>
                <p className="text-primary-foreground/80 mb-6">Schedule a free consultation to discuss your technology needs.</p>
                <a href="/contact" className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all">
                  Schedule Free Consultation
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Your Technology Capabilities"
        subtitle="Transform your technology capabilities with LKM Tech IT services."
        primaryCta={{ label: "Schedule a Call", to: "/contact" }}
        secondaryCta={{ label: "View Solutions", to: "/solutions" }}
      />
    </div>
  );
};

export default ITServices;
