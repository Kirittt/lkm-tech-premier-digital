import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/lkm-logo-white.png";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Youtube, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Banner - BLACK */}
      <div className="bg-black">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/10 text-white/70 mb-4">
                Newsletter
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Subscribe to LKM Tech
              </h3>
              <p className="text-white/60 text-base max-w-lg">
                Stay ahead with the latest in cloud computing, cybersecurity, AI innovation, and hiring trends delivered weekly to your inbox.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/8 backdrop-blur-sm text-white placeholder:text-white/30 border border-white/15 outline-none focus:border-white/40 focus:bg-white/12 transition-all text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all shrink-0 flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  {subscribed ? "Subscribed ✓" : (
                    <>Subscribe <Send className="h-4 w-4" /></>
                  )}
                </button>
              </form>
              <p className="text-white/30 text-xs mt-3">
                No spam. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="gradient-bg-dark text-white/80">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            {/* Brand */}
            <div className="lg:col-span-4">
              <a
                href="https://lkmtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mb-5 group"
                aria-label="LKM Tech home"
              >
                <img
                  src={logo}
                  alt="LKM Tech"
                  width={220}
                  height={220}
                  className="h-28 w-auto group-hover:opacity-80 transition-opacity"
                />
              </a>
              <p className="text-sm leading-relaxed text-white/50 mb-6 max-w-sm">
                LKM Tech delivers transformative IT services and strategic talent solutions that empower businesses and technology professionals to thrive in the digital era. We inspire innovation, educate teams, and elevate businesses to new heights.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/lkm-tech", label: "LinkedIn", external: true },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200 group"
                  >
                    <social.icon className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about" },
                  { label: "IT Services", to: "/it-services" },
                  { label: "Careers", to: "/careers" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact Us", to: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group">
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">IT Services</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Cloud Solutions",
                  "Cybersecurity",
                  "Software Development",
                  "IT Consulting",
                  "Infrastructure Management",
                  "QA & Testing",
                ].map((s) => (
                  <li key={s}>
                    <Link to="/it-services" className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group">
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recruitment */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">Recruitment</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Staffing & Recruiting", to: "/recruitment" },
                  { label: "Bench Sales", to: "/bench-sales" },
                  { label: "Placement Services", to: "/placement-services" },
                  { label: "Job Categories", to: "/job-categories" },
                  { label: "Contingent Staffing", to: "/contingent-staffing" },
                  { label: "Direct Permanent", to: "/direct-permanent" },
                  { label: "Alumni Network", to: "/alumni-network" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group">
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40">Email Us</p>
                    <a href="mailto:info@lkmtech.com" className="text-white hover:text-primary transition-colors">info@lkmtech.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40">Call Us</p>
                    <a href="tel:+17038141791" className="block text-white hover:text-primary transition-colors">+1 (703) 814-1791</a>
                    <a href="tel:+13074436591" className="block text-white hover:text-primary transition-colors">+1 (307) 443-6591</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40">Location</p>
                    <p className="text-white/60">United States</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust badges / stats row */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "90+", label: "Projects Delivered" },
                { value: "85+", label: "Placements Made" },
                { value: "97%", label: "Client Satisfaction" },
                { value: "40+", label: "States Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} LKM Tech. All rights reserved. | Inspire. Educate. Elevate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-white/40">
              <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white/70 transition-colors">Terms & Conditions</Link>
              <Link to="/cookies" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
              <Link to="/dmca" className="hover:text-white/70 transition-colors">DMCA Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
