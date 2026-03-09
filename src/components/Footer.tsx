import { Link } from "react-router-dom";
import logo from "@/assets/lkm-logo.png";

const Footer = () => {
  return (
    <footer className="gradient-bg-dark text-primary-foreground/80">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="LKM Tech" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              LKM Tech delivers transformative IT services and strategic talent solutions that empower businesses and technology professionals.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Solutions", to: "/solutions" },
                { label: "IT Services", to: "/it-services" },
                { label: "Careers", to: "/careers" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["Cloud Solutions", "Cybersecurity", "Software Development", "IT Consulting", "IT Staffing", "Bench Sales", "Placement Services"].map((s) => (
                <li key={s}>
                  <Link to="/it-services" className="hover:text-primary-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>info@lkmtech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} LKM Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/80 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-primary-foreground/80 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
