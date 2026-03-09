import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

const CTASection = ({ title, subtitle, primaryCta, secondaryCta }: CTASectionProps) => {
  return (
    <section className="gradient-bg-primary section-padding">
      <ScrollReveal>
        <div className="container-max text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={primaryCta.to}>
              <button className="bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all shadow-lg">
                {primaryCta.label}
              </button>
            </Link>
            {secondaryCta && (
              <Link to={secondaryCta.to}>
                <button className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all">
                  {secondaryCta.label}
                </button>
              </Link>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
