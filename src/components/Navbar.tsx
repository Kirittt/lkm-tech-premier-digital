import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/lkm-logo.png";

const recruitmentLinks = [
  { label: "Staffing & Recruiting", to: "/recruitment" },
  { label: "Bench Sales", to: "/bench-sales" },
  { label: "Placement Services", to: "/placement-services" },
  { label: "Job Categories", to: "/job-categories" },
  { label: "Administrative Services", to: "/admin-services" },
  { label: "Alumni Network", to: "/alumni-network" },
  { label: "Contingent Staffing", to: "/contingent-staffing" },
  { label: "Direct Permanent Staffing", to: "/direct-permanent" },
  { label: "Additional Services", to: "/additional-services" },
];

const navLinks = [
  { label: "Home", to: "/" },
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" 
        : "bg-background/80 backdrop-blur-xl border-b border-border/50"
    }`}>
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="LKM Tech" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(true)}
              onMouseLeave={() => link.children && setDropdownOpen(false)}
            >
              <Link
                to={link.to}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                  location.pathname === link.to
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />}
              </Link>
              {link.children && dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 bg-card rounded-xl shadow-2xl border border-border p-2 backdrop-blur-xl"
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-150 ${
                        location.pathname === child.to
                          ? "text-primary bg-accent font-medium"
                          : "text-foreground/70 hover:text-primary hover:bg-accent"
                      }`}
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
          <button className="gradient-bg-primary text-primary-foreground px-7 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg">
            Get Started
          </button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
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
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border shadow-lg"
          >
            <nav className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          location.pathname === link.to
                            ? "text-primary bg-accent"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.to}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                                  location.pathname === child.to
                                    ? "text-primary bg-accent"
                                    : "text-foreground/60 hover:text-foreground hover:bg-muted"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
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
                  )}
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
