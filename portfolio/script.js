// ════════════════════════════════════════════
// DATA DICTIONARY SYSTEM MODEL
// ════════════════════════════════════════════
const DATA = {

  pills: [
    'Project Management',
    'Quality Assurance',
    'Software Development',
    'Web Systems',
    'Database Integration',
    'Systems Analysis',
    'Testing & Debugging',
    'Agile Workflow',
    'Critical Thinking',
    'Problem Solving',
    'Team Collaboration',
    'Communication Skills',
    'Time Management',
    'Adaptability',
    'Leadership'
  ],

  // ════════════════════════════════════════
  // FEATURED PROJECTS
  // ════════════════════════════════════════
  projects: [

    {
      id: '01',
      img: 'assets/projects/plv-alumnet.png',
      link: 'https://youtu.be/hphfuzFQ5RQ',
      banner: 'PLV',
      name: 'PLV-AlumNet Website',
      type: 'WEB PLATFORM / CAPSTONE PROJECT',
      desc: 'A centralized web framework and career support platform for Pamantasan ng Lungsod ng Valenzuela alumni engagement and employment tracking.',
      contribution: 'Managed project planning, team coordination, and workflow organization throughout the platform development. Oversaw documentation, progress tracking, testing, and project presentation activities.',
      tags: ['Project Management', 'Quality Assurance', 'Agile Collaboration']
    },

    {
      id: '02',
      img: 'assets/projects/talino-track.png',
      link: 'https://youtu.be/74jdbNKU_00',
      banner: 'TALINO',
      name: 'Talino Track',
      type: 'HIGH SCHOOL ANALYTICS SYSTEM',
      desc: 'A machine learning-powered web platform designed to manage student data, analyze academic performance, and support predictive analytics for high school institutions.',
      contribution: 'Developed the full system architecture, machine learning integration, database structure, analytics dashboard, and responsive user interface.',
      tags: ['Python', 'Machine Learning', 'Data Mapping']
    },

    {
      id: '03',
      img: 'assets/projects/joms-dave.png',
      link: 'https://youtu.be/-dPTgrli5E0',
      banner: 'JOMS',
      name: 'Joms and Dave Samgyupsal',
      type: 'ONLINE ORDERING PLATFORM',
      desc: 'A responsive web-based ordering system inspired by modern food delivery platforms for streamlined customer ordering and menu management.',
      contribution: 'Designed and developed the complete frontend interface, ordering workflow, cart system, and responsive user experience.',
      tags: ['HTML/CSS', 'JavaScript', 'Ordering System']
    }

  ],

  // ════════════════════════════════════════
  // OTHER PROJECTS PLACEHOLDERS
  // ════════════════════════════════════════
  otherProjects: [

    {
      label: 'QA TESTER',
      title: 'Curse of Biringan: Clash of Instinct for Survival',
      desc: 'A Philippine folklore-inspired survival strategy game. Served as the project tester responsible for gameplay testing and quality assurance.',
      img: 'assets/other/proj1.png',
      link: 'https://youtu.be/GrkuEMfnBTU?si=GyFP800qTME1eMYv'
    },

    {
      label: 'NETWORKING',
      title: 'Cisco Packet Tracer Networking Activity',
      desc: 'A hands-on networking simulation activity focused on designing, configuring, and troubleshooting network topologies using Cisco Packet Tracer. Worked on basic routing, IP addressing, and network connectivity testing.',
      img: 'assets/other/proj2.png',
      link: 'https://youtu.be/-lWmDqlhmRE'
    },

    {
      label: 'DESIGN',
      title: 'Interior Design Hobby (Mobile Activity)',
      desc: 'A personal creative activity focused on interior decorating using mobile apps, exploring room layouts, color coordination, and aesthetic design concepts during free time.',
      img: 'assets/other/proj4.png',
      link: '#'
    },

    {
      label: 'DRAWING',
      title: 'Line Drawing Activity',
      desc: 'A creative drawing exercise using lines to form an image. Created a stylized hand-drawn illustration of Taylor Swift using structured line techniques.',
      img: 'assets/other/proj3.jpg',
      link: '#'
    },

    {
      label: 'DESIGN',
      title: 'Multimedia Book Cover',
      desc: 'A digital design activity involving the creation of a book cover using Adobe Photoshop, focusing on layout, typography, and visual composition.',
      img: 'assets/other/proj5.png',
      link: '#'
    },

  ],

  // ════════════════════════════════════════
  // CERTIFICATES
  // ════════════════════════════════════════
  certificates: [

    {
      title: 'Introduction to IoT and Digital Transformation',
      issuer: 'Cisco Networking Academy',
      img: 'assets/certificates/cert1.png'
    },

    {
      title: 'Network Technician Career Path',
      issuer: 'Cisco Networking Academy',
      img: 'assets/certificates/cert2.png'
    },

    {
      title: 'Network Support and Security',
      issuer: 'Cisco Networking Academy',
      img: 'assets/certificates/cert3.png'
    },

    {
      title: 'Network Addressing and Basic Troubleshooting',
      issuer: 'Cisco Networking Academy',
      img: 'assets/certificates/cert4.png'
    },

    {
      title: 'Networking Devices and Initial Configuration',
      issuer: 'Cisco Networking Academy',
      img: 'assets/certificates/cert5.png'
    },

    {
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      img: 'assets/certificates/cert6.png'
    }

  ],

  // ════════════════════════════════════════
  // SEMINARS
  // ════════════════════════════════════════
  seminars: [

    {
      title: 'VITSploration: An Exploration of Different IT Industries',
      issuer: 'PLV | BSIT Department',
      date: 'December 2023',
      img: 'assets/seminars/sem1.png'
    },

    {
      title: 'Fortifying the Future: Navigating the Landscape of Cybersecurity Essentials',
      issuer: 'PLV | BSIT Department',
      date: 'April 2024',
      img: 'assets/seminars/sem2.png'
    },

    {
      title: 'Unlocking Innovation: Navigating Digital Transformation in Today\'s Landscape',
      issuer: 'PLV | BSIT Department',
      date: 'April 2024',
      img: 'assets/seminars/sem3.png'
    },

    {
      title: 'Launch Your Tech Career: The High-Demand Skillset of A Full Stack Developer',
      issuer: 'PLV | BSIT Department',
      date: 'April 2024',
      img: 'assets/seminars/sem4.png'
    },

    {
      title: 'Strategic Project Management: Aligning Projects with Organizational Goals',
      issuer: 'PLV | BSIT Department',
      date: 'April 2024',
      img: 'assets/seminars/sem5.png'
    },

    {
      title: 'Securing Connections: Strategies for Cybersecurity and Network Operations',
      issuer: 'PLV | BSIT Department',
      date: 'April 2024',
      img: 'assets/seminars/sem6.png'
    },

    {
      title: 'Beyond Awareness: Enhancing Cyber Resilience with ESET',
      issuer: 'PLV | BSIT Department',
      date: 'April 2025',
      img: 'assets/seminars/sem7.png'
    },

    {
      title: 'Internet of Things: The Future of Smart Living and Industry',
      issuer: 'PLV | BSIT Department',
      date: 'April 2025',
      img: 'assets/seminars/sem8.png'
    },

    {
      title: 'Unlocking Security: The Power of Identity and Access Management',
      issuer: 'PLV | BSIT Department',
      date: 'April 2025',
      img: 'assets/seminars/sem9.png'
    },

    {
      title: 'Bitskwela Blockchain Learning Workshop',
      issuer: 'PLV | BSIT Department',
      date: 'October 2025',
      img: 'assets/seminars/sem10.png'
    },

    {
      title: 'Game Design: Heart of a Game',
      issuer: 'PLV | BSIT Department',
      date: 'April 2026',
      img: 'assets/seminars/sem11.png'
    },

    {
      title: 'Designing your Tech Career Blueprint',
      issuer: 'PLV | BSIT Department',
      date: 'April 2026',
      img: 'assets/seminars/sem12.png'
    },

    {
      title: 'Implementing Success',
      issuer: 'PLV | BSIT Department',
      date: 'April 2026',
      img: 'assets/seminars/sem13.png'
    }

  ]

};

