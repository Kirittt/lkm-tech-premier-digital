import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/lkm-logo.png";

const recruitmentLinks = [
  { label: "Staffing & Recruiting", to: "/recruitment" },
  { label: "Bench Sales", to: "/bench-sales" },
  { label: "Placement Services", to: "/recruitment#placement" },
  { label: "Job Categories", to: "/job-categories" },
  { label: "Administrative Services", to: "/admin-services" },
  { label: "Contingent Staffing", to: "/recruitment#contingent" },
  { label: "Direct Permanent Staffing", to: "/recruitment#permanent" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
  { label: "IT Services", to: "/it-services" },
  { label: "Recruitment", to: "/recruitment", children: recruitmentLinks },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="LKM Tech" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(true)}
              onMouseLeave={() => link.children && setDropdownOpen(false)}
            >
              <Link
                to={link.to}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {link.children && dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-xl border border-border p-2"
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:block">
          <button className="gradient-bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === link.to
                        ? "text-primary bg-accent"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <button className="w-full gradient-bg-primary text-primary-foreground px-6 py-3 rounded-lg text-base font-semibold mt-2">
                  Get Started
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
