import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-home.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";
import blogSecurity from "@/assets/blog-security.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import { Link } from "react-router-dom";
import {
  Cloud, Shield, Code, Lightbulb, Server, CheckCircle, Users, Zap,
  Building2, Heart, Cpu, ShoppingCart, Factory, GraduationCap, Landmark,
  ArrowRight, TrendingUp, Star, Quote, Briefcase, Network, Clock, Award
} from "lucide-react";

const features = [
  { icon: Zap, title: "Integrated Excellence", desc: "Seamlessly combining IT services and talent acquisition under one trusted partnership." },
  { icon: Lightbulb, title: "Innovation-Driven", desc: "Harnessing emerging technologies including AI, cloud computing, and automation for superior outcomes." },
  { icon: Users, title: "National Presence", desc: "Serving organizations coast-to-coast with localized expertise and understanding." },
  { icon: TrendingUp, title: "Rapid Deployment", desc: "Average solution implementation and candidate placement within 2-4 weeks." },
  { icon: Shield, title: "Security-First Mindset", desc: "Enterprise-grade security protocols safeguarding every engagement." },
  { icon: CheckCircle, title: "Demonstrated Success", desc: "Over 250+ successful projects delivered and 75+ strategic placements completed." },
  { icon: Star, title: "Customized Approach", desc: "Tailored solutions from project-specific to comprehensive long-term partnerships." },
];

const itServices = [
  { icon: Lightbulb, title: "IT Consulting", desc: "Digital transformation strategy, technology roadmaps, architecture design & IT governance.", link: "/it-services" },
  { icon: Code, title: "Software Development", desc: "Custom enterprise apps, mobile development, progressive web apps & API integration.", link: "/it-services" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Strategic cloud migration (AWS, Azure, GCP), cloud-native architecture & FinOps.", link: "/it-services" },
  { icon: Shield, title: "Cybersecurity", desc: "Security assessments, 24/7 SOC monitoring, compliance (HIPAA, SOC 2, PCI-DSS).", link: "/it-services" },
  { icon: Server, title: "Infrastructure Management", desc: "Managed IT services, network architecture, server & database management.", link: "/it-services" },
  { icon: CheckCircle, title: "QA & SDET Services", desc: "Manual & automation testing, performance testing, CI/CD pipeline integration.", link: "/it-services" },
];

const staffingServices = [
  { title: "IT Staffing", desc: "Software engineers, cloud architects, DevOps specialists, data scientists & QA engineers.", link: "/recruitment" },
  { title: "Placement Services", desc: "Permanent, contract, and contract-to-hire solutions tailored to your needs.", link: "/placement-services" },
  { title: "Bench Sales & Deployment", desc: "Rapid placement of pre-vetted consultants — OPT, H1B, H4-EAD, GC, USC.", link: "/bench-sales" },
  { title: "Specialized Recruitment", desc: "AI/ML experts, cybersecurity pros, blockchain engineers & emerging tech specialists.", link: "/recruitment" },
];

const processSteps = [
  { step: "01", title: "Discovery & Assessment", desc: "Comprehensive understanding of your technology needs and talent requirements." },
  { step: "02", title: "Strategy Development", desc: "Creating customized solutions precisely aligned with business objectives." },
  { step: "03", title: "Implementation & Deployment", desc: "Executing with precision, speed, and unwavering quality focus." },
  { step: "04", title: "Quality Assurance", desc: "Rigorous testing and validation throughout every project stage." },
  { step: "05", title: "Support & Optimization", desc: "Ongoing monitoring, support, and continuous improvement initiatives." },
];

const forBusinesses = [
  { title: "Technology Transformation", desc: "Modernize infrastructure, applications, and processes." },
  { title: "Security Enhancement", desc: "Protect valuable assets with advanced cybersecurity measures." },
  { title: "Scalable Teams", desc: "Access to pre-vetted, highly skilled technology professionals." },
  { title: "Cost Efficiency", desc: "Reduce operational overhead while dramatically increasing capability." },
  { title: "Strategic Guidance", desc: "Expert consultation for critical technology decisions." },
  { title: "Compliance Assurance", desc: "Meet regulatory requirements with confidence and precision." },
];

const forProfessionals = [
  { title: "Exclusive Opportunities", desc: "Access to unadvertised positions at industry-leading companies." },
  { title: "Career Development", desc: "Resume optimization, interview coaching, and continuous skill enhancement." },
  { title: "Visa Support", desc: "Specialized assistance for H1B, OPT, CPT, and H4-EAD holders." },
  { title: "Project Variety", desc: "Exposure to diverse technologies across multiple industries." },
  { title: "Competitive Compensation", desc: "Market-leading rates with comprehensive benefits packages." },
  { title: "Long-term Growth", desc: "Active alumni network and continuous learning opportunities." },
];

const industries = [
  { icon: Landmark, title: "Financial Services", desc: "Banking, FinTech, payment processors, investment firms." },
  { icon: Heart, title: "Healthcare & Life Sciences", desc: "Medical devices, health IT, telemedicine, biotechnology." },
  { icon: Cpu, title: "Technology & Software", desc: "SaaS companies, product development, tech startups." },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "Omnichannel retail, supply chain, customer experience." },
  { icon: Factory, title: "Manufacturing", desc: "Industrial IoT, automation systems, supply chain." },
  { icon: GraduationCap, title: "Education", desc: "EdTech platforms, learning management systems." },
  { icon: Building2, title: "Government", desc: "Federal, state, and municipal technology initiatives." },
];

