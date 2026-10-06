/* ============================================================
   Azazi Hendawi — Portfolio Script
   Edit personal info, projects, labs, and documents below.
   ============================================================ */

"use strict";

/* ============================================================
   CONFIG — personal info & contact placeholders
   Replace YOUR_* values with your real links.
   ============================================================ */
const CONFIG = {
  name: "Azazi Hendawi",
  title: "Network Engineer | IT Infrastructure | System Administration",
  email: "azazehendawy6@gmail.com",
  phone: "+201027721091",
  linkedin: "https://www.linkedin.com/in/azazi-hendawi-b9bb3035a",
  facebook: "https://www.facebook.com/share/1EsHuEFjaR/",
  profile: {
    name: "Azazi Hendawi",
    field: "Computer Science",
    specialization: "Networking & IT Infrastructure",
    currentFocus: "MCSA / System Administration",
    networking: "CCNA / Network Security / HCIA Cloud",
    university: "Benha University",
  },
};

/* ============================================================
   SKILLS — organized by category
   Set learning: true for skills you are currently studying.
   ============================================================ */
const skills = [
  {
    id: "networking",
    title: "Networking",
    icon: "fa-solid fa-network-wired",
    badge: null,
    items: [
      { name: "CCNA", icon: "fa-solid fa-certificate" },
      { name: "Network Security", icon: "fa-solid fa-shield-halved" },
      { name: "VLAN", icon: "fa-solid fa-layer-group" },
      { name: "Trunking", icon: "fa-solid fa-link" },
      { name: "Inter-VLAN Routing", icon: "fa-solid fa-route" },
      { name: "OSPF", icon: "fa-solid fa-sitemap" },
      { name: "ACL", icon: "fa-solid fa-shield-halved" },
      { name: "NAT / PAT", icon: "fa-solid fa-globe" },
      { name: "DHCP", icon: "fa-solid fa-server" },
      { name: "STP", icon: "fa-solid fa-circle-nodes" },
      { name: "SSH", icon: "fa-solid fa-terminal" },
      { name: "Port Security", icon: "fa-solid fa-lock" },
      { name: "Wireless", icon: "fa-solid fa-wifi" },
      { name: "VoIP", icon: "fa-solid fa-phone" },
      { name: "Network Troubleshooting", icon: "fa-solid fa-stethoscope" },
      { name: "Cloud Computing (HCIA)", icon: "fa-solid fa-cloud" },
    ],
  },
  {
    id: "sysadmin",
    title: "System Administration",
    icon: "fa-solid fa-server",
    badge: "Currently Learning",
    items: [
      { name: "Windows Server", learning: true },
      { name: "MCSA", learning: true },
      { name: "Active Directory", learning: true },
      { name: "Users & Groups", learning: true },
      { name: "File & Folder Permissions", learning: true },
      { name: "DHCP", learning: true },
      { name: "DNS", learning: true },
      { name: "Windows Administration", learning: true },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: "fa-solid fa-code",
    badge: null,
    items: [
      { name: "HTML", icon: "fa-brands fa-html5" },
      { name: "CSS", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
    ],
  },
];

/* ============================================================
   CERTIFICATIONS & LEARNING
   Add new entries below. Fields:
   - name, organization, description, status ("completed"|"learning")
   - date, image, link, certificateFile (paths under assets/)
   ============================================================ */
const certifications = [
  {
    id: "ccna-nti",
    name: "CCNA — Routing and Switching",
    organization: "NTI / Digital Egypt Youth Program",
    description:
      "Completed CCNA Routing and Switching training (90 technical hours + 30 soft skills) with a final score of 95%. Covered switching, routing, and enterprise networking fundamentals.",
    status: "completed",
    statusLabel: "Completed",
    date: "25/03/2026 – 15/05/2026",
    image: "assets/images/certs/ccna-routing-switching-nti.jpeg",
    link: "assets/images/certs/ccna-routing-switching-nti.jpeg",
    certificateFile: "",
    icon: "fa-solid fa-network-wired",
  },
  {
    id: "network-security-nti",
    name: "Network Security",
    organization: "NTI / Digital Egypt Youth Program",
    description:
      "Completed Network Security training (72 hours) with a final score of 93%. Focused on securing networks, access control, and defensive networking practices.",
    status: "completed",
    statusLabel: "Completed",
    date: "05/05/2026 – 14/07/2026",
    image: "assets/images/certs/network-security-nti.jpeg",
    link: "assets/images/certs/network-security-nti.jpeg",
    certificateFile: "",
    icon: "fa-solid fa-shield-halved",
  },
  {
    id: "hcia-cloud",
    name: "HCIA-Cloud Computing V5.5",
    organization: "Huawei ICT Academy",
    description:
      "Successfully completed the HCIA-Cloud Computing V5.5 course covering cloud infrastructure concepts, virtualization, and Huawei cloud technologies.",
    status: "completed",
    statusLabel: "Completed",
    date: "06/09/2026",
    image: "assets/images/certs/hcia-cloud-computing-huawei.jpeg",
    link: "assets/images/certs/hcia-cloud-computing-huawei.jpeg",
    certificateFile: "",
    icon: "fa-solid fa-cloud",
  },
  {
    id: "web-frontend-udemy",
    name: "The Web Front End Learning Guide",
    organization: "Udemy — Hassan Fulaih",
    description:
      "Completed a 10-hour front-end web development course covering HTML, CSS, and modern UI foundations.",
    status: "completed",
    statusLabel: "Completed",
    date: "24/08/2025",
    image: "assets/images/certs/web-frontend-udemy.jpeg",
    link: "https://ude.my/UC-6f1d2c34-d2cc-4c57-9c72-2d8fed0f4964",
    certificateFile: "",
    icon: "fa-solid fa-code",
  },
  {
    id: "mcsa",
    name: "MCSA / Microsoft Administration",
    organization: "Microsoft Learning Path",
    description:
      "Windows Server and System Administration learning path — Active Directory, DNS, DHCP, and server management.",
    status: "learning",
    statusLabel: "Currently Learning",
    date: "2026 – Present",
    image: "",
    link: "#",
    certificateFile: "",
    icon: "fa-brands fa-windows",
  },
];

/* ============================================================
   PROJECTS
   Add a new object to this array to create a new project card.
   ============================================================ */
const projects = [
  {
    id: "ccna-enterprise",
    title: "CCNA-Mid-Project-Nti",
    category: "CCNA",
    type: "Networking / Cisco",
    description:
      "Designed and configured a multi-VLAN enterprise network using Cisco Packet Tracer.",

    technologies: [
      "VLAN",
      "Inter-VLAN Routing",
      "OSPF",
      "DHCP",
      "ACL",
      "NAT/PAT",
      "STP",
      "SSH",
      "Port Security",
      "Wireless",
      "VoIP",
    ],

    documentation: "assets/files/Cisco_Enterprise_Documentation.pdf",
    download: "assets/files/Projects/mid project.pkt",

  },
  {
    id: "ccna-enterprise",
    title: "CCNA-Final-Project-Nti ",
    category: "CCNA",
    type: "Networking / Cisco",
    description:
      "Designed and configured a multi-VLAN enterprise network using Cisco Packet Tracer.",

    technologies: [
      "VLAN",
      "Inter-VLAN Routing",
      "OSPF",
      "DHCP",
      "ACL",
      "NAT/PAT",
      "STP",
      "SSH",
      "Port Security",
      "Wireless",
      "VoIP",
    ],

    documentation: "assets/files/Cisco_Enterprise_Documentation.pdf",
    download: "assets/files/Projects/Nti final project.pkt",

  },
  {
    id: "ccna-enterprise",
    title: "CCNA-Full-Project",
    category: "CCNA",
    type: "Networking / Cisco",
    description:
      "Designed and configured a multi-VLAN enterprise network using Cisco Packet Tracer.",

    technologies: [
      "VLAN",
      "Inter-VLAN Routing",
      "OSPF",
      "DHCP",
      "ACL",
      "NAT/PAT",
      "STP",
      "SSH",
      "Port Security",
      "Wireless",
      "VoIP",
    ],

    documentation: "assets/files/Cisco_Enterprise_Documentation.pdf",
    download: "assets/files/Projects/Full-Project.pkt",

  },
  {
    id: "mcsa-active-directory",
    title: "MCSA",
    category: "MCSA",
    type: "System Administration / Windows Server",
    description:
      "Configured Active Directory, DNS, DHCP, and user management on Windows Server.",

    technologies: [
      "Active Directory",
      "DNS",
      "DHCP",
      "Windows Server",
      "Users & Groups",
      "File Permissions",
      "Group Policy",
    ],

    documentation: "assets/files/MCSA_Documentation.pdf",
    download: "assets/files/MCSA_Lab.vhdx",

  },
  {
    id: "network-security",
    title: "Network Security Hardening",
    category: "Network Security",
    type: "Networking / Security",
    description:
      "Applied ACLs, Port Security, and SSH hardening to secure a small enterprise network — aligned with NTI Network Security training.",
    overview:
      "Security-focused project applying standard and extended ACLs, switch port security (sticky MAC), disabling unused ports, and replacing Telnet with SSH for remote management. Built alongside the NTI / Digital Egypt Network Security program.",
    objectives: [
      "Restrict traffic using ACLs",
      "Enable Port Security on access ports",
      "Secure remote access with SSH",
      "Disable unused interfaces",
      "Apply defense-in-depth at access and distribution layers",
    ],
    technologies: [
      "ACL",
      "Port Security",
      "SSH",
      "Telnet",
      "STP",
      "Network Security",
      "Hardening",
    ],
    challenges: [
      "Overly restrictive ACLs blocking management traffic",
      "Balancing usability with strong access control",
    ],
    solutions: [
      "Added explicit permit rules for management subnets before deny statements",
      "Documented allow-list policies and verified with ping / show access-lists",
    ],
    design:
      "Access layer hardened with Port Security; distribution ACLs filter inter-VLAN traffic; VTY lines accept SSH only. Reflects practices from the Network Security certificate track.",
    commands: `ip domain-name lab.local
crypto key generate rsa modulus 2048
username admin privilege 15 secret StrongPass
line vty 0 4
 transport input ssh
 login local
interface FastEthernet0/2
 switchport port-security
 switchport port-security maximum 2
 switchport port-security mac-address sticky`,
    image: "assets/images/certs/network-security-nti.jpeg",
    topologyImage: "",
    screenshots: ["assets/images/certs/network-security-nti.jpeg"],
    github: "#",
    documentation: "assets/files/Security_Hardening_Docs.pdf",
    download: "assets/files/Security_Hardening.pkt",
    files: [
      {
        name: "Security_Hardening.pkt",
        path: "assets/files/Security_Hardening.pkt",
        type: "pkt",
        icon: "📦",
      },
      {
        name: "Security_Hardening_Docs.pdf",
        path: "assets/files/Security_Hardening_Docs.pdf",
        type: "pdf",
        icon: "📄",
      },
      {
        name: "Network_Security_Certificate.jpeg",
        path: "assets/images/certs/network-security-nti.jpeg",
        type: "img",
        icon: "🏅",
      },
    ],
  },
];

const documents = [
  {
    id: "doc-ccna-lab01",
    name: "CCNA Lab 01 — VLANs",
    description: "Packet Tracer lab for basic VLAN configuration.",
    type: "pkt",
    path: "assets/files/CCNA-Lab-01.pkt",
  },
  {
    id: "doc-network-docs",
    name: "Network Documentation",
    description: "Sample enterprise network documentation template.",
    type: "pdf",
    path: "assets/files/Network-Documentation.pdf",
  },
  {
    id: "doc-ospf-cheatsheet",
    name: "OSPF Cheat Sheet",
    description: "Quick reference for OSPF commands and concepts.",
    type: "pdf",
    path: "assets/files/OSPF-Cheat-Sheet.pdf",
  },
  {
    id: "doc-acl-cheatsheet",
    name: "ACL Cheat Sheet",
    description: "Standard and extended ACL command reference.",
    type: "pdf",
    path: "assets/files/ACL-Cheat-Sheet.pdf",
  },
  {
    id: "doc-enterprise-cfg",
    name: "Enterprise Router Config",
    description: "Exported running-config sample from enterprise lab.",
    type: "cfg",
    path: "assets/files/enterprise-router-config.txt",
  },
  {
    id: "doc-topology",
    name: "Network Topology Diagram",
    description: "Placeholder for a network topology screenshot or diagram.",
    type: "img",
    path: "assets/images/topology-diagram.png",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Started Computer Science",
    description:
      "Began Computer Science studies at the Faculty of Computers and Artificial Intelligence, Benha University.",
  },
  {
    year: "2025",
    title: "Web Development Foundations",
    description:
      "Completed The Web Front End Learning Guide (Udemy) and built foundations in HTML, CSS, JavaScript, Bootstrap, and React.",
  },
  {
    year: "2026",
    title: "CCNA — Routing and Switching (NTI)",
    description:
      "Completed CCNA Routing and Switching via the Digital Egypt Youth Program at NTI (Mar–May 2026) with a 95% score.",
  },
  {
    year: "2026",
    title: "Network Security (NTI)",
    description:
      "Completed Network Security training through NTI / Digital Egypt Youth (May–Jul 2026) with a 93% score.",
  },
  {
    year: "2026",
    title: "HCIA-Cloud Computing V5.5",
    description:
      "Earned Huawei ICT Academy Certificate of Completion for HCIA-Cloud Computing V5.5.",
  },
  {
    year: "2026 – Present",
    title: "Microsoft Server Administration / MCSA",
    description:
      "Currently learning Microsoft Server Administration and MCSA topics — Windows Server, Active Directory, DNS, DHCP, and IT administration.",
  },
];

/* ============================================================
   APP LOGIC
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initScrollProgress();
  initBackToTop();
  initReveal();
  initNetworkCanvas();
  initCounters();
  renderProfileCard();
  renderSkills();
  renderCertifications();
  renderProjects();
  renderLabs();
  renderTimeline();
  renderContact();
  initContactForm();
  initModals();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- Profile card (from CONFIG.profile) ---------- */
function renderProfileCard() {
  const card = document.getElementById("profileCard");
  if (!card) return;
  const p = CONFIG.profile;
  card.innerHTML = `
    <div class="profile-card-header">
      <div class="profile-avatar" aria-hidden="true">
        <i class="fa-solid fa-user-tie"></i>
      </div>
      <div>
        <h3 class="profile-name">${escapeHtml(p.name)}</h3>
        <p class="profile-tag">CS Student · Networking Focus</p>
      </div>
    </div>
    <dl class="profile-list">
      <div class="profile-row"><dt>Name</dt><dd>${escapeHtml(p.name)}</dd></div>
      <div class="profile-row"><dt>Field</dt><dd>${escapeHtml(p.field)}</dd></div>
      <div class="profile-row"><dt>Specialization</dt><dd>${escapeHtml(p.specialization)}</dd></div>
      <div class="profile-row"><dt>Current Focus</dt><dd>${escapeHtml(p.currentFocus)}</dd></div>
      <div class="profile-row"><dt>Networking</dt><dd>${escapeHtml(p.networking)}</dd></div>
      <div class="profile-row"><dt>University</dt><dd>${escapeHtml(p.university)}</dd></div>
    </dl>
    <div class="profile-terminal" aria-hidden="true">
      <div class="term-bar">
        <span></span><span></span><span></span>
        <em>Azazi Hendawi</em>
      </div>
      <pre><code>who am i ?
azazi.hendawi
focus --path networking,sysadmin
building infrastructure skills</code></pre>
    </div>
  `;
}

/* ---------- Theme ---------- */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const saved = localStorage.getItem("portfolio-theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
  }

  updateThemeIcon(icon, root.getAttribute("data-theme"));

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateThemeIcon(icon, next);
  });
}

