import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Users, Briefcase, Award, Grid3X3, Shield, GraduationCap, Clock, UserCheck, Plus } from "lucide-react";
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
        : "bg-background/90 backdrop-blur-xl border-b border-transparent"
    }`}>
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img src={logo} alt="LKM Tech" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
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
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                )}
                {/* Active indicator */}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>

              {/* Mega dropdown */}
              {link.children && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-card/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-border/60 overflow-hidden"
                    >
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-border/50 bg-muted/30">
                        <h3 className="font-display text-sm font-bold text-foreground">Recruitment Services</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Comprehensive talent solutions for every need</p>
                      </div>
                      
                      {/* Links grid */}
                      <div className="p-3 grid grid-cols-2 gap-1">
                        {link.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link
                              key={child.label}
                              to={child.to}
                              className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${
                                location.pathname === child.to
                                  ? "bg-accent text-primary"
                                  : "hover:bg-muted/60 text-foreground/80 hover:text-foreground"
                              }`}
                            >
                              <div className={`mt-0.5 p-1.5 rounded-lg transition-colors ${
                                location.pathname === child.to
                                  ? "bg-primary/10 text-primary"
                                  : "bg-muted text-muted-foreground group-hover/item:bg-primary/10 group-hover/item:text-primary"
                              }`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-medium leading-tight">{child.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{child.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer CTA */}
                      <div className="px-6 py-3.5 border-t border-border/50 bg-muted/20">
                        <Link to="/contact" className="flex items-center justify-between text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/cta">
                          <span>Need help finding the right service?</span>
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
            <nav className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                          location.pathname === link.to
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
