import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-about.jpg";
import { Target, Eye, Lightbulb, Shield, Star, Users, Heart } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously pushing boundaries with emerging technologies." },
  { icon: Shield, title: "Integrity", desc: "Building trust through transparent and ethical practices." },
  { icon: Star, title: "Excellence", desc: "Delivering best-in-class solutions and services." },
  { icon: Users, title: "Collaboration", desc: "Working together to achieve extraordinary results." },
  { icon: Heart, title: "Customer Success", desc: "Your success is the ultimate measure of ours." },
];

const About = () => {
  return (
    <div>
      <HeroSection
        title="Building Technology Solutions That Empower Innovation"
        subtitle="LKM Tech is a leading technology solutions and talent services company focused on delivering innovative IT services and strategic workforce solutions."
        image={heroImage}
        badge="About LKM Tech"
      />

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Bridging Technology Innovation & Talent Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LKM Tech was founded with a clear vision: to bridge the gap between cutting-edge technology innovation and exceptional talent development. We believe that great technology is built by great people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve enterprises across multiple industries, delivering cloud solutions, cybersecurity services, custom software development, and strategic IT consulting alongside our comprehensive staffing and recruitment services.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-4xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground mt-1">Professionals Placed</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-4xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Enterprise Clients</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent text-center">
                  <p className="font-display text-4xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground mt-1">Support Available</p>
                </div>
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
                  Empower businesses through technology and empower professionals through opportunity. We strive to be the catalyst for digital transformation and career growth.
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
                  Become a trusted global partner for digital transformation and IT talent solutions, recognized for innovation, integrity, and excellence.
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
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Values</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">What Drives Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl border border-border bg-card hover-lift">
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

      <CTASection
        title="Join Our Journey"
        subtitle="Partner with LKM Tech to transform your business or accelerate your career."
        primaryCta={{ label: "Contact Us", to: "/contact" }}
        secondaryCta={{ label: "View Careers", to: "/careers" }}
      />
    </div>
  );
};

export default About;
