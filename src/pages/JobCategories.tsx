import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { Cloud, Brain, Shield, Code, Database, CheckCircle, Server, BarChart3 } from "lucide-react";

const categories = [
  { icon: Code, title: "Software Development", desc: "Full-stack, frontend, backend engineers" },
  { icon: Cloud, title: "Cloud Engineering", desc: "AWS, Azure, GCP specialists" },
  { icon: Shield, title: "Cybersecurity", desc: "Security analysts, engineers, architects" },
  { icon: Database, title: "Data Science", desc: "Data analysts, data engineers" },
  { icon: Brain, title: "AI & Machine Learning", desc: "ML engineers, AI researchers" },
  { icon: CheckCircle, title: "QA & Testing", desc: "QA analysts, automation engineers" },
  { icon: Server, title: "DevOps Engineering", desc: "DevOps, SRE, infrastructure engineers" },
  { icon: BarChart3, title: "Business Analysis", desc: "Business analysts, product managers" },
];

const JobCategories = () => {
  return (
    <div>
      <HeroSection
        title="Technology Job Categories"
        subtitle="Explore specialized technology roles across our recruitment network."
        image={heroImage}
        badge="Job Categories"
      />
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.06}>
                <div className="group p-6 rounded-2xl border border-border bg-card hover-lift text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <c.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Find Your Next Opportunity"
        subtitle="Submit your resume and let us match you with the perfect role."
        primaryCta={{ label: "Apply Now", to: "/contact" }}
      />
    </div>
  );
};

export default JobCategories;
