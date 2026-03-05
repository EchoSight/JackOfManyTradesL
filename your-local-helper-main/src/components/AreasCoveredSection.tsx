import { MapPin } from "lucide-react";

const areas = [
  "Newbury",
  "Thatcham",
  "Hungerford",
  "Kingsclere",
  "Wash Common",
  "Greenham",
];

const AreasCoveredSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="text-primary font-display font-semibold text-sm tracking-wide uppercase">
            Areas Covered
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-secondary-foreground/80 font-body text-lg">
          {areas.map((area, i) => (
            <span key={area} className="flex items-center gap-3">
              <span>{area}</span>
              {i < areas.length - 1 && (
                <span className="text-primary/60">•</span>
              )}
            </span>
          ))}
        </div>
        <p className="mt-3 text-secondary-foreground/50 font-body text-sm">
          …and surrounding Berkshire villages.
        </p>
      </div>
    </section>
  );
};

export default AreasCoveredSection;
