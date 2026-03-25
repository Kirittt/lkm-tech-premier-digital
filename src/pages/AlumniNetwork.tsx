import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-alumni.jpg";
import { CheckCircle, Users, BookOpen, Award, Globe, Star, Briefcase } from "lucide-react";

const benefits = [
  { icon: Briefcase, title: "Exclusive Job Opportunities", desc: "Priority access to new positions before public posting, direct referrals to hiring managers." },
  { icon: BookOpen, title: "Professional Development", desc: "Workshops, webinars, certification prep courses, and skill development series." },
  { icon: Globe, title: "Networking Events", desc: "Virtual and in-person networking events, industry meetups, and technology conferences." },
  { icon: Star, title: "Career Resources", desc: "Resume reviews, interview coaching, salary benchmarking, and career transition support." },
  { icon: Award, title: "Recognition & Rewards", desc: "Achievement recognition, referral bonuses, and alumni spotlight features." },
  { icon: Users, title: "Mentorship Program", desc: "Connect with senior professionals for guidance, career advice, and professional growth." },
];

const programs = [
  { title: "Mentorship Program", desc: "Pair with experienced technology leaders for personalized career guidance and professional development." },
  { title: "Skill Development Series", desc: "Monthly workshops covering emerging technologies, leadership skills, and industry certifications." },
  { title: "Referral Rewards Program", desc: "Earn rewards for referring qualified professionals. Successful referrals benefit everyone in the network." },
];

const howToJoin = ["Complete your placement through LKM Tech", "Receive automatic alumni network invitation", "Create your alumni profile", "Access all benefits and resources", "Stay connected and grow your career"];

const AlumniNetwork = () => (
  <div>
    <HeroSection title="Stay Connected. Keep Growing." subtitle="The LKM Tech Alumni Network keeps you connected to opportunities, resources, and a community of technology professionals long after your initial placement. Your career journey doesn't end with us—it evolves." image={heroImage} badge="Alumni Network" />
    <section className="section-padding bg-background">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-16"><span className="text-sm font-semibold text-primary tracking-wider uppercase">Benefits</span><h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Benefits of Joining</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.06}>
              <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mb-4"><b.icon className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <ScrollReveal><div className="text-center mb-12"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Alumni Network Programs</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="p-7 rounded-2xl border border-border bg-card hover-lift h-full">
                <h4 className="font-display text-lg font-semibold text-card-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-max max-w-2xl">
        <ScrollReveal><div className="text-center mb-12"><h2 className="font-display text-3xl font-bold text-foreground">How to Join</h2></div></ScrollReveal>
        <div className="space-y-4">
          {howToJoin.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover-lift">
                <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">{i + 1}</div>
                <span className="text-foreground font-medium text-sm">{step}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Join Our Alumni Network" subtitle="Stay connected with LKM Tech and continue growing your career with exclusive opportunities and resources." primaryCta={{ label: "Join Now", to: "/contact" }} />
  </div>
);

export default AlumniNetwork;
