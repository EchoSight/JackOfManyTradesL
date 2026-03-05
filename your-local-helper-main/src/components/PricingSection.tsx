import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm tracking-wide uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 text-foreground">
            Simple, Honest Rates
          </h2>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl border-2 border-primary bg-background p-10 shadow-hero text-center">
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold font-display text-foreground">£50</span>
                <span className="text-muted-foreground font-body text-lg">/ first hour</span>
              </div>
              <p className="text-2xl font-display text-primary font-semibold">
                then £35/hr after
              </p>
            </div>
            <div className="space-y-4 text-left mb-10">
              {[
                "No call-out charge",
                "All trades & IT covered",
                "Friendly, local service",
                "Free estimates on large jobs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-body">{item}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full text-lg py-6 font-display shadow-hero">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
