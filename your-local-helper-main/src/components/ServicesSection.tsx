import { Wrench, Monitor, Shield, Hammer, Wifi, Tv } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Handyman",
    description: "Repairs, maintenance, painting, tiling and all those odd jobs around the home.",
  },
  {
    icon: Hammer,
    title: "Furniture Building",
    description: "Flat-pack assembly, custom shelving, and bespoke furniture construction.",
  },
  {
    icon: Monitor,
    title: "IT Support",
    description: "Computer setup, troubleshooting, software installation and network configuration.",
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "CCTV installation, alarm systems, smart locks and full security setup.",
  },
  {
    icon: Wifi,
    title: "Smart Home Setup",
    description: "Wi-Fi optimisation, smart device installation and home automation.",
  },
  {
    icon: Tv,
    title: "TV & AV Mounting",
    description: "Wall mounting, cable management and audio-visual system installation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm tracking-wide uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 text-foreground">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-card border border-border shadow-card hover:shadow-hero hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
