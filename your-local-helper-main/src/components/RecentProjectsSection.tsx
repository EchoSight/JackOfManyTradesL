const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    alt: "New fence panels installed in a garden",
    title: "Fence Panel Replacement – Newbury",
    problem:
      "Two storm-damaged panels were loose and leaning into the neighbour's garden.",
    solution:
      "Removed damaged panels, installed pressure-treated replacements, and secured posts.",
    result: "Boundary made safe, tidy, and weather-ready in one visit.",
    time: "3.5 hours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern home office desk and monitor setup",
    title: "Home Office Setup – Thatcham",
    problem:
      "Customer needed a new desk area assembled and cable clutter managed before Monday.",
    solution:
      "Built desk and chair, mounted monitor arm, and routed all power/network cables neatly.",
    result: "Ready-to-use workspace with safer, cleaner cable management.",
    time: "2 hours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    alt: "Wi-Fi router and mesh network equipment",
    title: "Wi‑Fi Dead Zone Fix – Wash Common",
    problem:
      "The back extension had poor signal and video calls kept dropping.",
    solution:
      "Repositioned router, installed mesh node, and tuned channel settings.",
    result:
      "Reliable coverage throughout the property, including garden office.",
    time: "1.5 hours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80",
    alt: "Wall-mounted television with hidden cables",
    title: "TV Wall Mount & Soundbar Install – Newbury",
    problem:
      "Large TV was on an unstable stand with visible trailing cables.",
    solution:
      "Mounted bracket on masonry wall, levelled TV, and installed cable trunking with soundbar alignment.",
    result: "Safer setup and a cleaner, modern living room finish.",
    time: "2 hours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    alt: "Smart doorbell installed beside a front door",
    title: "Ring Doorbell Reconfiguration – Hungerford",
    problem:
      "Delayed alerts and frequent disconnects after broadband change.",
    solution:
      "Repaired Wi‑Fi pairing, updated app settings, and optimised motion zones/sensitivity.",
    result: "Faster notifications with fewer false alerts.",
    time: "1 hour",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Assembled bedroom furniture in a tidy room",
    title: "Flat-Pack Bedroom Furniture – Greenham",
    problem:
      "Multiple boxed units needed assembly before a house move-in weekend.",
    solution:
      "Assembled wardrobe, chest of drawers, and bedside units with final alignment checks.",
    result:
      "Furniture ready for immediate use with all fixings safely secured.",
    time: "4 hours",
  },
];

const RecentProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 text-foreground">
            Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            A selection of jobs we've completed for happy customers in the local
            area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-hero transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-card-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-1.5">
                  <span className="font-semibold text-foreground">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-1.5">
                  <span className="font-semibold text-foreground">Solution:</span>{" "}
                  {project.solution}
                </p>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-1.5">
                  <span className="font-semibold text-foreground">Result:</span>{" "}
                  {project.result}
                </p>
                <p className="text-sm font-body font-semibold text-primary mt-3">
                  ⏱ {project.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
