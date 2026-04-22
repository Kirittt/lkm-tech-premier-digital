import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-services.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";
import blogSecurity from "@/assets/blog-security.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogSoftware from "@/assets/blog-software.jpg";
import blogHiring from "@/assets/blog-hiring.jpg";
import { Cloud, Shield, Brain, Code, TrendingUp, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Brain, label: "AI Innovation" },
  { icon: Code, label: "Software Development" },
  { icon: TrendingUp, label: "Technology Hiring Trends" },
];

const categoryImages: Record<string, string> = {
  "Cloud Computing": blogCloud,
  "Cybersecurity": blogSecurity,
  "AI Innovation": blogAi,
  "Software Development": blogSoftware,
  "Technology Hiring Trends": blogHiring,
};

const posts = [
  { title: "The Future of Cloud Computing in Enterprise", category: "Cloud Computing", date: "March 15, 2026", excerpt: "Exploring how multi-cloud strategies are reshaping enterprise infrastructure and enabling organizations to achieve unprecedented scalability and cost efficiency.", featured: true },
  { title: "Zero Trust Security: A Complete Guide", category: "Cybersecurity", date: "March 10, 2026", excerpt: "Understanding zero-trust architecture and why every enterprise needs it to protect against modern cyber threats and data breaches." },
  { title: "AI in Recruitment: Transforming Talent Acquisition", category: "AI Innovation", date: "March 5, 2026", excerpt: "How AI-powered tools are revolutionizing the way companies find top talent, from resume screening to candidate matching algorithms." },
  { title: "Building Scalable Microservices Architecture", category: "Software Development", date: "March 1, 2026", excerpt: "Best practices for designing and deploying microservices at scale, including patterns for service discovery, load balancing, and fault tolerance." },
  { title: "Top Technology Skills in Demand for 2026", category: "Technology Hiring Trends", date: "Feb 25, 2026", excerpt: "The most sought-after tech skills and certifications employers are looking for, from cloud-native development to AI/ML engineering." },
  { title: "DevOps Best Practices for Modern Teams", category: "Software Development", date: "Feb 20, 2026", excerpt: "Streamlining development workflows with CI/CD, infrastructure as code, and observability for faster, more reliable deployments." },
  { title: "Securing Remote Work: Enterprise Strategies", category: "Cybersecurity", date: "Feb 15, 2026", excerpt: "Essential security measures for protecting distributed teams, including VPN alternatives, endpoint protection, and security awareness training." },
  { title: "Data Engineering: Building Modern Data Pipelines", category: "AI Innovation", date: "Feb 10, 2026", excerpt: "How modern data engineering practices are enabling real-time analytics and AI/ML workloads at enterprise scale." },
  { title: "The Rise of Platform Engineering", category: "Cloud Computing", date: "Feb 5, 2026", excerpt: "Why platform engineering is becoming essential for developer productivity and how to build internal developer platforms." },
];

const popularTopics = [
  "Cloud Migration Strategies", "Cybersecurity Frameworks", "AI/ML in Enterprise", "DevOps Automation",
  "Hiring Best Practices", "Remote Work Technology", "Data Privacy Compliance", "Microservices Architecture",
];

const Blog = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <HeroSection
        title="Technology Insights & Thought Leadership"
        subtitle="Stay ahead with expert perspectives on cloud, cybersecurity, AI, and the evolving technology landscape. Our team shares actionable insights to help you make informed technology and talent decisions."
        image={heroImage}
        badge="Blog"
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          {/* Categories */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((c) => (
                <button key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:bg-accent transition-colors">
                  <c.icon className="h-4 w-4 text-primary" />
                  {c.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          {posts.filter(p => p.featured).map((post) => (
            <ScrollReveal key={post.title}>
              <div className="mb-12 p-8 md:p-10 rounded-2xl gradient-bg-primary text-primary-foreground">
                <span className="text-xs font-semibold bg-primary-foreground/20 px-3 py-1 rounded-full">Featured</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-3">{post.title}</h2>
                <p className="text-primary-foreground/80 max-w-2xl mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-primary-foreground/60">{post.date}</span>
                  <span className="text-sm text-primary-foreground/60">·</span>
                  <span className="text-sm text-primary-foreground/60">{post.category}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(p => !p.featured).map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.06}>
                <div className="group rounded-2xl border border-border bg-card hover-lift overflow-hidden h-full flex flex-col">
                  <div className="h-48 gradient-bg-primary opacity-80" />
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
              </ScrollReveal>
            ))}
          </div>

          {/* Popular Topics */}
          <ScrollReveal>
            <div className="mt-16 p-8 rounded-2xl border border-border bg-card">
              <h3 className="font-display text-xl font-bold text-card-foreground mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map(t => (
                  <span key={t} className="px-4 py-2 rounded-full bg-accent text-sm font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal>
            <div className="mt-12 p-8 md:p-10 rounded-2xl gradient-bg-primary text-center">
              <Mail className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Subscribe to Our Blog</h3>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">Get the latest technology insights delivered to your inbox weekly.</p>
              <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 outline-none focus:border-primary-foreground/50"
                />
                <button type="submit" className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all shrink-0">
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Want to Contribute?"
        subtitle="Share your expertise with our community. We welcome guest contributions from technology leaders."
        primaryCta={{ label: "Contact Us", to: "/contact" }}
      />
    </div>
  );
};

export default Blog;