const caseStudies = [
  { title: "Cloud Migration for FinTech Company", metric: "48%", metricLabel: "Infrastructure cost reduction", category: "Cloud", desc: "Migrated 250+ applications for a financial services firm to AWS, achieving 99.99% uptime." },
  { title: "Healthcare Telemedicine Platform", metric: "12K+", metricLabel: "Monthly remote consultations", category: "Healthcare", desc: "Built comprehensive telemedicine platform with complete HIPAA compliance." },
  { title: "Cybersecurity Transformation", metric: "99.9%", metricLabel: "Threat detection rate", category: "Security", desc: "Implemented zero-trust architecture for retail chain with 600+ locations." },
  { title: "SaaS Engineering Team Build", metric: "48", metricLabel: "Engineers hired in 6 months", category: "Staffing", desc: "Scaled engineering team from 25 to 70 with 96% offer acceptance rate." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "H1B Holder", quote: "LKM Tech transformed my career trajectory. Within four weeks, they connected me with a leading FinTech company with excellent team dynamics and long-term stability." },
  { name: "Priya Menon", role: "OPT Graduate", quote: "Navigating the U.S. job market felt overwhelming, but LKM Tech guided me through every step—from resume transformation to mock interviews and offer negotiation." },
  { name: "Emily Rodriguez", role: "Green Card Holder", quote: "Professional, efficient, and genuinely trustworthy. The team understood my skill set perfectly and matched me with a project aligned with my long-term career aspirations." },
  { name: "Daniel Mitchell", role: "U.S. Citizen", quote: "The staffing team is truly exceptional. They connected me to an outstanding role with a Fortune 500 client that values innovation and professional growth." },
];

const blogPosts = [
  { title: "The Future of Cloud Computing in Enterprise", category: "Cloud Computing", date: "March 15, 2026", excerpt: "Exploring how multi-cloud strategies are reshaping enterprise infrastructure and enabling organizations to achieve unprecedented scalability.", image: blogCloud },
  { title: "Zero Trust Security: A Complete Guide", category: "Cybersecurity", date: "March 10, 2026", excerpt: "Understanding zero-trust architecture and why every enterprise needs it to protect against modern cyber threats.", image: blogSecurity },
  { title: "AI in Recruitment: Transforming Talent Acquisition", category: "AI Innovation", date: "March 5, 2026", excerpt: "How AI-powered tools are revolutionizing the way companies find top talent, from resume screening to candidate matching.", image: blogAi },
];

const stats = [
  { value: "90+", label: "Projects Delivered", icon: Award },
  { value: "85+", label: "Placements Made", icon: Users },
  { value: "97%", label: "Client Satisfaction", icon: Star },
  { value: "2-4 Weeks", label: "Avg. Deployment", icon: Clock },
];

