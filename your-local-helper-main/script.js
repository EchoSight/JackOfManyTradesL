const services = [
  {
    title: 'General Handyman',
    description: 'Repairs, maintenance, painting, tiling and all those odd jobs around the home.',
    icon: 'wrench',
  },
  {
    title: 'Furniture Building',
    description: 'Flat-pack assembly, custom shelving, and bespoke furniture construction.',
    icon: 'hammer',
  },
  {
    title: 'IT Support',
    description: 'Computer setup, troubleshooting, software installation and network configuration.',
    icon: 'monitor',
  },
  {
    title: 'Security Systems',
    description: 'CCTV installation, alarm systems, smart locks and full security setup.',
    icon: 'shield',
  },
  {
    title: 'Smart Home Setup',
    description: 'Wi-Fi optimisation, smart device installation and home automation.',
    icon: 'wifi',
  },
  {
    title: 'TV & AV Mounting',
    description: 'Wall mounting, cable management and audio-visual system installation.',
    icon: 'tv',
  },
];

const iconSvgs = {
  wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0 4.9 4.9L10 20.8a2 2 0 1 1-2.8-2.8l9.6-9.6a4 4 0 0 0-4.9-4.9l3-3 .8 2.8 2.8.8-3 3Z"/></svg>',
  hammer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4l6 6-2 2-2-2-7 7 2 2-2 2-7-7 2-2 2 2 7-7-2-2 2-2Z"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v6c0 5-3.5 7.8-7 9-3.5-1.2-7-4-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 8a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 16a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/></svg>',
  tv: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M10 17v4M14 17v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.5 6.5l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-5.8 7-12a7 7 0 1 0-14 0c0 6.2 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80',
    alt: 'New fence panels installed in a garden',
    title: 'Fence Panel Replacement – Newbury',
    problem: "Two storm-damaged panels were loose and leaning into the neighbour's garden.",
    solution: 'Removed damaged panels, installed pressure-treated replacements, and secured posts.',
    result: 'Boundary made safe, tidy, and weather-ready in one visit.',
    time: '3.5 hours',
  },
  {
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern home office desk and monitor setup',
    title: 'Home Office Setup – Thatcham',
    problem: 'Customer needed a new desk area assembled and cable clutter managed before Monday.',
    solution: 'Built desk and chair, mounted monitor arm, and routed all power/network cables neatly.',
    result: 'Ready-to-use workspace with safer, cleaner cable management.',
    time: '2 hours',
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wi-Fi router and mesh network equipment',
    title: 'Wi‑Fi Dead Zone Fix – Wash Common',
    problem: 'The back extension had poor signal and video calls kept dropping.',
    solution: 'Repositioned router, installed mesh node, and tuned channel settings.',
    result: 'Reliable coverage throughout the property, including garden office.',
    time: '1.5 hours',
  },
  {
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wall-mounted television with hidden cables',
    title: 'TV Wall Mount & Soundbar Install – Newbury',
    problem: 'Large TV was on an unstable stand with visible trailing cables.',
    solution: 'Mounted bracket on masonry wall, levelled TV, and installed cable trunking with soundbar alignment.',
    result: 'Safer setup and a cleaner, modern living room finish.',
    time: '2 hours',
  },
  {
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    alt: 'Smart doorbell installed beside a front door',
    title: 'Ring Doorbell Reconfiguration – Hungerford',
    problem: 'Delayed alerts and frequent disconnects after broadband change.',
    solution: 'Repaired Wi‑Fi pairing, updated app settings, and optimised motion zones/sensitivity.',
    result: 'Faster notifications with fewer false alerts.',
    time: '1 hour',
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    alt: 'Assembled bedroom furniture in a tidy room',
    title: 'Flat-Pack Bedroom Furniture – Greenham',
    problem: 'Multiple boxed units needed assembly before a house move-in weekend.',
    solution: 'Assembled wardrobe, chest of drawers, and bedside units with final alignment checks.',
    result: 'Furniture ready for immediate use with all fixings safely secured.',
    time: '4 hours',
  },
];

const areas = ['Newbury', 'Thatcham', 'Hungerford', 'Kingsclere', 'Wash Common', 'Greenham'];
const pricingFeatures = ['No call-out charge', 'All trades & IT covered', 'Friendly, local service', 'Free estimates on large jobs'];
const contactItems = [
  { label: 'Call Us', value: '07767 436026', icon: 'phone' },
  { label: 'Email', value: 'jackofmanytrades@gmail.com', icon: 'mail' },
  { label: 'Area', value: 'Local & Surrounding Areas', icon: 'map' },
];

function render() {
  document.getElementById('services-grid').innerHTML = services
    .map(
      (service) => `
      <article class="card service-card">
        <div class="service-icon" aria-hidden="true">${iconSvgs[service.icon]}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>`,
    )
    .join('');

  document.getElementById('projects-grid').innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="${project.alt}" loading="lazy" />
        <div class="content">
          <h3>${project.title}</h3>
          <p><strong>Problem:</strong> ${project.problem}</p>
          <p><strong>Solution:</strong> ${project.solution}</p>
          <p><strong>Result:</strong> ${project.result}</p>
          <p class="time">⏱ ${project.time}</p>
        </div>
      </article>
    `,
    )
    .join('');

  document.getElementById('areas-list').textContent = areas.join(' • ');
  document.getElementById('pricing-list').innerHTML = pricingFeatures.map((item) => `<li>${item}</li>`).join('');
  document.getElementById('contact-grid').innerHTML = contactItems
    .map(
      (item) => `<article class="contact-item"><div class="contact-icon">${iconSvgs[item.icon]}</div><p><strong>${item.label}</strong></p><p>${item.value}</p></article>`,
    )
    .join('');
  document.getElementById('year').textContent = new Date().getFullYear();
}

function setupMenu() {
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.textContent = expanded ? '☰' : '✕';
    menu.hidden = expanded;
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '☰';
      menu.hidden = true;
    });
  });
}

render();
setupMenu();
