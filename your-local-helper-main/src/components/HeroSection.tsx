import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional tools on workbench" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 text-primary font-display text-sm font-semibold tracking-wide uppercase">
            Handyman • IT • Security
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-secondary-foreground leading-[1.1] mb-6">
            Jack of Many{" "}
            <span className="text-primary">Trades</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/70 font-body mb-10 max-w-lg">
            Your local expert for handyman services, IT support, and security system installation. One call does it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-hero font-display">
              <Phone className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 font-display border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