const Index = () => {
  return (
    <div>
      <HeroSection
        title="Inspire. Educate. Elevate."
        subtitle="LKM Tech unites cutting-edge technology services with strategic talent solutions, inspiring innovation, educating teams, and elevating businesses to new heights of digital excellence."
        image={heroImage}
        ctas={[
          { label: "Explore IT Services", to: "/it-services" },
          { label: "Find Technology Talent", to: "/recruitment" },
        ]}
      />

      {/* Stats Bar */}
      <section className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 text-center shadow-lg hover-lift">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LKM Tech */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
                Why Choose LKM Tech
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
                LKM Tech stands where innovation meets opportunity. As a forward-thinking technology services and talent solutions provider, we deliver comprehensive expertise that transforms challenges into competitive advantages.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.06}>
                <div className="group p-7 rounded-2xl border border-border bg-card hover-lift cursor-default h-full">
                  <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
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

      {/* Core Services - IT */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Our Services</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">IT Services & Solutions</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
                LKM Tech provides enterprise-level technology services designed for modern business needs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.07}>
                <Link to={s.link}>
                  <div className="group p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                    <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <s.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/it-services" className="inline-flex items-center gap-2 gradient-bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md">
                View All IT Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services - Staffing */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Talent Solutions</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Staffing & Recruitment Services</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
                We build high-performing teams by connecting organizations with exceptional technology talent across all domains.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {staffingServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <Link to={s.link}>
                  <div className="group flex items-start gap-4 p-7 rounded-2xl border border-border bg-card hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/recruitment" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Explore All Recruitment Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Our Process</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">How We Operate</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Our integrated methodology ensures consistent, high-quality delivery across every engagement.</p>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 0.1}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-lg relative z-10 shadow-lg">
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

      {/* For Businesses & Professionals */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="p-8 md:p-10 bg-card rounded-2xl border border-border shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground">For Businesses</h3>
                </div>
                <p className="text-muted-foreground mb-6">Partner with LKM Tech to transform your technology capabilities and build exceptional teams.</p>
                <ul className="space-y-3">
                  {forBusinesses.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-sm text-card-foreground">{item.title}: </span>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/it-services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all">
                  Explore IT Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-8 md:p-10 bg-card rounded-2xl border border-border shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground">For Technology Professionals</h3>
                </div>
                <p className="text-muted-foreground mb-6">LKM Tech accelerates career advancement through comprehensive support and exclusive opportunities.</p>
                <ul className="space-y-3">
                  {forProfessionals.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-sm text-card-foreground">{item.title}: </span>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/careers" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all">
                  Explore Careers <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Industries</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Industries We Serve</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">LKM Tech delivers specialized expertise across diverse sectors with domain-specific solutions.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 0.06}>
                <div className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover-lift cursor-default text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <ind.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-display font-semibold text-card-foreground text-sm mb-1">{ind.title}</h4>
                  <p className="text-xs text-muted-foreground">{ind.desc}</p>
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
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Success Stories</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Case Studies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Proven results that demonstrate our commitment to client success.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover-lift h-full">
                  <span className="text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full">{cs.category}</span>
                  <h3 className="font-display text-xl font-bold text-card-foreground mt-4 mb-2">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{cs.desc}</p>
                  <div className="flex items-end gap-2 pt-4 border-t border-border">
                    <span className="font-display text-4xl font-bold text-primary">{cs.metric}</span>
                    <span className="text-muted-foreground text-sm pb-1">{cs.metricLabel}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Testimonials</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">What Our Candidates Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-card-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Insights */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-accent px-4 py-1.5 rounded-full mb-4">Insights</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Latest Blog Insights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Stay ahead with expert perspectives on cloud, cybersecurity, AI, and the evolving technology landscape.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.08}>
                <Link to="/blog">
                  <div className="group rounded-2xl border border-border bg-card hover-lift overflow-hidden h-full flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        width={1280}
                        height={768}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs font-semibold text-primary">{post.category}</span>
                      <h3 className="font-display text-lg font-bold text-card-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Read <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Transform your technology capabilities and build exceptional teams with LKM Tech—where we inspire innovation, educate teams, and elevate businesses."
        primaryCta={{ label: "Explore IT Services", to: "/it-services" }}
        secondaryCta={{ label: "Find Technology Talent", to: "/recruitment" }}
      />
    </div>
  );
};

export default Index;