function updateThemeIcon(icon, theme) {
  if (!icon) return;
  icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

/* ---------- Navigation ---------- */
function initNavigation() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
      updateActiveNav();
    },
    { passive: true }
  );

  updateActiveNav();
}

function updateActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "home";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-section") === current);
  });
}

/* ---------- Scroll Progress ---------- */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = `${pct}%`;
      bar.setAttribute("aria-valuenow", String(Math.round(pct)));
    },
    { passive: true }
  );
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 500);
    },
    { passive: true }
  );
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Reveal animations ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------- Animated counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const animate = (el) => {
    const target = Number(el.getAttribute("data-count"));
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => observer.observe(c));
}

/* ---------- Network canvas background ---------- */
function initNetworkCanvas() {
  const canvas = document.getElementById("networkCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let nodes = [];
  let animationId;
  let width = 0;
  let height = 0;

  const NODE_COUNT = 48;
  const MAX_DIST = 140;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1.2,
    }));
  }

  function getAccentColor(alpha) {
    const theme = document.documentElement.getAttribute("data-theme");
    return theme === "light"
      ? `rgba(13, 148, 136, ${alpha})`
      : `rgba(45, 212, 191, ${alpha})`;
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0 || a.x > width) a.vx *= -1;
      if (a.y < 0 || a.y > height) a.vy *= -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = getAccentColor(0.18 * (1 - dist / MAX_DIST));
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.fillStyle = getAccentColor(0.7);
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    animationId = requestAnimationFrame(draw);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  resize();
  createNodes();
  if (!reduceMotion) {
    draw();
  } else {
    // Static snapshot
    nodes.forEach((a, i) => {
      ctx.beginPath();
      ctx.fillStyle = getAccentColor(0.6);
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = getAccentColor(0.12);
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    });
  }

  window.addEventListener("resize", () => {
    resize();
    createNodes();
  });

  // Observe theme changes to keep colors in sync on next frames
  const themeObserver = new MutationObserver(() => {});
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Cleanup guard (page unload)
  window.addEventListener("beforeunload", () => {
    if (animationId) cancelAnimationFrame(animationId);
  });
}

