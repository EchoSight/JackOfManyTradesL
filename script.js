const services = [
  { title: 'General Handyman', description: 'Repairs, maintenance, painting, tiling and all those odd jobs around the home.', icon: 'wrench' },
  { title: 'Furniture Building', description: 'Flat-pack assembly, custom shelving, and bespoke furniture construction.', icon: 'hammer' },
  { title: 'IT Support', description: 'Computer setup, troubleshooting, software installation and network configuration.', icon: 'monitor' },
  { title: 'Security Systems', description: 'CCTV installation, alarm systems, smart locks and full security setup.', icon: 'shield' },
  { title: 'Smart Home Setup', description: 'Wi-Fi optimisation, smart device installation and home automation.', icon: 'wifi' },
  { title: 'TV & AV Mounting', description: 'Wall mounting, cable management and audio-visual system installation.', icon: 'tv' },
];

const iconSvgs = {
  wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8L6.6 20.4a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8Z"/></svg>',
  hammer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 12-8.4 8.4a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.9-1.9A2 2 0 0 1 19 8.2V7l-2.3-2.3a6 6 0 0 0-4.2-1.7L9 3l.9.8A6.2 6.2 0 0 1 12 8.4V10l2 2h1.2a2 2 0 0 1 1.4.6l1.9 1.9"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h.01"/><path d="M2 8.8a15 15 0 0 1 20 0"/><path d="M5 12.9a10 10 0 0 1 14 0"/><path d="M8.5 16.4a5 5 0 0 1 7 0"/></svg>',
  tv: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4.1 2h3A2 2 0 0 1 9 3.7l.7 2.8a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6.5 6.5l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-5.8 7-12a7 7 0 1 0-14 0c0 6.2 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

const recentProjectImageVersion = '20260307';

const projects = [
  {
    image: `assets/RecentProjectsImages/ShedPaintTreatment.jpg?v=${recentProjectImageVersion}`,
    alt: 'Freshly painted and treated garden shed exterior',
    title: 'Shed Painting and Treatment – Newbury',
    problem: 'Shed panels were weathered and starting to absorb moisture after years without treatment.',
    solution: 'Prepared the wood, applied protective treatment, and finished with an even exterior paint coat.',
    result: 'Shed refreshed with improved weather protection and a cleaner finish.',
    time: '5 hours',
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
    alt: 'Desktop computer and external drive used for data recovery',
    title: 'Restoring Files from Broken Computer – Burghclere',
    problem: 'Power supply had failed and the outdated system was not suitable for a secure upgrade to Windows 11.',
    solution: 'Recovered and restored key files, backed up the hard drive, and advised on a suitable new computer purchase.',
    result: 'Important files secured and clear next steps provided for a safe replacement setup.',
    time: '2 hours',
  },
  {
    image: `assets/RecentProjectsImages/75InchTVWallMount.jpeg?v=${recentProjectImageVersion}`,
    alt: 'Wall-mounted television with hidden cables',
    title: 'TV Wall Mount – 75 inch TV',
    problem: '75 inch TV needed secure mounting to replace a bulky floor stand.',
    solution: 'Installed the wall bracket, mounted and levelled the TV, connecting tv to the internet and checked all fixings and cable routing.',
    result: 'Secure, space-saving setup with improved viewing position.',
    time: '2 hours',
  },
  {
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    alt: 'Smart home security camera and doorbell system installation',
    title: 'Eufy Security System Install – Newbury',
    problem: 'Customer wanted to replace their previous setup with complete home security coverage and easier control.',
    solution:
      'Installed Eufy doorbell, connected system to internet, configured open door/window detection, added 3 cameras, pin code entry device, and motion detection.',
    result: 'Fully integrated security system installed and configured for day-to-day use.',
    time: '2 hours',
  },
  {
    image: `assets/RecentProjectsImages/KitchenInstall_Newbury.jpg?v=${recentProjectImageVersion}`,
    alt: 'IKEA kitchen replacement with new cabinets, lighting, and laundry appliance installation',
    title: 'IKEA Kitchen Replacement – Newbury',
    problem: 'Existing kitchen was outdated and needed a full IKEA replacement with improved storage, lighting, and appliance setup.',
    solution: 'Planned the new IKEA kitchen design, assembled and installed cabinets, attached all doors, fitted task lighting, and installed the washing machine and tumble dryer. Extractor unit, oven, and fridge installation were coordinated separately for a qualified electrician.',
    result: 'Modern kitchen fully replaced with core units and laundry appliances in place, with specialist electrical appliances allocated to certified installation.',
    time: '3 days',
  },
];

const areas = ['Newbury', 'Thatcham', 'Hungerford', 'Kingsclere', 'Wash Common', 'Greenham'];
const pricingFeatures = ['No call-out charge', 'All trades & IT covered', 'Friendly, local service', 'Free estimates on large jobs'];
const contactItems = [
  {
    label: 'Call Us',
    value: '07767 436026',
    icon: 'phone',
    actions: [
      { label: 'Call', href: 'tel:+447767436026' },
      { label: 'WhatsApp', href: 'https://wa.me/447767436026', external: true },
    ],
  },
  {
    label: 'Email',
    value: 'jackofmanytrades@gmail.com',
    icon: 'mail',
    actions: [{ label: 'Send Email', href: 'mailto:jackofmanytrades@gmail.com' }],
  },
  { label: 'Area', value: 'Local & Surrounding Areas', icon: 'map' },
];

function render() {
  document.getElementById('services-grid').innerHTML = services
    .map(
      (service) => `
      <article class="card service-card fade-in">
        <div class="service-icon" aria-hidden="true">${iconSvgs[service.icon]}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>`,
    )
    .join('');

  document.getElementById('projects-grid').innerHTML = projects
    .map(
      (project) => `
      <article class="project-card fade-in">
        <img src="${project.image}" alt="${project.alt}" loading="lazy" />
        <div class="content">
          <h3>${project.title}</h3>
          <p><strong>Problem:</strong> ${project.problem}</p>
          <p><strong>Solution:</strong> ${project.solution}</p>
          <p><strong>Result:</strong> ${project.result}</p>
          <p class="time"><span class="time-icon" aria-hidden="true">⏱︎</span> ${project.time}</p>
        </div>
      </article>
    `,
    )
    .join('');

  document.getElementById('areas-list').textContent = areas.join(' • ');
  document.getElementById('pricing-list').innerHTML = pricingFeatures.map((item) => `<li>${item}</li>`).join('');
  document.getElementById('contact-grid').innerHTML = contactItems
    .map(
      (item) => `<article class="contact-item fade-in">
        <div class="contact-icon">${iconSvgs[item.icon]}</div>
        <p><strong>${item.label}</strong></p>
        <p>${item.value}</p>
        ${
          item.actions
            ? `<div class="contact-actions">${item.actions
                .map(
                  (action) =>
                    `<a href="${action.href}" class="contact-link" ${action.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>${action.label}</a>`,
                )
                .join('')}</div>`
            : ''
        }
      </article>`,
    )
    .join('');
  document.getElementById('year').textContent = new Date().getFullYear();
}

function setupMenu() {
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '☰';
    menu.hidden = true;
  };

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.textContent = expanded ? '☰' : '✕';
    menu.hidden = expanded;
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    if (isOpen && !menu.contains(event.target) && !button.contains(event.target)) {
      closeMenu();
    }
  });
}

function setupScrollState() {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((element) => observer.observe(element));
}

render();
setupMenu();
setupScrollState();
setupRevealAnimations();
