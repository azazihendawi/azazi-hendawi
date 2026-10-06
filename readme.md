# Azazi Hendawi — Network Engineer Portfolio

Professional personal portfolio for Networking, System Administration, and IT Infrastructure.

**Stack:** HTML5 · CSS3 · Vanilla JavaScript  
**No React / no build step required.**

---

## How to run

1. Open the project folder.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox).

Or use a local server (recommended for smoother asset loading):

```bash
# VS Code / Cursor: use "Live Server"
# Or with Python:
python -m http.server 5500
```

Then visit `http://localhost:5500`.

---

## Project structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js          ← edit data here
├── assets/
│   ├── images/            ← screenshots, topologies
│   ├── icons/
│   └── files/             ← .pkt, .pdf, configs
└── README.md
```

---

## How to change personal information

Edit the `CONFIG` object at the top of `js/script.js`:

```javascript
const CONFIG = {
  name: "Azazi Hendawi",
  email: "YOUR_EMAIL@example.com",
  phone: "YOUR_PHONE_NUMBER",
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
  facebook: "YOUR_FACEBOOK_URL",
  profile: { /* ... */ },
};
```

About section profile text can also be edited directly in `index.html` (`#about`).

---

## How to change GitHub / LinkedIn / contact links

1. Open `js/script.js`.
2. Replace placeholders in `CONFIG`:
   - `YOUR_GITHUB_URL` → `https://github.com/your-username`
   - `YOUR_LINKEDIN_URL` → `https://linkedin.com/in/your-profile`
   - `YOUR_FACEBOOK_URL` → your Facebook URL
   - `YOUR_EMAIL@example.com` → your email
   - `YOUR_PHONE_NUMBER` → your phone

Also update repository URLs in the `repositories` array.

---

## How to add a project

1. Open `js/script.js`.
2. Add a new object to the `projects` array:

```javascript
{
  id: "unique-id",
  title: "My New Project",
  category: "Networking",       // used for filtering
  type: "Networking / Cisco",
  description: "Short card description.",
  overview: "Longer overview for the modal.",
  objectives: ["Objective 1", "Objective 2"],
  technologies: ["VLAN", "OSPF", "ACL"],
  challenges: ["Challenge..."],
  solutions: ["Solution..."],
  design: "Network design summary.",
  commands: `enable\nconfigure terminal\n...`,
  image: "assets/images/projects/my-project.png",
  topologyImage: "assets/images/projects/my-project-topology.png",
  github: "YOUR_GITHUB_URL/my-repo",
  documentation: "assets/files/my-project.pdf",
  download: "assets/files/my-project.pkt",
  files: [
    { name: "my-project.pkt", path: "assets/files/my-project.pkt", type: "pkt", icon: "📦" },
    { name: "my-project.pdf", path: "assets/files/my-project.pdf", type: "pdf", icon: "📄" },
  ],
}
```

3. Place image files under `assets/images/` and project files under `assets/files/`.
4. Refresh the browser — the card and modal are generated automatically.

---

## How to add a networking lab

1. Open `js/script.js`.
2. Add an object to the `labs` array:

```javascript
{
  id: "lab-new",
  name: "My Lab Name",
  description: "What this lab practices.",
  categoryTags: ["VLAN", "Cisco"],  // filters: VLAN, Routing, Security, Services, Cisco
  topologyImage: "assets/images/labs/my-lab.png",
  commands: `vlan 30\n name NEW`,
  configFile: "assets/files/labs/MyLab_Config.txt",
  documentation: "assets/files/labs/MyLab.pdf",
  download: "assets/files/labs/MyLab.pkt",
}
```

3. Drop files into `assets/files/labs/`.

---

## How to add a PDF / Packet Tracer file / document

1. Copy the file into `assets/files/` (or `assets/files/labs/`).
2. Add an entry to the `documents` array in `js/script.js`:

```javascript
{
  id: "doc-new",
  name: "CCNA Lab 02",
  description: "Short description.",
  type: "pkt",   // pdf | pkt | cfg | img | doc
  path: "assets/files/CCNA-Lab-02.pkt",
}
```

Examples:

- PDF → `type: "pdf"`, path ends with `.pdf`
- Packet Tracer → `type: "pkt"`, path ends with `.pkt`
- Config → `type: "cfg"`, path ends with `.txt` / `.cfg`

---

## How to add a certification

Add an object to the `certifications` array:

```javascript
{
  id: "new-cert",
  name: "Certificate Name",
  organization: "Issuing Organization",
  description: "What it covers.",
  status: "completed",           // or "learning"
  statusLabel: "Completed",
  date: "2026",
  image: "assets/images/certs/cert.png",
  link: "https://verification-url",
  certificateFile: "assets/files/My-Certificate.pdf",
  icon: "fa-solid fa-certificate",
}
```

---

## How to update the learning timeline

Edit the `timeline` array in `js/script.js`:

```javascript
{ year: "2027", title: "...", description: "..." }
```

---

## Extra features included

- Dark / light mode (saved in `localStorage`)
- Sticky navbar + mobile hamburger menu
- Smooth scrolling + active section highlighting
- Scroll progress bar + back-to-top button
- Project & lab filtering
- Project / lab detail modals
- Network-node canvas animation in the hero
- Fade-in animations via `IntersectionObserver`
- Animated counters
- Responsive layout (desktop → mobile)
- SEO meta tags + Open Graph

---

## Design notes

The visual identity targets **Network Engineer / IT Infrastructure** (nodes, terminals, topology feel) — not a generic frontend-developer template. Accent colors are teal/cyan on deep navy.

---

## Notes about placeholders

- Contact links use `YOUR_*` placeholders on purpose — replace them with real values.
- Download buttons point to paths under `assets/files/`. Until you add real files, downloads may 404.
- Do not invent certificates, jobs, or GitHub URLs; only add what you actually have.

---

## License

Personal portfolio — use and customize freely for your own career materials.