/* ---------- Render: Skills ---------- */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (cat) => `
    <article class="skill-category reveal">
      <div class="skill-cat-header">
        <div class="skill-cat-icon" aria-hidden="true"><i class="${cat.icon}"></i></div>
        <h3 class="skill-cat-title">${escapeHtml(cat.title)}</h3>
        ${cat.badge ? `<span class="skill-cat-badge">${escapeHtml(cat.badge)}</span>` : ""}
      </div>
      <div class="skill-tags">
        ${cat.items
          .map(
            (item) => `
          <span class="skill-tag${item.learning ? " learning" : ""}">
            ${item.icon ? `<i class="${item.icon}" aria-hidden="true"></i>` : ""}
            ${escapeHtml(item.name)}
          </span>`
          )
          .join("")}
      </div>
    </article>`
    )
    .join("");

  // Re-observe newly added reveal elements
  observeNewReveals(grid);
}

/* ---------- Render: Certifications ---------- */
function renderCertifications() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  const cards = certifications
    .map((cert) => {
      const statusClass = cert.status === "completed" ? "completed" : "learning";
      const statusIcon =
        cert.status === "completed" ? "fa-solid fa-circle-check" : "fa-solid fa-spinner";
      const hasLink = cert.link && cert.link !== "#";
      const certHref = hasLink ? cert.link : cert.image || "";

      return `
      <article class="cert-card reveal">
        <div class="cert-icon" aria-hidden="true"><i class="${cert.icon}"></i></div>
        <span class="cert-status ${statusClass}">
          <i class="${statusIcon}" aria-hidden="true"></i>
          ${escapeHtml(cert.statusLabel)}
        </span>
        <h3 class="cert-name">${escapeHtml(cert.name)}</h3>
        <p class="cert-org">${escapeHtml(cert.organization)}</p>
        <p class="cert-desc">${escapeHtml(cert.description)}</p>
        <div class="cert-meta">
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${escapeHtml(cert.date)}</span>
        </div>
        <div class="cert-actions">
          ${
            certHref
              ? `<a class="btn btn-ghost btn-sm" href="${escapeAttr(certHref)}" target="_blank" rel="noopener noreferrer">
                  <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> View Certificate
                </a>`
              : `<span class="btn btn-ghost btn-sm" style="opacity:0.55;cursor:default;">
                  <i class="fa-solid fa-spinner" aria-hidden="true"></i> In progress
                </span>`
          }
          ${
            cert.certificateFile
              ? `<a class="btn btn-ghost btn-sm" href="${escapeAttr(cert.certificateFile)}" download>
                  <i class="fa-solid fa-download" aria-hidden="true"></i> PDF
                </a>`
              : ""
          }
        </div>
      </article>`;
    })
    .join("");

  grid.innerHTML = cards;
  observeNewReveals(grid);
}

