import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-about.jpg";
import { Target, Eye, Lightbulb, Shield, Star, Users, Heart, Zap, Award, CheckCircle, Landmark, Cpu, ShoppingCart, Factory, GraduationCap, Building2 } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Embracing emerging technologies and creative problem-solving approaches." },
  { icon: Shield, title: "Integrity", desc: "Operating with transparency, honesty, and unwavering ethical standards." },
  { icon: Star, title: "Excellence", desc: "Delivering superior quality in every service engagement and placement." },
  { icon: Zap, title: "Agility", desc: "Adapting quickly to changing needs and dynamic market conditions." },
  { icon: Users, title: "Partnership", desc: "Building long-term relationships based on mutual success and trust." },
  { icon: Heart, title: "Diversity", desc: "Celebrating varied perspectives and creating inclusive opportunities." },
  { icon: Award, title: "Growth", desc: "Investing in continuous learning and capability expansion." },
];

const achievements = [
  { metric: "90+", label: "Projects Delivered", desc: "Across cloud, security, and software" },
  { metric: "85+", label: "Placements Made", desc: "In leading organizations nationwide" },
  { metric: "97%", label: "Client Satisfaction", desc: "Consistently high ratings" },
  { metric: "Zero", label: "Security Breaches", desc: "Perfect security record" },
  { metric: "2-4 wk", label: "Avg. Placement Time", desc: "Requirement to successful hire" },
  { metric: "30-45%", label: "Cost Savings", desc: "Vs. traditional vendors" },
  { metric: "40+", label: "States Covered", desc: "Active projects & placements" },
  { metric: "AWS/MSFT", label: "Certified Partner", desc: "Cloud & security certifications" },
];

const itProcess = [
  { step: "1", title: "Discovery & Assessment", items: ["Technical requirements gathering", "Current state analysis", "Risk and opportunity identification"] },
  { step: "2", title: "Solution Design", items: ["Architecture planning", "Technology selection", "Implementation roadmap"] },
  { step: "3", title: "Development & Implementation", items: ["Agile development methodology", "Continuous integration and testing", "Regular client communication"] },
  { step: "4", title: "Quality Assurance", items: ["Comprehensive testing protocols", "Security validation", "Performance optimization"] },
  { step: "5", title: "Deployment & Support", items: ["Smooth production rollout", "User training & documentation", "Ongoing monitoring & maintenance"] },
];

const staffingProcess = [
  { step: "1", title: "Requirement Analysis", items: ["Role definition & skill requirements", "Cultural fit assessment", "Timeline & budget alignment"] },
  { step: "2", title: "Talent Sourcing", items: ["Multi-channel candidate identification", "Proprietary database leverage", "Active & passive engagement"] },
  { step: "3", title: "Screening & Evaluation", items: ["Technical skill assessment", "Background verification", "Behavioral interview"] },
  { step: "4", title: "Client Matching", items: ["Resume presentation with analysis", "Interview coordination", "Candidate preparation"] },
  { step: "5", title: "Placement & Integration", items: ["Offer negotiation support", "Onboarding assistance", "Post-placement follow-up"] },
];

const industries = [
  { icon: Landmark, title: "Financial Services & FinTech", items: ["Core banking systems", "Trading & risk management", "Blockchain & crypto", "Regulatory compliance"] },
  { icon: Heart, title: "Healthcare & Life Sciences", items: ["EHR & HIPAA compliance", "Telemedicine platforms", "Medical device software", "Clinical data & AI"] },
  { icon: Cpu, title: "Technology & Software", items: ["SaaS product development", "Cloud-native architecture", "API platforms", "DevOps & automation"] },
  { icon: ShoppingCart, title: "Retail & E-Commerce", items: ["Omnichannel commerce", "Inventory & supply chain", "Customer personalization", "Mobile shopping apps"] },
  { icon: Factory, title: "Manufacturing & Industrial", items: ["Industrial IoT", "Supply chain optimization", "Quality management", "Predictive maintenance"] },
];

const About = () => {
  return (
    <div>
      <HeroSection
        title="Building Technology Solutions That Empower Innovation"
        subtitle="LKM Tech represents the evolution of integrated technology services and talent solutions. We combine deep technical expertise with human capital excellence, delivering comprehensive solutions that drive business success."
        image={heroImage}
        badge="About LKM Tech"
      />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Bridging Technology Innovation & Talent Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LKM Tech was founded on a powerful observation: businesses require both exceptional technology solutions and the right people to implement them successfully. Too often, organizations struggle with fragmented vendor relationships—one provider for IT services, another for staffing, and yet another for specialized projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We recognized this critical gap and built LKM Tech as an integrated solution provider. Our founding team assembled decades of combined experience in enterprise IT services, cybersecurity, cloud transformation, custom software development, and technology talent acquisition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, LKM Tech serves clients from coast to coast, from innovative startups to established enterprises, delivering the technology capabilities and talent they need to compete and thrive.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 8).map((a, i) => (
                  <div key={a.label} className="p-5 rounded-2xl bg-accent text-center hover-lift">
                    <p className="font-display text-2xl md:text-3xl font-bold text-primary">{a.metric}</p>
                    <p className="text-sm font-medium text-foreground mt-1">{a.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-5">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses through innovative technology solutions and exceptional talent, delivering measurable results that drive sustainable growth, operational efficiency, and lasting competitive advantage.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-5">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted technology and talent partner for businesses across America, recognized for innovation, reliability, and unwavering commitment to client and candidate success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Core Values</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">What Drives Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <div className="text-center p-6 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-card-foreground mb-2">{v.title}</h4>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Integrated Delivery</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Every engagement follows a structured yet flexible approach designed for optimal outcomes.</p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-primary-foreground" />
                </div>
                For IT Services
              </h3>
              <div className="space-y-4">
                {itProcess.map((p) => (
                  <div key={p.step} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-card-foreground text-sm">{p.title}</h4>
                      <ul className="mt-1 space-y-0.5">
                        {p.items.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <CheckCircle className="h-3 w-3 text-primary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary-foreground" />
                </div>
                For Staffing Services
              </h3>
              <div className="space-y-4">
                {staffingProcess.map((p) => (
                  <div key={p.step} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-card-foreground text-sm">{p.title}</h4>
                      <ul className="mt-1 space-y-0.5">
                        {p.items.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <CheckCircle className="h-3 w-3 text-primary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Industry Expertise</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Industries We Support</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <ind.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-3">{ind.title}</h3>
                  <ul className="space-y-1.5">
                    {ind.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {item}
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
        title="Partner With LKM Tech"
        subtitle="Partner with LKM Tech for industry-specialized IT services and staffing solutions that inspire, educate, and elevate your organization."
        primaryCta={{ label: "Contact Us", to: "/contact" }}
        secondaryCta={{ label: "View Careers", to: "/careers" }}
      />
    </div>
  );
};

export default About;
