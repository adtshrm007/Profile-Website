<div align="center">

# ✦ RagCoder — Portfolio Website

### *A cinematic, AI-era developer portfolio built with React, GSAP & Framer Motion*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0d1117)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=0d1117)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=0d1117)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white&labelColor=0d1117)](https://gsap.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-FF0055?style=for-the-badge&logo=framer&logoColor=white&labelColor=0d1117)](https://www.framer.com/motion/)

<br />

> **Status** · 🟢 Live on Vite Dev · 🚀 Production-Ready · 📱 Fully Responsive

<br />

---

</div>

## ✦ Overview

This is a **world-class, recruiter-focused portfolio website** engineered for a 2nd-year Full Stack + AI Engineering student. Every design decision, animation, and interaction was crafted to communicate **technical depth**, **modern product thinking**, and **elite frontend skill** at a glance.

The experience is designed to feel like a fusion of:

- 🧠 **AI Operating System** — data-dense, sleek, and purposeful
- 🎬 **Cinematic Product Landing Page** — immersive scroll-driven storytelling
- 🖥️ **Futuristic SaaS Dashboard** — glassmorphism, glow, premium typography

---

## ✦ Feature Highlights

| Feature | Description |
|---|---|
| 🎬 **Cinematic Page Loader** | GSAP-powered entrance animation before the portfolio reveals |
| 🖱️ **Magnetic Custom Cursor** | Dual-ring cursor with spring physics and hover state morphing |
| 📜 **Smooth Scroll** | Lenis smooth scrolling with momentum and GSAP ScrollTrigger sync |
| 🌊 **Scroll Progress Bar** | Gradient top-bar indicating page reading progress |
| 🌐 **Active Nav Highlighting** | IntersectionObserver-based active section indicator in the Navbar |
| 🦸 **Hero Section** | Clamp-fluid typography, orbiting ring visual, floating code & stats cards, spotlight follow |
| 👤 **About Section** | Orbiting tech badge avatar, animated highlight cards, GSAP-triggered entrance |
| 🛠️ **Skills Dashboard** | Animated category tabs, per-skill progress bars with color-matched glows |
| 💼 **Projects Showcase** | Per-project accent-colored mockups, browser chrome previews, live status indicators |
| ⏱️ **Experience Timeline** | Alternating layout, GSAP scrub-animated glowing vertical line, emoji icon nodes |
| 🔧 **Services Grid** | Color-matched icon cards, feature lists, gradient border reveals on hover |
| 📬 **Contact Section** | Floating label inputs, success state animation, social card grid, availability indicator |
| 🦶 **Premium Footer** | 3-column layout with navigation, contact info, and availability status |

---

## ✦ Tech Stack

```
Frontend Framework   →  React 18 + Vite 6
Styling              →  Tailwind CSS v4 (vanilla config)
Animation Engine     →  GSAP 3 + ScrollTrigger plugin
Micro-interactions   →  Framer Motion
Smooth Scrolling     →  Lenis
Icons / UI           →  Lucide React
Fonts                →  Space Grotesk · Inter · JetBrains Mono (Google Fonts)
```

---

## ✦ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── CustomCursor.jsx      # Dual-ring magnetic cursor
│   │   ├── Navbar.jsx            # Scroll-aware glassmorphic navbar
│   │   ├── PageLoader.jsx        # Cinematic GSAP entrance loader
│   │   ├── ScrollProgress.jsx    # Top gradient progress bar
│   │   └── Footer.jsx            # 3-column premium footer
│   │
│   ├── sections/
│   │   ├── Hero.jsx              # Headline, orbs, CTA, spotlight
│   │   ├── About.jsx             # Profile visual, highlights, stats
│   │   ├── Skills.jsx            # Category tabs + skill cards
│   │   ├── Projects.jsx          # Project cards + mockup previews
│   │   ├── Experience.jsx        # Alternating GSAP timeline
│   │   ├── Services.jsx          # Service cards + CTA
│   │   └── Contact.jsx           # Form + social grid + info cards
│   │
│   └── ui/
│       ├── SectionHeader.jsx     # Reusable animated section heading
│       ├── AnimatedCounter.jsx   # GSAP scroll-triggered counter
│       └── GlowCard.jsx          # 3D tilt mouse-follow card
│
├── data/
│   ├── projects.js               # Project metadata
│   ├── skills.js                 # Skills + tech badges
│   └── timeline.js               # Timeline events + services
│
├── App.jsx                       # Root: Lenis, ScrollTrigger, layout
├── main.jsx                      # React DOM entry
└── index.css                     # Design system, tokens, animations
```

---

## ✦ Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#020818` | Page background |
| `--accent-blue` | `#3b82f6` | Primary accent, CTAs |
| `--accent-purple` | `#8b5cf6` | Secondary accent |
| `--accent-cyan` | `#06b6d4` | Tertiary / AI category |
| `--text-primary` | `#f1f5f9` | Body text |
| `--text-secondary` | `#94a3b8` | Muted text |

### Glassmorphism Classes
```css
.glass        /* Light glass: blur(20px), bg 2.5%, border 6% white */
.glass-card   /* Heavier card: blur(24px), bg 3%, border 7% white */
```

### Typography
```css
font-family: 'Inter'          /* Body copy */
font-family: 'Space Grotesk'  /* Headings, numbers, UI labels */
font-family: 'JetBrains Mono' /* Code snippets */
```

---

## ✦ Getting Started

### Prerequisites
- **Node.js** 18+
- **npm** 9+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/ragcoder/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```


### Build for Production

```bash
npm run build
```

The optimised output will be in the `dist/` folder, ready for deployment on **Vercel**, **Netlify**, or any static host.

---

## ✦ Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to app.netlify.com
```

---

## ✦ Customisation

All content is centralised in the `src/data/` directory — no hunting through components:

| File | What to edit |
|---|---|
| `data/projects.js` | Project titles, descriptions, tech stack, links |
| `data/skills.js` | Skill names, proficiency levels, icons |
| `data/timeline.js` | Timeline milestones + service offerings |

To update your personal info (name, email, location), search for `ragcoder` across the `src/` directory.

---

## ✦ Performance Notes

- All GSAP animations use `will-change: transform` implicitly via GSAP internals
- Background blobs use `blur-filter` — disable on low-end devices by removing blob elements from Hero/About
- Lenis smooth scroll is connected to GSAP's RAF loop to avoid double-frame jank
- Fonts are loaded via Google Fonts with `display=swap` to prevent FOUT

---

## ✦ License

This project is open-sourced under the **MIT License** — free to use as a template with attribution.

---

<div align="center">

**Designed & Engineered with ❤️ by [RagCoder](https://github.com/ragcoder)**

*Built with React · Vite · GSAP · Framer Motion · Tailwind CSS*

</div>