/* ---------- Render: Projects ---------- */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filtersEl = document.getElementById("projectFilters");
  if (!grid || !filtersEl) return;

  const categories = ["All", "CCNA", "MCSA", "Network Security"];

  filtersEl.innerHTML = categories
    .map(
      (cat, i) => `
    <button type="button" class="filter-btn${i === 0 ? " active" : ""}" data-filter="${escapeAttr(cat)}" aria-pressed="${i === 0}">
      ${escapeHtml(cat)}
    </button>`
    )
    .join("");

  grid.innerHTML = projects
    .map((project) => {
      const techPreview = project.technologies.slice(0, 5);
      const extra = project.technologies.length - techPreview.length;

      return `
      <article class="project-card reveal" data-category="${escapeAttr(project.category)}">
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-desc">${escapeHtml(project.description)}</p>
          <div class="tech-list">
            ${techPreview.map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}
            ${extra > 0 ? `<span class="tech-chip more">+${extra}</span>` : ""}
          </div>
          <div class="card-actions">
            <a class="btn btn-ghost btn-sm" href="${escapeAttr(project.download)}" download>
              <i class="fa-solid fa-download" aria-hidden="true"></i> Download Files
            </a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      filterCards(grid, ".project-card", btn.getAttribute("data-filter"));
    });
  });

  grid.querySelectorAll("[data-project-details]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const project = projects.find((p) => p.id === btn.getAttribute("data-project-details"));
      if (project) openProjectModal(project);
    });
  });

  observeNewReveals(grid);
}

/* ---------- Render: Labs ---------- */
function renderLabs() {
  const grid = document.getElementById("labsGrid");
  const filtersEl = document.getElementById("labFilters");
  if (!grid || !filtersEl) return;

  const filterTags = ["All", "CCNA", "MCSA", "Network Security", "CCNP"];

  filtersEl.innerHTML = filterTags
    .map(
      (tag, i) => `
    <button type="button" class="filter-btn${i === 0 ? " active" : ""}" data-filter="${escapeAttr(tag)}" aria-pressed="${i === 0}">
      ${escapeHtml(tag)}
    </button>`
    )
    .join("");

  grid.innerHTML = labs
    .map((lab) => {
      return `
      <article class="lab-card reveal" data-tags="${escapeAttr(lab.categoryTags.join(","))}">
        <div class="lab-body">
          <span class="lab-category">${escapeHtml(lab.categoryTags[0] || "Lab")}</span>
          <h3 class="lab-title">${escapeHtml(lab.name)}</h3>
          <p class="lab-desc">${escapeHtml(lab.description)}</p>
          <div class="tech-list">
            ${lab.categoryTags.map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="card-actions">
            <button type="button" class="btn btn-primary btn-sm" data-lab-details="${escapeAttr(lab.id)}">
              <i class="fa-solid fa-flask" aria-hidden="true"></i> View Lab
            </button>
            <a class="btn btn-ghost btn-sm" href="${escapeAttr(lab.download)}" download>
              <i class="fa-solid fa-download" aria-hidden="true"></i> Download
            </a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      filterLabs(grid, btn.getAttribute("data-filter"));
    });
  });

  grid.querySelectorAll("[data-lab-details]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lab = labs.find((l) => l.id === btn.getAttribute("data-lab-details"));
      if (lab) openLabModal(lab);
    });
  });

  observeNewReveals(grid);
}

