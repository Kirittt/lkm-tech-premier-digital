import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-contact.jpg";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <div>
      <HeroSection
        title="Let's Start a Conversation"
        subtitle="Whether you need IT services, technology talent, or strategic consulting, our team is ready to help."
        image={heroImage}
        badge="Contact Us"
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="it-services">IT Services</option>
                        <option value="staffing">Staffing & Recruitment</option>
                        <option value="consulting">Consulting</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project or needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="gradient-bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                  >
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
                    { icon: MapPin, title: "Location", value: "United States" },
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

                <div className="mt-10 p-6 rounded-2xl gradient-bg-primary">
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">Book a Consultation</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">Schedule a free 30-minute consultation to discuss your technology and talent needs.</p>
                  <button className="bg-primary-foreground text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-foreground/90 transition-all">
                    Schedule Now
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
