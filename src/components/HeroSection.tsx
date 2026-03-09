import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroCTA {
  label: string;
  to: string;
  variant?: "default" | "outline" | "secondary";
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  ctas?: HeroCTA[];
  badge?: string;
}

const HeroSection = ({ title, subtitle, image, ctas = [], badge }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative z-10 container-max section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary-foreground border border-primary/30 mb-6"
            >
              {badge}
            </motion.span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
            {subtitle}
          </p>
          {ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {ctas.map((cta, i) => (
                <Link key={i} to={cta.to}>
                  <Button
                    size="lg"
                    className={`text-base px-8 py-6 font-semibold rounded-lg transition-all duration-300 ${
                      i === 0
                        ? "gradient-bg-primary text-primary-foreground hover:opacity-90 shadow-lg"
                        : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20"
                    }`}
                  >
                    {cta.label}
                  </Button>
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