/* ---------- Render: Documents ---------- */
function renderDocuments() {
  const grid = document.getElementById("docsGrid");
  if (!grid) return;

  const iconMap = {
    pdf: "fa-solid fa-file-pdf",
    pkt: "fa-solid fa-network-wired",
    cfg: "fa-solid fa-file-code",
    img: "fa-solid fa-image",
    doc: "fa-solid fa-file-lines",
  };

  grid.innerHTML = documents
    .map((doc) => {
      const icon = iconMap[doc.type] || iconMap.doc;
      return `
      <article class="doc-card reveal">
        <div class="doc-icon ${escapeAttr(doc.type)}" aria-hidden="true">
          <i class="${icon}"></i>
        </div>
        <div class="doc-body">
          <p class="doc-type">${escapeHtml(doc.type.toUpperCase())}</p>
          <h3 class="doc-name">${escapeHtml(doc.name)}</h3>
          <p class="doc-desc">${escapeHtml(doc.description)}</p>
          <p class="doc-path">${escapeHtml(doc.path)}</p>
          <div class="card-actions">
            <a class="btn btn-primary btn-sm" href="${escapeAttr(doc.path)}" download>
              <i class="fa-solid fa-download" aria-hidden="true"></i> Download
            </a>
            <a class="btn btn-ghost btn-sm" href="${escapeAttr(doc.path)}" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i> Open
            </a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  observeNewReveals(grid);
}


/* ---------- Render: Timeline ---------- */
function renderTimeline() {
  const list = document.getElementById("timeline");
  if (!list) return;

  list.innerHTML = timeline
    .map(
      (item) => `
    <li class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <p class="timeline-year">${escapeHtml(item.year)}</p>
      <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
      <p class="timeline-desc">${escapeHtml(item.description)}</p>
    </li>`
    )
    .join("");

  observeNewReveals(list);
}

/* ---------- Render: Contact ---------- */
function renderContact() {
  const container = document.getElementById("contactCards");
  if (!container) return;

  const items = [
    {
      label: "Email",
      value: CONFIG.email,
      href: CONFIG.email.startsWith("YOUR_") ? null : `mailto:${CONFIG.email}`,
      icon: "fa-regular fa-envelope",
    },
    {
      label: "LinkedIn",
      value: "Azazi Hendawi",
      href: CONFIG.linkedin.startsWith("YOUR_") ? null : CONFIG.linkedin,
      icon: "fa-brands fa-linkedin",
    },
    {
      label: "Facebook",
      value: "Azazi Hendawi",
      href: CONFIG.facebook.startsWith("YOUR_") ? null : CONFIG.facebook,
      icon: "fa-brands fa-facebook",
    },
    {
      label: "Phone",
      value: CONFIG.phone,
      href: CONFIG.phone.startsWith("YOUR_") ? null : `tel:${CONFIG.phone.replace(/\s+/g, "")}`,
      icon: "fa-solid fa-phone",
    },
  ];

  container.innerHTML = items
    .map((item) => {
      const inner = `
        <div class="contact-card-icon" aria-hidden="true"><i class="${item.icon}"></i></div>
        <div>
          <p class="contact-card-label">${escapeHtml(item.label)}</p>
          <p class="contact-card-value">${escapeHtml(item.value)}</p>
        </div>`;
      if (item.href) {
        return `<a class="contact-card" href="${escapeAttr(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`;
      }
      return `<div class="contact-card" title="Replace placeholder in js/script.js">${inner}</div>`;
    })
    .join("");
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      note.textContent = "Please fill in all fields.";
      note.classList.remove("success");
      return;
    }

    // Static site: open mailto with filled content (no backend)
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    const mail = CONFIG.email.startsWith("YOUR_")
      ? null
      : `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    if (mail) {
      window.location.href = mail;
      note.textContent = "Opening your email client…";
    } else {
      note.textContent =
        "Form ready. Set CONFIG.email in js/script.js to enable mailto, or connect a form service later.";
    }
    note.classList.add("success");
    form.reset();
  });
}

/* ---------- Filtering helpers ---------- */
function filterCards(grid, selector, filter) {
  const cards = grid.querySelectorAll(selector);
  let visible = 0;
  cards.forEach((card) => {
    const match = filter === "All" || card.getAttribute("data-category") === filter;
    card.classList.toggle("card-hidden", !match);
    if (match) visible++;
  });
  showEmptyState(grid, visible === 0);
}

function filterLabs(grid, filter) {
  const cards = grid.querySelectorAll(".lab-card");
  let visible = 0;
  cards.forEach((card) => {
    const tags = (card.getAttribute("data-tags") || "").split(",");
    const match = filter === "All" || tags.includes(filter);
    card.classList.toggle("card-hidden", !match);
    if (match) visible++;
  });
  showEmptyState(grid, visible === 0);
}

function showEmptyState(grid, show) {
  let empty = grid.querySelector(".empty-state");
  if (show) {
    if (!empty) {
      empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No items match this filter.";
      grid.appendChild(empty);
    }
  } else if (empty) {
    empty.remove();
  }
}

/* ---------- Modals ---------- */
function initModals() {
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => closeAllModals());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");

  const downloadableFiles = (project.files || []).filter(
    (file) => file.type !== "img" && !/\.(jpe?g|png|gif|webp)$/i.test(file.path || "")
  );

  const filesHtml =
    downloadableFiles.length
      ? downloadableFiles
          .map(
            (file) => `
        <div class="file-item">
          <span class="file-item-icon" aria-hidden="true">${file.icon || "📁"}</span>
          <div class="file-item-info">
            <p class="file-item-name">${escapeHtml(file.name)}</p>
            <p class="file-item-path">${escapeHtml(file.path)}</p>
          </div>
          <div class="file-item-actions">
            <a class="btn btn-primary btn-sm" href="${escapeAttr(file.path)}" download>Download</a>
          </div>
        </div>`
          )
          .join("")
      : `<p class="doc-desc">Project download files will appear here when added under <code>assets/files/</code>.</p>`;

  body.innerHTML = `
    <p class="modal-category">${escapeHtml(project.type || project.category)}</p>
    <h2 class="modal-title" id="modalTitle">${escapeHtml(project.title)}</h2>

    <div class="modal-section">
      <h4><i class="fa-solid fa-circle-info" aria-hidden="true"></i> Project Overview</h4>
      <p>${escapeHtml(project.overview || project.description)}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-bullseye" aria-hidden="true"></i> Objectives</h4>
      <ul>${(project.objectives || []).map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-microchip" aria-hidden="true"></i> Technologies Used</h4>
      <div class="tech-list">
        ${(project.technologies || []).map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}
      </div>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-draw-polygon" aria-hidden="true"></i> Network Design</h4>
      <p>${escapeHtml(project.design || "Add design notes in the project object.")}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-terminal" aria-hidden="true"></i> Important Commands</h4>
      <pre class="commands-block">${escapeHtml(project.commands || "Add commands here.")}</pre>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Challenges</h4>
      <ul>${(project.challenges || []).map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-lightbulb" aria-hidden="true"></i> Solutions</h4>
      <ul>${(project.solutions || []).map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-folder-open" aria-hidden="true"></i> Project Files</h4>
      <div class="file-list">${filesHtml}</div>
    </div>

    <div class="modal-links">
      ${
        project.documentation
          ? `<a class="btn btn-outline" href="${escapeAttr(project.documentation)}" download>
              <i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Documentation
            </a>`
          : ""
      }
      <a class="btn btn-primary" href="${escapeAttr(project.download)}" download>
        <i class="fa-solid fa-download" aria-hidden="true"></i> Download Project
      </a>
    </div>
  `;

  openModal(modal);
}

function openLabModal(lab) {
  const modal = document.getElementById("labModal");
  const body = document.getElementById("labModalBody");

  body.innerHTML = `
    <p class="modal-category">${escapeHtml((lab.categoryTags || []).join(" · "))}</p>
    <h2 class="modal-title" id="labModalTitle">${escapeHtml(lab.name)}</h2>

    <div class="modal-section">
      <h4><i class="fa-solid fa-circle-info" aria-hidden="true"></i> Description</h4>
      <p>${escapeHtml(lab.description)}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-terminal" aria-hidden="true"></i> Commands</h4>
      <pre class="commands-block">${escapeHtml(lab.commands || "")}</pre>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-folder-open" aria-hidden="true"></i> Lab Files</h4>
      <div class="file-list">
        <div class="file-item">
          <span class="file-item-icon" aria-hidden="true">📦</span>
          <div class="file-item-info">
            <p class="file-item-name">Packet Tracer / Lab File</p>
            <p class="file-item-path">${escapeHtml(lab.download)}</p>
          </div>
          <div class="file-item-actions">
            <a class="btn btn-primary btn-sm" href="${escapeAttr(lab.download)}" download>Download</a>
          </div>
        </div>
        ${
          lab.configFile
            ? `<div class="file-item">
          <span class="file-item-icon" aria-hidden="true">⚙️</span>
          <div class="file-item-info">
            <p class="file-item-name">Configuration File</p>
            <p class="file-item-path">${escapeHtml(lab.configFile)}</p>
          </div>
          <div class="file-item-actions">
            <a class="btn btn-ghost btn-sm" href="${escapeAttr(lab.configFile)}" download>Download</a>
          </div>
        </div>`
            : ""
        }
        ${
          lab.documentation
            ? `<div class="file-item">
          <span class="file-item-icon" aria-hidden="true">📄</span>
          <div class="file-item-info">
            <p class="file-item-name">Documentation</p>
            <p class="file-item-path">${escapeHtml(lab.documentation)}</p>
          </div>
          <div class="file-item-actions">
            <a class="btn btn-ghost btn-sm" href="${escapeAttr(lab.documentation)}" download>Download</a>
          </div>
        </div>`
            : ""
        }
      </div>
    </div>
  `;

  openModal(modal);
}

function openModal(modal) {
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.hidden = true;
  });
  document.body.style.overflow = "";
}

/* ---------- Utilities ---------- */
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/`/g, "&#96;");
}

function observeNewReveals(root) {
  const els = root.querySelectorAll(".reveal:not(.visible)");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => observer.observe(el));
}
