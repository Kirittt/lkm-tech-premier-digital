import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Users, Briefcase, Award, Grid3X3, Shield, GraduationCap, Clock, UserCheck, Plus, Phone, Mail } from "lucide-react";
import logo from "@/assets/lkm-logo.png";

const recruitmentLinks = [
  { label: "Staffing & Recruiting", to: "/recruitment", icon: Users, desc: "End-to-end talent acquisition" },
  { label: "Bench Sales", to: "/bench-sales", icon: Briefcase, desc: "Rapid consultant placement" },
  { label: "Placement Services", to: "/placement-services", icon: Award, desc: "Strategic role matching" },
  { label: "Job Categories", to: "/job-categories", icon: Grid3X3, desc: "Browse technology roles" },
  { label: "Administrative Services", to: "/admin-services", icon: Shield, desc: "Office & executive support" },
  { label: "Alumni Network", to: "/alumni-network", icon: GraduationCap, desc: "Stay connected & grow" },
  { label: "Contingent Staffing", to: "/contingent-staffing", icon: Clock, desc: "Flexible workforce solutions" },
  { label: "Direct Permanent Staffing", to: "/direct-permanent", icon: UserCheck, desc: "Full-time hire solutions" },
  { label: "Additional Services", to: "/additional-services", icon: Plus, desc: "Extended service offerings" },
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
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-background/98 backdrop-blur-2xl border-b border-border/80 shadow-lg" 
        : "bg-background/95 backdrop-blur-xl border-b border-transparent"
    }`}>
      {/* Top utility bar */}
      <div className={`hidden md:block bg-foreground text-background transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-5">
            <a href="tel:+17038141791" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span>+1 (703) 814-1791</span>
            </a>
            <a href="tel:+13074436591" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span>+1 (307) 443-6591</span>
            </a>
            <a href="mailto:info@lkmtech.com" className="hidden lg:flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3 w-3" />
              <span>info@lkmtech.com</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-background/70">
            <span>Inspire. Educate. Elevate.</span>
          </div>
        </div>
      </div>

      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img src={logo} alt="LKM Tech" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 mix-blend-multiply" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && handleDropdownEnter()}
              onMouseLeave={() => link.children && handleDropdownLeave()}
            >
              <Link
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1.5 group ${
                  location.pathname === link.to || (link.children && link.children.some(c => c.to === location.pathname))
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                )}
                {(location.pathname === link.to || (link.children && link.children.some(c => c.to === location.pathname))) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>

              {/* Mega dropdown - solid card, no glass */}
              {link.children && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden ring-1 ring-black/5"
                    >
                      {/* Header strip with gradient accent */}
                      <div className="px-6 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display text-base font-bold text-foreground">Recruitment Services</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Comprehensive talent solutions for every business need</p>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            9 Services
                          </span>
                        </div>
                      </div>
                      
                      {/* Links grid */}
                      <div className="p-3 grid grid-cols-2 gap-1 bg-card">
                        {link.children.map((child) => {
                          const Icon = child.icon;
                          const isActive = location.pathname === child.to;
                          return (
                            <Link
                              key={child.label}
                              to={child.to}
                              className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-200 group/item ${
                                isActive
                                  ? "bg-accent text-primary"
                                  : "hover:bg-muted text-foreground/85 hover:text-foreground"
                              }`}
                            >
                              <div className={`mt-0.5 p-2 rounded-lg transition-all duration-200 ${
                                isActive
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:scale-110"
                              }`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold leading-tight">{child.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-snug truncate">{child.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer CTA strip */}
                      <div className="px-6 py-4 border-t border-border bg-muted/40 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 text-primary" />
                          <a href="tel:+17038141791" className="hover:text-primary transition-colors font-medium">+1 (703) 814-1791</a>
                        </div>
                        <Link to="/contact" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/cta">
                          <span>Talk to an expert</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:block">
          <button className="gradient-bg-primary text-primary-foreground px-7 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/20">
            Get Started
          </button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background border-b border-border shadow-xl"
          >
            <nav className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {/* Mobile phone numbers */}
              <div className="px-4 py-3 mb-2 bg-muted rounded-xl space-y-2">
                <a href="tel:+17038141791" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  +1 (703) 814-1791
                </a>
                <a href="tel:+13074436591" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  +1 (307) 443-6591
                </a>
              </div>

              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                          location.pathname === link.to || link.children.some(c => c.to === location.pathname)
                            ? "text-primary bg-accent"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 pl-4 border-l-2 border-primary/20 py-2 space-y-0.5">
                              {link.children.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                                      location.pathname === child.to
                                        ? "text-primary bg-accent font-medium"
                                        : "text-foreground/60 hover:text-foreground hover:bg-muted"
                                    }`}
                                  >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
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
                <button className="w-full gradient-bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-semibold mt-3 shadow-lg">
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