let currentProjectIndex = 0;
let projectHoverTimer = null;

// ════════════════════════════════════════════
// INITIALIZE
// ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  renderProjectTheater();
  renderProjectStrip();
  renderOtherProjects();
  renderCertificates();
  renderSeminars();
  renderPills();

  // Lightbox close handlers
  document.getElementById('lightbox-close')
    .addEventListener('click', closeCertLightbox);

  document.getElementById('lightbox-backdrop')
    .addEventListener('click', closeCertLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertLightbox();
  });

  // ── Hamburger menu ──────────────────────────
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksList = document.querySelector('.nav-links');
  if (menuToggle && navLinksList) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinksList.classList.toggle('open');
    });
    navLinksList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinksList.classList.remove('open');
      });
    });
  }

  // ── Active nav on scroll ────────────────────
  const sections = document.querySelectorAll('main[id], section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.25, rootMargin: '-60px 0px -35% 0px' });
  sections.forEach(s => sectionObserver.observe(s));

  // ── Back to top ─────────────────────────────
  const backBtn = document.getElementById('backToTopBtn');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('show-btn', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});

// ════════════════════════════════════════════
// FEATURED PROJECT THEATER
// ════════════════════════════════════════════
function renderProjectTheater() {

  const p = DATA.projects[currentProjectIndex];

  document.getElementById('project-counter').textContent =
    `0${currentProjectIndex + 1} / 03`;

  const thumbBox = document.getElementById('project-thumb-box');
  const mockTitle = document.getElementById('project-mock-title');

  if (p.img) {

    thumbBox.innerHTML = '';

    const img = new Image();

    img.src = p.img;
    img.alt = p.name;

    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '6px';

    img.onload = () => {

      thumbBox.innerHTML = '';
      thumbBox.appendChild(img);

    };

    img.onerror = () => {

      thumbBox.innerHTML = `
        <div class="image-error">
          IMAGE NOT FOUND
        </div>
      `;
    };

    mockTitle.style.display = 'none';

  }

  document.getElementById('project-idx-el').textContent = p.id;
  document.getElementById('project-name-el').textContent = p.name;
  document.getElementById('project-type-el').textContent = p.type;
  document.getElementById('project-desc-el').textContent = p.desc;
  document.getElementById('project-contribution-el').textContent =
    p.contribution;

  document.getElementById('project-tags-el').innerHTML =
    p.tags.map(tag =>
      `<span class="mini-tag">${tag}</span>`
    ).join('');

  // ── Update "View System" button link ────────
  const viewSystemBtn = document.querySelector('.theater-actions .btn-filled');
  if (viewSystemBtn) {
    const hasLink = p.link && p.link !== '#';
    viewSystemBtn.href        = hasLink ? p.link : '#';
    viewSystemBtn.target      = hasLink ? '_blank' : '';
    viewSystemBtn.rel         = hasLink ? 'noopener noreferrer' : '';
    viewSystemBtn.style.opacity      = hasLink ? '1'       : '0.45';
    viewSystemBtn.style.pointerEvents = hasLink ? 'auto'   : 'none';
    viewSystemBtn.title       = hasLink ? 'Watch on YouTube' : 'Link not available';
  }

  updateStripState();
}

