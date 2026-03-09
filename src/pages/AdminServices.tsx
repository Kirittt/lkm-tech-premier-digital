import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-recruitment.jpg";
import { UserCheck, Briefcase, FileText, Users, Building, ClipboardList } from "lucide-react";

const roles = [
  { icon: UserCheck, title: "Executive Assistants" },
  { icon: Building, title: "Office Managers" },
  { icon: Users, title: "Administrative Assistants" },
  { icon: Briefcase, title: "Receptionists" },
  { icon: FileText, title: "Data Entry Specialists" },
  { icon: ClipboardList, title: "Project Coordinators" },
];

const AdminServices = () => {
  return (
    <div>
      <HeroSection
        title="Administrative Services & Staffing"
        subtitle="Professional administrative talent to keep your organization running smoothly."
        image={heroImage}
        badge="Admin Services"
      />
      <section className="section-padding bg-background">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Administrative Roles We Staff</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">We provide skilled administrative professionals across all organizational functions.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <r.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground">{r.title}</h3>
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
      />
    </div>
  );
};

export default AdminServices;
