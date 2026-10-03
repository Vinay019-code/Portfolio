# Vinay Yadav — Senior-Grade Software Engineer Portfolio

> **Software Engineer | Full-Stack Developer**  
> *"Building scalable web applications with MERN, Java and Python."*

A production-quality personal portfolio website designed with an editorial aesthetic, dark cinematic atmosphere, GSAP animations, interactive systems visualization, and architecture case studies.

---

## 🚀 Key Highlights & Architectural Features

- **Next.js 16 App Router & TypeScript**: Built on modern App Router with strict static typing, static route generation (`generateStaticParams`), and SEO metadata.
- **GSAP & ScrollTrigger Motion System**: Line-by-line typography reveals, elastic magnetic buttons, context cleanup via `gsap.context()`, and full `prefers-reduced-motion` compliance.
- **Interactive Engineering Terminal**: Dynamic TypeScript system visualizer presenting Vinay's stack, 3-tier pipeline (Presentation, Services, Data), and live status telemetry.
- **Technical Ecosystem Explorer**: Categorized technology matrix (Languages, Frontend, Backend, Databases, Core CS, Tools, Data Science) with dynamic hover inspection.
- **Case Study Sub-Routes**:
  - `/work/chat-application`: Real-Time Chat Application (React, Node, Express, MongoDB, Socket.IO, JWT)
  - `/work/meditation-analytics`: AI Meditation Analytics Prototype (Python, MediaPipe, OpenCV, NumPy, Matplotlib)
  - `/work/life-admin-os`: AI Life Admin OS (Next.js, React, Tailwind, Express, MongoDB, Google OAuth)
- **Interactive Architecture Flowcharts**: Visual pipelines mapping client applications, network protocols, server gateways, and persistence tiers.
- **Problem Solving & "How I Think"**: 6-phase engineering lifecycle (Problem → Break Down → Design → Build → Test → Improve) and pattern-based DSA topics (primary in Java).
- **Interactive Portfolio Assistant ("Ask about Vinay")**: Floating bottom-right assistant providing instant answers grounded strictly in resume facts.
- **Direct Resume Download**: Integrated `/resume.pdf` download and browser preview.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Custom Design Tokens & CSS Variables |
| **Motion & Animation** | GSAP 3, ScrollTrigger, GSAP context() |
| **Icons & Visuals** | Lucide React, Custom High-DPI SVGs, Canvas Particle Grid |
| **Deployment Target** | Vercel / Node.js Production Server |

---

## 📁 Repository Structure

```text
src/
├── app/
│   ├── globals.css                # Design tokens (--background, --accent, --surface)
│   ├── layout.tsx                 # Viewport, OpenGraph SEO, favicon, metadata
│   ├── page.tsx                   # Main portfolio assembly
│   └── work/
│       └── [slug]/
│           └── page.tsx           # Dynamic case study route with SSG
├── components/
│   ├── about/
│   │   └── About.tsx              # Editorial philosophy & foundations panel
│   ├── assistant/
│   │   └── PortfolioAssistant.tsx # "Ask about Vinay" frontend assistant
│   ├── background/
│   │   └── InteractiveBackground.tsx # GPU-light canvas particle grid & ambient light
│   ├── contact/
│   │   └── ContactSection.tsx     # Direct email/phone cards & contact form
│   ├── education/
│   │   └── EducationTimeline.tsx  # B.Tech degree, SRMCEM / AKTU coursework
│   ├── footer/
│   │   └── Footer.tsx             # Sleek minimalist footer with back-to-top
│   ├── hero/
│   │   ├── Hero.tsx               # Headline typography reveal & magnetic CTA
│   │   └── SystemTerminal.tsx     # Dynamic engineer code/specs visualizer
│   ├── navigation/
│   │   ├── Navbar.tsx             # Responsive fixed header with scroll shrink
│   │   └── MobileMenu.tsx         # Fullscreen animated GSAP mobile drawer
│   ├── principles/
│   │   └── EngineeringPrinciples.tsx # Core software engineering values
│   ├── problem-solving/
│   │   └── HowIThink.tsx          # 6-phase engineering lifecycle & DSA topics
│   ├── projects/
│   │   ├── ArchitectureVisualizer.tsx # Tier-by-tier system pipeline visualizer
│   │   ├── ProjectCard.tsx        # Mini-product interactive project card
│   │   └── ProjectsSection.tsx    # Production work showcase
│   ├── resume/
│   │   └── ResumeCTA.tsx          # Official curriculum vitae download card
│   └── ui/
│       ├── CustomCursor.tsx       # Desktop custom pointer with "VIEW" hover state
│       ├── Icons.tsx              # Clean SVG icons (GitHub, LinkedIn)
│       ├── InitialLoader.tsx      # Fast ~0.8s cinematic progress loader
│       └── MagneticButton.tsx     # Elastic GSAP magnetic interaction
├── data/
│   ├── profile.ts                 # Verified resume data for Vinay Yadav
│   ├── projects.ts                # Case study architecture & engineering decisions
│   └── skills.ts                  # Categorized skills matrix & ecosystem
├── hooks/
│   ├── useMousePosition.ts        # Global cursor tracking
│   ├── useReducedMotion.ts        # prefers-reduced-motion hook
│   └── useScrollProgress.ts       # Scroll percentage and navbar shrink state
└── lib/
    ├── gsap.ts                    # Safe client-side GSAP & ScrollTrigger setup
    └── utils.ts                   # Classname utility helpers
```

---

## 💻 Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized static output with SSG for all project pages.

### 4. Production Start
```bash
npm run start
```

---

## 🔒 Verification & Resume Authenticity

All project information, skills, educational milestones, and contact channels are strictly aligned with Vinay Yadav's official resume. No fabricated metrics, fictional users, or unverified claims are present on the website.

- **Email**: vinayyadav00190@gmail.com
- **Phone**: +91-6397157910
- **Location**: India
- **GitHub**: [github.com/Vinay019-code](https://github.com/Vinay019-code)
- **LinkedIn**: [linkedin.com/in/vinay-yadav](https://www.linkedin.com/in/vinay-yadav)

© 2026 Vinay Yadav. All rights reserved.
