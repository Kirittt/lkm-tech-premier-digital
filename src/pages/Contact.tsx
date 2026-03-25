import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-contact.jpg";
import { Mail, Phone, MapPin, Clock, MessageSquare, Shield, Zap, Users, ChevronDown } from "lucide-react";

const whyContact = [
  { icon: Zap, title: "Fast Response", desc: "We respond to all inquiries within 24 hours." },
  { icon: Shield, title: "Free Consultation", desc: "Initial assessments and consultations at no cost." },
  { icon: Users, title: "Expert Team", desc: "Connect directly with domain-specific experts." },
  { icon: MessageSquare, title: "Multiple Channels", desc: "Reach us via phone, email, or form—whatever works for you." },
];

const serviceAreas = [
  "IT Services & Cloud Solutions", "Cybersecurity Assessments", "Software Development", "IT Consulting & Strategy",
  "IT Staffing & Recruiting", "Bench Sales Support", "Placement Services", "Administrative Staffing",
];

const faqs = [
  { q: "How quickly can you fill a technology position?", a: "Our average time-to-fill for technology roles is 4-6 weeks for standard positions and 2-4 weeks for urgent placements. We maintain a database of 12,000+ pre-vetted professionals for faster matching." },
  { q: "What industries do you serve?", a: "We serve Financial Services, Healthcare, Technology, Retail & E-Commerce, Manufacturing, Education, and Government sectors with specialized expertise in each domain." },
  { q: "Do you support visa holders?", a: "Yes, we specialize in placing OPT, CPT, H1B, H4-EAD, Green Card holders, and U.S. Citizens. Our team has extensive experience with visa transfers, amendments, and immigration processes." },
  { q: "What is your replacement guarantee?", a: "We offer a 90-day replacement guarantee for all permanent placements. If a placed candidate leaves within 90 days, we will replace them at no additional cost." },
  { q: "How do your IT services engagements work?", a: "Every engagement starts with a free consultation and assessment. We then provide a detailed proposal with transparent pricing, followed by agile implementation with regular communication and post-deployment support." },
  { q: "What are your pricing models?", a: "We offer flexible pricing including fixed-price projects, time & materials, retained search, contingent staffing, and managed services. Contact us for a customized quote based on your specific needs." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <div>
      <HeroSection
        title="Let's Start a Conversation"
        subtitle="Whether you need IT services, technology talent, or strategic consulting, our team is ready to help. Get in touch and let's discuss how LKM Tech can drive your success."
        image={heroImage}
        badge="Contact Us"
      />

      {/* Why Contact */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyContact.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift text-center h-full">
                  <div className="w-11 h-11 rounded-xl gradient-bg-primary flex items-center justify-center mx-auto mb-3">
                    <w.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-card-foreground mb-1">{w.title}</h4>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="Company Name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all">
                      <option value="">Select a topic</option>
                      <option value="it-services">IT Services & Solutions</option>
                      <option value="staffing">Staffing & Recruitment</option>
                      <option value="bench-sales">Bench Sales</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="careers">Careers at LKM Tech</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project, staffing needs, or how we can help..." />
                  </div>
                  <button type="submit" className="gradient-bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
                    Send Message
                  </button>
                </form>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">Contact Info</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", value: "info@lkmtech.com" },
                    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                    { icon: MapPin, title: "Location", value: "United States (Nationwide Coverage)" },
                    { icon: Clock, title: "Business Hours", value: "Mon - Fri: 9am - 6pm EST" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Areas */}
                <div className="mt-10 p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-display font-semibold text-card-foreground mb-3">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map(s => (
                      <span key={s} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="mt-6 p-6 rounded-2xl gradient-bg-primary">
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">Book a Free Consultation</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">Schedule a free 30-minute consultation to discuss your technology and talent needs.</p>
                  <button className="bg-primary-foreground text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-foreground/90 transition-all">
                    Schedule Now
                  </button>
                </div>

                {/* Emergency Support */}
                <div className="mt-6 p-6 rounded-2xl border-2 border-primary/30 bg-accent">
                  <h3 className="font-display font-semibold text-card-foreground mb-2">🚨 Emergency Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">For urgent IT issues or critical staffing needs, our emergency team is available 24/7.</p>
                  <p className="text-sm font-semibold text-primary">Emergency: +1 (555) 123-4568</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-display font-semibold text-card-foreground text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
