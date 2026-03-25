import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { Cloud, Brain, Shield, Code, Database, CheckCircle, Server, BarChart3, Laptop, TestTube, Briefcase, Users, Cpu, Globe } from "lucide-react";

const categories = [
  {
    icon: Code, title: "Software Development", desc: "Building applications and systems that power businesses.",
    roles: ["Frontend Developers (React, Angular, Vue.js)", "Backend Developers (Java, Python, .NET, Node.js, Go)", "Full-Stack Developers", "Mobile Developers (iOS, Android, React Native, Flutter)"],
    skills: ["Modern frameworks and languages", "API design and development", "Test-driven development", "Agile methodologies"],
    salary: "$85K - $190K+",
  },
  {
    icon: Cloud, title: "Cloud & DevOps", desc: "Managing infrastructure and enabling continuous delivery.",
    roles: ["Cloud Architects (AWS, Azure, GCP)", "DevOps Engineers", "Site Reliability Engineers (SRE)", "Platform Engineers"],
    skills: ["Container orchestration (Kubernetes, Docker)", "Infrastructure as Code (Terraform, CloudFormation)", "CI/CD pipelines (Jenkins, GitLab, GitHub Actions)", "Monitoring (Prometheus, Grafana, Datadog)"],
    salary: "$95K - $210K+",
  },
  {
    icon: Database, title: "Data Science & Analytics", desc: "Extracting insights and building intelligent systems.",
    roles: ["Data Scientists", "Machine Learning Engineers", "Data Engineers", "Business Intelligence Analysts"],
    skills: ["Python, R, SQL", "ML frameworks (TensorFlow, PyTorch)", "Big data (Spark, Hadoop, Kafka)", "Visualization (Tableau, Power BI)"],
    salary: "$90K - $200K+",
  },
  {
    icon: Shield, title: "Cybersecurity", desc: "Protecting assets and ensuring security.",
    roles: ["Security Engineers & Architects", "SOC Analysts", "Penetration Testers", "Incident Response Specialists"],
    skills: ["SIEM platforms (Splunk, QRadar, Sentinel)", "Network & application security", "Certifications (CISSP, CEH, CISM)", "Compliance (HIPAA, SOC 2, PCI-DSS)"],
    salary: "$95K - $215K+",
  },
  {
    icon: TestTube, title: "Quality Assurance & Testing", desc: "Ensuring software quality and reliability.",
    roles: ["QA Engineers", "Test Automation Engineers", "SDET", "Performance Test Engineers"],
    skills: ["Selenium, Cypress, Playwright, TestNG", "API testing (Postman, RestAssured)", "Performance (JMeter, LoadRunner)", "CI/CD integration"],
    salary: "$75K - $160K+",
  },
  {
    icon: Briefcase, title: "Product & Project Management", desc: "Leading technology initiatives and products.",
    roles: ["Product Managers", "Technical Product Managers", "Project Managers", "Scrum Masters & Agile Coaches"],
    skills: ["Agile/Scrum methodologies", "Product roadmap development", "Stakeholder management", "Tools: Jira, Asana, Monday.com"],
    salary: "$95K - $190K+",
  },
  {
    icon: Server, title: "IT Support & Administration", desc: "Maintaining infrastructure and supporting users.",
    roles: ["Systems Administrators", "Network Administrators", "Database Administrators", "IT Support Specialists"],
    skills: ["Windows/Linux administration", "Networking (TCP/IP, DNS, VPN)", "Cloud platforms", "ServiceNow, Zendesk"],
    salary: "$55K - $130K+",
  },
  {
    icon: BarChart3, title: "Business & Functional", desc: "Bridging technology and business.",
    roles: ["Business Analysts", "Systems Analysts", "Solution Architects", "Technical Writers"],
    skills: ["Requirements gathering", "Process documentation", "Stakeholder communication", "Domain knowledge"],
    salary: "$75K - $150K+",
  },
  {
    icon: Brain, title: "Specialized & Emerging", desc: "Cutting-edge technology roles.",
    roles: ["AI/ML Specialists", "Blockchain Developers", "IoT Engineers", "AR/VR Developers"],
    skills: ["Emerging technology expertise", "Advanced algorithms", "Cross-disciplinary knowledge", "Continuous learning mindset"],
    salary: "$110K - $270K+",
  },
];

const remoteInfo = [
  "Fully Remote: Work from anywhere in USA",
  "Hybrid: Combination of office and remote",
  "Flexible: Variable schedules and locations",
  "Remote-First Companies: Organizations built for distributed work",
];

const JobCategories = () => {
  return (
    <div>
      <HeroSection
        title="Discover Your Perfect Technology Career Path"
        subtitle="LKM Tech connects professionals with opportunities across the full spectrum of technology roles. From software engineering to data science, cloud architecture to cybersecurity, we help you find positions that align with your skills and career aspirations."
        image={heroImage}
        badge="Job Categories"
        ctas={[
          { label: "Browse All Categories", to: "#categories" },
          { label: "Upload Your Resume", to: "/contact" },
        ]}
      />

      {/* Why Diversity Matters */}
      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Career Guidance</span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-6">Why Job Category Diversity Matters</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-border bg-card">
                <h4 className="font-display font-semibold text-card-foreground mb-2 text-sm">For Job Seekers:</h4>
                <ul className="space-y-1.5">
                  {["Identify roles matching your skills", "Discover adjacent career paths", "Understand market demand", "Plan skill development", "Navigate career transitions"].map(i => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card">
                <h4 className="font-display font-semibold text-card-foreground mb-2 text-sm">For Employers:</h4>
                <ul className="space-y-1.5">
                  {["Build well-rounded teams", "Access specialized talent", "Understand role requirements", "Benchmark compensation", "Plan organizational structure"].map(i => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="p-8 rounded-2xl gradient-bg-primary">
              <Globe className="h-10 w-10 text-primary-foreground mb-4" />
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Remote & Hybrid Opportunities</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">LKM Tech offers extensive remote and hybrid opportunities across all categories.</p>
              <ul className="space-y-2">
                {remoteInfo.map(r => (
                  <li key={r} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle className="h-4 w-4 text-primary-foreground shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Explore</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Technology Job Categories</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.06}>
                <div className="group p-7 rounded-2xl border border-border bg-card hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <c.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-card-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                  
                  <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Roles</h5>
                  <ul className="space-y-1 mb-4">
                    {c.roles.map(r => (
                      <li key={r} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{r}</li>
                    ))}
                  </ul>
                  
                  <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Skills in Demand</h5>
                  <ul className="space-y-1 mb-4 flex-1">
                    {c.skills.map(s => (
                      <li key={s} className="text-xs text-muted-foreground flex items-center gap-1.5"><CheckCircle className="h-3 w-3 text-primary shrink-0" />{s}</li>
                    ))}
                  </ul>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-semibold text-primary">Salary: {c.salary}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find Your Perfect Role"
        subtitle="Explore technology job categories and find your perfect role with LKM Tech."
        primaryCta={{ label: "Browse Open Positions", to: "/contact" }}
        secondaryCta={{ label: "Submit Your Resume", to: "/contact" }}
      />
    </div>
  );
};

export default JobCategories;
