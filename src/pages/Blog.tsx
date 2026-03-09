import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-services.jpg";
import { Cloud, Shield, Brain, Code, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Brain, label: "AI Innovation" },
  { icon: Code, label: "Software Development" },
  { icon: TrendingUp, label: "Technology Hiring Trends" },
];

const posts = [
  { title: "The Future of Cloud Computing in Enterprise", category: "Cloud Computing", date: "March 5, 2026", excerpt: "Exploring how multi-cloud strategies are reshaping enterprise infrastructure." },
  { title: "Zero Trust Security: A Complete Guide", category: "Cybersecurity", date: "March 1, 2026", excerpt: "Understanding zero-trust architecture and why every enterprise needs it." },
  { title: "AI in Recruitment: Transforming Talent Acquisition", category: "AI Innovation", date: "Feb 25, 2026", excerpt: "How AI-powered tools are revolutionizing the way companies find top talent." },
  { title: "Building Scalable Microservices Architecture", category: "Software Development", date: "Feb 20, 2026", excerpt: "Best practices for designing and deploying microservices at scale." },
  { title: "Top Technology Skills in Demand for 2026", category: "Technology Hiring Trends", date: "Feb 15, 2026", excerpt: "The most sought-after tech skills and certifications employers are looking for." },
  { title: "DevOps Best Practices for Modern Teams", category: "Software Development", date: "Feb 10, 2026", excerpt: "Streamlining development workflows with CI/CD and infrastructure as code." },
];

const Blog = () => {
  return (
    <div>
      <HeroSection
        title="Technology Insights & Thought Leadership"
        subtitle="Stay ahead with expert perspectives on cloud, cybersecurity, AI, and the evolving technology landscape."
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.08}>
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
        </div>
      </section>
    </div>
  );
};

export default Blog;