// ════════════════════════════════════════════
// PROJECT STRIP
// ════════════════════════════════════════════
function renderProjectStrip() {

  const strip =
    document.getElementById('project-strip');

  strip.innerHTML = DATA.projects.map((p, index) => `

    <div class="strip-node"
         onmouseenter="jumpToProject(${index})">

      <div class="strip-preview-image">
        <img src="${p.img}" alt="${p.name}">
      </div>

      <div class="strip-details">

        <span class="strip-project-label">
          PROJECT ${p.id}
        </span>

        <h4>${p.name}</h4>

        <p>${p.type}</p>

      </div>

    </div>

  `).join('');
}

function updateStripState() {

  document.querySelectorAll('.strip-node')
    .forEach((el, index) => {

      el.classList.toggle(
        'active',
        index === currentProjectIndex
      );

    });
}

// ════════════════════════════════════════════
// OTHER PROJECTS — AUTO CAROUSEL
// ════════════════════════════════════════════
let carouselIndex = 0;
let carouselAutoTimer = null;

function getCardsVisible() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

function renderOtherProjects() {

  const wrapper = document.getElementById('other-projects-container');

  wrapper.innerHTML = `
    <div class="carousel-viewport">
      <div class="carousel-track" id="carousel-track">
        ${DATA.otherProjects.map(op => `
          <div class="deck-card">
            <div class="deck-image" style="cursor:pointer;" onclick="openImageLightbox('${op.img}', '${op.title}', '${op.label}')">
              <img src="${op.img}" alt="${op.title}">
              <div class="deck-overlay">
                <span>${op.label}</span>
              </div>
            </div>
            <div class="deck-content">
              <h4>${op.title}</h4>
              <p>${op.desc}</p>
              ${op.link && op.link !== '#'
                ? `<a href="${op.link}" target="_blank" rel="noopener noreferrer" class="deck-btn">View Project</a>`
                : `<span class="deck-btn deck-btn--disabled" title="Link not available">View Project</span>`
              }
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="carousel-controls">
      <button class="carousel-arrow" id="carousel-prev" onclick="shiftCarousel(-1)">&#8592;</button>
      <div class="carousel-dots" id="carousel-dots"></div>
      <button class="carousel-arrow" id="carousel-next" onclick="shiftCarousel(1)">&#8594;</button>
    </div>
  `;

  buildCarouselDots();
  applyCarouselPosition(false);
  startCarouselAuto();

  const viewport = wrapper.querySelector('.carousel-viewport');
  viewport.addEventListener('mouseenter', stopCarouselAuto);
  viewport.addEventListener('mouseleave', startCarouselAuto);

  // Touch/swipe support for mobile
  let touchStartX = 0;
  viewport.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) shiftCarousel(dx > 0 ? 1 : -1);
  }, { passive: true });

  // Recalculate on resize so card widths stay correct
  window.addEventListener('resize', () => {
    carouselIndex = 0;
    applyCarouselPosition(false);
  });
}

function buildCarouselDots() {
  const maxIndex = DATA.otherProjects.length - getCardsVisible();
  const dotsEl = document.getElementById('carousel-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = Array.from({ length: maxIndex + 1 }, (_, i) =>
    `<span class="carousel-dot ${i === carouselIndex ? 'active' : ''}" onclick="jumpCarousel(${i})"></span>`
  ).join('');
}

function applyCarouselPosition(animate = true) {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const cardWidth = track.querySelector('.deck-card')?.offsetWidth || 0;
  const gap = window.innerWidth <= 768 ? 16 : 24;
  const offset = carouselIndex * (cardWidth + gap);
  track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none';
  track.style.transform = `translateX(-${offset}px)`;
  buildCarouselDots();
}

function shiftCarousel(dir) {
  const maxIndex = DATA.otherProjects.length - getCardsVisible();
  carouselIndex = Math.max(0, Math.min(carouselIndex + dir, maxIndex));
  applyCarouselPosition();
}

function jumpCarousel(index) {
  carouselIndex = index;
  applyCarouselPosition();
}

function startCarouselAuto() {
  stopCarouselAuto();
  carouselAutoTimer = setInterval(() => {
    const maxIndex = DATA.otherProjects.length - getCardsVisible();
    carouselIndex = carouselIndex >= maxIndex ? 0 : carouselIndex + 1;
    applyCarouselPosition();
  }, 3000);
}

function stopCarouselAuto() {
  if (carouselAutoTimer) {
    clearInterval(carouselAutoTimer);
    carouselAutoTimer = null;
  }
}

// ════════════════════════════════════════════
// CERTIFICATES
// ════════════════════════════════════════════
function renderCertificates() {

  const certContainer =
    document.getElementById('certs-container');

  certContainer.innerHTML =

    DATA.certificates.map((cert, index) => `

      <div class="cert-card" onclick="openCertLightbox('certificates', ${index})">

        <div class="cert-image-wrap">
          <img
            src="${cert.img}"
            alt="${cert.title}"
            class="cert-image"
          >
        </div>

        <div class="cert-info">
          <span class="cert-badge">CERTIFICATE</span>
          <h4>${cert.title}</h4>
          <p>${cert.issuer}</p>
        </div>

      </div>

    `).join('');
}

function renderSeminars() {

  const semContainer = document.getElementById('seminars-container');
  if (!semContainer) return;

  // Split seminars into two columns (left = even indices, right = odd indices)
  const left  = DATA.seminars.filter((_, i) => i % 2 === 0);
  const right = DATA.seminars.filter((_, i) => i % 2 === 1);

  function buildEntry(sem, index) {
    const dateParts = sem.date ? sem.date.split(' ') : ['', ''];
    const month = dateParts[0] ? dateParts[0].toUpperCase().slice(0, 3) : '';
    const year  = dateParts[1] || '';
    return `
      <div class="tl2-entry" onclick="openCertLightbox('seminars', ${index})">
        <div class="tl2-date">
          <span class="tl2-month">${month}</span>
          <span class="tl2-year">${year}</span>
        </div>
        <span class="tl2-dot"></span>
        <div class="tl2-content">
          <h4 class="tl2-title">${sem.title}</h4>
          <p class="tl2-issuer">${sem.issuer}</p>
        </div>
      </div>
    `;
  }

  semContainer.innerHTML = `
    <div class="seminar-two-col">

      <div class="tl2-col tl2-col--left">
        <span class="tl2-line"></span>
        ${left.map((sem) => {
          const globalIndex = DATA.seminars.indexOf(sem);
          return buildEntry(sem, globalIndex);
        }).join('')}
      </div>

      <div class="tl2-center-dots">
        ${DATA.seminars.map((_, i) => `
          <span class="tl2-center-dot${i === DATA.seminars.length - 1 ? ' tl2-center-dot--last' : ''}"></span>
        `).join('')}
        <span class="tl2-scroll-hint">↓</span>
      </div>

      <div class="tl2-col tl2-col--right">
        <span class="tl2-line"></span>
        ${right.map((sem) => {
          const globalIndex = DATA.seminars.indexOf(sem);
          return buildEntry(sem, globalIndex);
        }).join('')}
      </div>

    </div>
  `;
}

// ════════════════════════════════════════════
// LIGHTBOX
// ════════════════════════════════════════════
// ════════════════════════════════════════════
// CREDENTIALS TAB SWITCHER
// ════════════════════════════════════════════
function switchCredsTab(tab) {
  document.querySelectorAll('.creds-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.creds-tab-panel').forEach(panel => panel.classList.remove('active'));

  document.querySelector(`.creds-tab[onmouseenter*="${tab}"]`).classList.add('active');
  document.getElementById(`tab-${tab}`).classList.add('active');
}

// ════════════════════════════════════════════
// HERO PILLS
// ════════════════════════════════════════════
function renderPills() {
  const container = document.getElementById('hero-pills-container');
  if (!container) return;
  const pillHTML = DATA.pills
    .map(pill => `<span class="skill-pill">${pill}</span>`)
    .join('');
  container.innerHTML = `<div class="pills-track">${pillHTML}${pillHTML}</div>`;
}

// ════════════════════════════════════════════
// LIGHTBOX
// ════════════════════════════════════════════
function openImageLightbox(imgSrc, title, subtitle) {
  const lightbox = document.getElementById('cert-lightbox');
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-img').alt = title;
  document.getElementById('lightbox-title').textContent = title;
  document.getElementById('lightbox-issuer').textContent = subtitle || '';
  document.getElementById('lightbox-date').textContent = '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCertLightbox(source, index) {

  const item = source === 'seminars'
    ? DATA.seminars[index]
    : DATA.certificates[index];

  const lightbox = document.getElementById('cert-lightbox');

  document.getElementById('lightbox-img').src = item.img;
  document.getElementById('lightbox-img').alt = item.title;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-issuer').textContent = item.issuer;
  document.getElementById('lightbox-date').textContent = item.date || '';

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
  const lightbox = document.getElementById('cert-lightbox');
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}



// ════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════
function nextProject() {

  currentProjectIndex =
    (currentProjectIndex + 1) %
    DATA.projects.length;

  renderProjectTheater();
}

function prevProject() {

  currentProjectIndex =
    (currentProjectIndex - 1 + DATA.projects.length) %
    DATA.projects.length;

  renderProjectTheater();
}

function jumpToProject(index) {
  if (index === currentProjectIndex) return;
  clearTimeout(projectHoverTimer);
  projectHoverTimer = setTimeout(() => {
    const grid = document.querySelector('.theater-body-grid');
    if (grid) grid.classList.add('theater-fading');
    setTimeout(() => {
      currentProjectIndex = index;
      renderProjectTheater();
      if (grid) grid.classList.remove('theater-fading');
    }, 200);
  }, 120);
}

// ════════════════════════════════════════════
// SCROLL REVEAL SYSTEM
// ════════════════════════════════════════════

function initScrollReveal() {

  // Elements to reveal — each with optional delay class
  const revealMap = [

    // Hero section internals
    { sel: '.window-controls',       cls: 'reveal-fade-up' },
    { sel: '.badge-tag',             cls: 'reveal-fade-up', delay: 1 },
    { sel: '.hero-left-col',         cls: 'reveal-fade-up', delay: 2 },
    // .image-frame excluded — float animation handles its own entrance
    { sel: '.bullet-row',            cls: 'reveal-fade-up', delay: 3 },
    { sel: '.action-buttons',        cls: 'reveal-fade-up', delay: 4 },
    { sel: '.pills-scrollbox',       cls: 'reveal-fade-up', delay: 5 },
    { sel: '.stats-counter-grid',    cls: 'reveal-fade-up', delay: 5 },
    { sel: '.explore-hint',          cls: 'reveal-fade-up', delay: 6 },

    // Works section
    { sel: '.section-label-header',  cls: 'reveal-fade-up' },
    { sel: '.theater-showcase-box',  cls: 'reveal-fade-up', delay: 1 },
    { sel: '.secondary-projects-header', cls: 'reveal-fade-up', delay: 2 },
    { sel: '#other-projects-container',  cls: 'reveal-fade-up', delay: 3 },

    // Certifications section
    { sel: '.certs-scroll-row',      cls: 'reveal-fade-up', delay: 2 },

    // Contact section
    { sel: '.contact-panel-card',    cls: 'reveal-fade-up' },
    { sel: '.minimal-footer',        cls: 'reveal-fade-up', delay: 1 },

  ];

  // Apply base hidden state
  revealMap.forEach(({ sel, cls, delay }) => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('scroll-hidden', cls);
      if (delay) el.style.setProperty('--reveal-delay', `${delay * 0.12}s`);
    });
  });

  // Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.scroll-hidden').forEach(el => observer.observe(el));
}

// Kick off after all renders are done
document.addEventListener('DOMContentLoaded', () => {
  // small timeout so dynamically rendered elements are in the DOM first
  setTimeout(initScrollReveal, 80);
});