import { Project, Experience, Certification, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "George Fady Mikhail",
  arName: "جورج فادي ميخائيل",
  title: "Senior Full-Stack & 3D Web Creative Developer",
  subTitle: "Cloud & Network Security Engineer | Sangfor HCI & NGAF Specialist",
  location: "Alexandria, Egypt",
  phone: "+20 128 177 0085",
  whatsappUrl: "https://wa.me/201281770085?text=Hi%20George,%20I%20visited%20your%203D%20portfolio%20and%20would%20love%20to%20discuss%20a%20website%20project!",
  email: "georgefady142@gmail.com",
  linkedin: "https://linkedin.com/in/georgefadysecurity",
  github: "https://github.com/gogofady",
  bio: "Creative Full-Stack Developer & Cloud Security Architect who merges high-performance 3D WebGL animations with rock-solid, zero-trust infrastructure. From interactive 3D e-commerce to enterprise hospitality showcases, I build websites that blow clients away.",
  availability: "Available for High-Impact Client Projects & Architecture",
  stats: [
    { label: "Production Websites", value: "10+" },
    { label: "Security Certifications", value: "7+" },
    { label: "Interactive 3D FPS", value: "60-120" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const VALUE_PROPOSITION = {
  badge: "Unbeatable Creative Value",
  title: "The Zero-Risk Creative Guarantee",
  hook: "Don't pay for empty promises. See your website come to life before committing.",
  description: "I will design and build an exclusive interactive 3D preview of your website first. If you are completely stunned by its beauty, smoothness, and performance — you buy it. If not, you walk away with zero obligations.",
  features: [
    {
      title: "Interactive 3D & Spatial Motion",
      desc: "Tailored Three.js & WebGL animations, cursor-following 3D models, and cinematic scroll choreography."
    },
    {
      title: "Hardened Enterprise Security",
      desc: "Backed by Sangfor NGAF, Next-Gen firewalls, secure SSL, and Zero-Trust defense architecture."
    },
    {
      title: "Competitive & Transparent Pricing",
      desc: "High-end agency-grade quality at direct developer rates without middleman bloat."
    },
    {
      title: "Blazing Speed & 120 FPS",
      desc: "Optimized with Vite, React 19, GPU hardware acceleration, and perfect Core Web Vitals."
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "morse-accessory",
    title: "Morse Accessory",
    tagline: "High-Vibe Luxury Morse Code Jewelry in 3D WebGL",
    client: "Morse Accessory Global",
    year: "2026",
    role: "Lead 3D Creative Engineer & Full-Stack Architect",
    url: "https://morseaccessory.com",
    metrics: ["120 FPS 3D Render", "Interactive GLB Models", "Scroll Assembly Logic"],
    description: "An ultra-luxurious 3D e-commerce experience featuring interactive GLB models of gold & silver necklaces and bracelets. Uses Three.js and GSAP to seamlessly assemble and disassemble jewelry elements as the user scrolls, paired with Lenis smooth scrolling.",
    techStack: ["React 19", "Three.js", "GSAP ScrollTrigger", "Lenis Scroll", "Tailwind CSS", "Vite"],
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accentColor: "#f59e0b",
    has3dModel: true,
    modelPath: "/assets/models/gold_bracelet.glb",
    screenshots: [
      "/assets/projects/morse_1.webp",
      "/assets/projects/morse_2.webp"
    ]
  },
  {
    id: "saint-george-furniture",
    title: "Saint George Co.",
    tagline: "Commercial & Hospitality FF&E Luxury Furniture Showcase",
    client: "Saint George Co.",
    year: "2026",
    role: "Full-Stack Web Architect & 3D Visualizer",
    url: "https://stgfurniture.com",
    metrics: ["100% Custom Architecture", "Dynamic Project Galleries", "3D Lighting Shaders"],
    description: "A prestigious digital headquarters for a premier commercial hotel & mid-century furniture manufacturer. Features curated project galleries, custom FF&E solutions catalog, YouTube video integration, automated deployment workflows, and subtle 3D hover depth.",
    techStack: ["Custom CSS/JS Engine", "3D Motion Shaders", "WordPress API", "Python Automation", "FTP/CI Pipeline"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "#06b6d4",
    has3dModel: false,
    screenshots: [
      "/assets/projects/stg_1.webp",
      "/assets/projects/stg_2.webp"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Pomega (International Sangfor Technology Partner)",
    role: "Cloud & Network Security Engineer",
    period: "Feb 2026 – Present",
    location: "Egypt & Customer Enterprise Sites",
    badge: "Enterprise Partner",
    highlights: [
      "Deploy, configure, and maintain Sangfor HCI clusters with High Availability (HA), Dynamic Resource Scheduling (DRS), and Disaster Recovery (DR).",
      "Integrate aSAN, iSCSI, NFS, and TrueNAS enterprise storage; perform cluster upgrades and performance optimization.",
      "Configure Sangfor NGAF firewall policies, IPS/IDS inspection, anti-malware, and network micro-segmentation.",
      "Implement Sangfor IAG with Role-Based Access Control (RBAC), MFA, and SSO for secure remote access.",
      "Build VMware lab test topologies for customer rollouts and write production SOPs."
    ],
    technologies: ["Sangfor HCI", "Sangfor NGAF", "Sangfor IAG", "Sangfor VDI", "VMware ESXi", "TrueNAS", "aSAN"]
  },
  {
    company: "Concentrix",
    role: "Technical Support Representative",
    period: "2023 – 2024",
    location: "Egypt",
    badge: "Enterprise SLA",
    highlights: [
      "Diagnosed and resolved software, hardware, and network connectivity incidents for enterprise users while meeting SLA targets.",
      "Troubleshot TCP/IP, DNS, and routing issues with in-depth root cause analysis (RCA)."
    ],
    technologies: ["TCP/IP", "DNS", "Enterprise Networking", "ITIL", "Windows Server"]
  },
  {
    company: "AMIT Security Learning Academy",
    role: "Cybersecurity & Technical Support Trainee",
    period: "2020",
    location: "Alexandria, Egypt",
    badge: "Security Operations",
    highlights: [
      "Monitored security events, correlated logs, and triaged alerts using Splunk SIEM.",
      "Investigated simulated cyber attacks and participated in incident response war games."
    ],
    technologies: ["Splunk SIEM", "Wireshark", "Nmap", "Threat Hunting", "Incident Response"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Sangfor Certified HCI Professional (HCI-P)",
    issuer: "Sangfor Technologies",
    year: "2026",
    level: "Professional",
    category: "Sangfor",
    badgeColor: "#ef4444"
  },
  {
    name: "Sangfor Certified Next Generation Firewall Professional (NGAF-P)",
    issuer: "Sangfor Technologies",
    level: "Professional",
    category: "Sangfor",
    badgeColor: "#f97316"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    level: "Global Industry Standard",
    category: "Industry",
    badgeColor: "#3b82f6"
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    level: "Associate",
    category: "Industry",
    badgeColor: "#06b6d4"
  },
  {
    name: "Sangfor Certified IAG Associate (IAG-A)",
    issuer: "Sangfor Technologies",
    level: "Associate",
    category: "Sangfor",
    badgeColor: "#8b5cf6"
  },
  {
    name: "Sangfor Certified VDI Associate (VDI-A)",
    issuer: "Sangfor Technologies",
    level: "Associate",
    category: "Sangfor",
    badgeColor: "#ec4899"
  },
  {
    name: "Google Cloud Security Certificate",
    issuer: "Google / Coursera",
    level: "Specialization",
    category: "Cloud",
    badgeColor: "#10b981"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    level: "Professional",
    category: "Cloud",
    badgeColor: "#14b8a6"
  },
  {
    name: "IBM Cybersecurity Certificate",
    issuer: "IBM",
    level: "Specialist",
    category: "Industry",
    badgeColor: "#6366f1"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "3D & Creative Frontend",
    iconName: "Boxes",
    skills: [
      { name: "Three.js / WebGL", level: 95, highlight: true },
      { name: "React 19 & Next.js", level: 95, highlight: true },
      { name: "GSAP & ScrollTrigger", level: 92, highlight: true },
      { name: "Tailwind CSS", level: 98, highlight: true },
      { name: "Framer Motion", level: 90 },
      { name: "Lenis Smooth Scroll", level: 92 }
    ]
  },
  {
    category: "Cloud & Virtualization",
    iconName: "Server",
    skills: [
      { name: "Sangfor HCI (HCI-P)", level: 96, highlight: true },
      { name: "VMware ESXi & Workstation", level: 90 },
      { name: "High Availability & DRS", level: 94 },
      { name: "Disaster Recovery (DR)", level: 92 },
      { name: "Google Cloud Platform (GCP)", level: 85 }
    ]
  },
  {
    category: "Network Security & Zero Trust",
    iconName: "ShieldCheck",
    skills: [
      { name: "Sangfor NGAF (Firewall)", level: 96, highlight: true },
      { name: "Sangfor IAG (Access Gateway)", level: 92 },
      { name: "IPS/IDS & Threat Inspection", level: 94 },
      { name: "Cisco Routing & Switching", level: 90 },
      { name: "Network Segmentation & VLANs", level: 95 }
    ]
  },
  {
    category: "Enterprise Storage & Systems",
    iconName: "HardDrive",
    skills: [
      { name: "aSAN Storage", level: 92, highlight: true },
      { name: "TrueNAS & iSCSI / NFS", level: 90 },
      { name: "Linux / Ubuntu / Debian", level: 92 },
      { name: "Windows Server / AD", level: 88 },
      { name: "Splunk SIEM & Wireshark", level: 86 }
    ]
  }
];

export const PARTNER_LOGOS = [
  { name: "Sangfor Technologies", role: "Certified HCI & NGAF Specialist", color: "#e11d48" },
  { name: "Pomega", role: "International Partner", color: "#3b82f6" },
  { name: "Cisco", role: "Certified CCNA", color: "#06b6d4" },
  { name: "CompTIA", role: "Security+ Certified", color: "#f59e0b" },
  { name: "Google Cloud", role: "Cloud Security Certified", color: "#10b981" },
  { name: "Apple Ecosystem", role: "Spatial & Liquid Glass Design", color: "#a855f7" }
];