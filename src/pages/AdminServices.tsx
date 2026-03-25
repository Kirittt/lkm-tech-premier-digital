import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { UserCheck, Briefcase, FileText, Users, Building, ClipboardList, CheckCircle, Shield, Star, Zap, Clock, Award } from "lucide-react";

const whyEssential = [
  { title: "Operational Efficiency", desc: "Smooth daily operations and workflows." },
  { title: "Executive Enablement", desc: "Leaders focus on strategy, not logistics." },
  { title: "Professional Image", desc: "First impressions and customer interactions." },
  { title: "Information Management", desc: "Accurate records and documentation." },
  { title: "Communication Hub", desc: "Coordination across departments and stakeholders." },
  { title: "Cost Efficiency", desc: "Optimized resource utilization." },
];

const expertise = {
  professional: ["Written and verbal communication", "Organization and time management", "Attention to detail and accuracy", "Multi-tasking and prioritization", "Problem-solving and initiative"],
  technical: ["Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)", "Google Workspace (Docs, Sheets, Slides, Gmail)", "Calendar and scheduling tools", "CRM and database systems", "Video conferencing (Zoom, Teams, Meet)", "Project management tools (Asana, Monday.com, Trello)"],
  interpersonal: ["Professional demeanor", "Discretion and confidentiality", "Adaptability and flexibility", "Team collaboration", "Customer service orientation"],
};

const roles = [
  { icon: UserCheck, title: "Executive Assistants", desc: "High-level support for C-suite executives, managing calendars, communications, and strategic coordination." },
  { icon: Building, title: "Office Managers", desc: "Overseeing office operations, vendor management, facilities, and administrative team leadership." },
  { icon: Users, title: "Administrative Assistants", desc: "General administrative support including filing, correspondence, meeting coordination, and data management." },
  { icon: Briefcase, title: "Receptionists", desc: "Front desk management, visitor coordination, phone systems, and creating welcoming first impressions." },
  { icon: FileText, title: "Data Entry Specialists", desc: "Accurate data input, database management, record maintenance, and quality verification." },
  { icon: ClipboardList, title: "Customer Support Coordinators", desc: "Client communication, ticket management, issue resolution, and customer satisfaction tracking." },
  { icon: Star, title: "Project Coordinators", desc: "Project scheduling, resource tracking, status reporting, and stakeholder communication." },
  { icon: Award, title: "Administrative Managers", desc: "Team supervision, process optimization, budget management, and strategic administrative planning." },
];

const staffingModels = [
  { title: "Temporary Staffing", desc: "Short-term administrative coverage for vacations, leaves, or seasonal needs." },
  { title: "Temp-to-Perm", desc: "Extended evaluation period before permanent employment commitment." },
  { title: "Direct Hire", desc: "Full-time permanent placement for core administrative team positions." },
  { title: "On-Demand", desc: "Flexible administrative support scaled to your immediate requirements." },
];

const AdminServices = () => {
  return (
    <div>
      <HeroSection
        title="Administrative Staffing Solutions That Keep Business Running Smoothly"
        subtitle="LKM Tech provides exceptional administrative professionals who bring organization, efficiency, and professionalism to your operations. From executive support to office coordination, we connect you with talent that ensures seamless daily operations."
        image={heroImage}
        badge="Admin Services"
      />

      {/* Why Essential */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">The Foundation</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Why Administrative Roles Are Essential</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Strong administrative support is the foundation of productive organizations.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyEssential.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover-lift">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-card-foreground">{w.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{w.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Standards</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Our Staffing Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">We carefully assess candidates across multiple dimensions.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Professional Skills", items: expertise.professional },
              { title: "Technical Proficiency", items: expertise.technical },
              { title: "Interpersonal Qualities", items: expertise.interpersonal },
            ].map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                  <h4 className="font-display font-semibold text-card-foreground mb-4">{cat.title}</h4>
                  <ul className="space-y-2">
                    {cat.items.map(item => (
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

      {/* Roles */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Positions</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Administrative Roles We Staff</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <r.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Models */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Flexibility</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Staffing Models</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingModels.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift text-center h-full">
                  <h4 className="font-display font-semibold text-card-foreground mb-2">{m.title}</h4>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Administrative Support?"
        subtitle="Let us find the right administrative professionals for your team."
        primaryCta={{ label: "Contact Us", to: "/contact" }}
        secondaryCta={{ label: "View All Services", to: "/recruitment" }}
      />
    </div>
  );
};

export default AdminServices;
