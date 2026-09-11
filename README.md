# Modern Developer Portfolio

A fast, responsive, modern developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**, pre-configured for one-click deployment to **Vercel**.

---

## 🚀 Features

- ⚡ **Next.js 15 App Router** & React 19 for speed and SEO.
- 🎨 **Tailwind CSS** with modern dark aesthetics, glassmorphism, and responsive design.
- 📦 **Single Config File (`src/data/portfolio.ts`)** for instant personalization without touching UI code.
- 📱 **100% Mobile Responsive** with animated dropdown navigation.
- 💼 **Categorized Project Showcase** with live demo links, GitHub links, and metrics badges.
- 🛠️ **Interactive Skills Matrix** with icon integrations.
- ⏳ **Experience & Education Timeline** for clear career milestones.
- 📬 **Interactive Contact Section** with 1-click email copy & form.
- 🌐 **SEO & OpenGraph Pre-configured** for social sharing.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ How to Customize Your Portfolio

All personal data, projects, skills, and links are stored in **`src/data/portfolio.ts`**.

Simply edit that file to update:
- Your name, role, bio, and avatar image URL
- Your GitHub, LinkedIn, Twitter, and email addresses
- Career statistics (Years of experience, projects shipped)
- Your skill categories and technology badges
- Projects list (title, description, tags, screenshots, live URLs, GitHub URLs)
- Work experience and education history

---

## 🚀 How to Host on Vercel

### Option 1: Deploy via Vercel Web Dashboard (Recommended)

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Next.js** framework settings.
6. Click **"Deploy"**. Your portfolio will be live on a `*.vercel.app` domain with automatic SSL and global CDN within 60 seconds!

---

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. Run the deploy command from this folder:
   ```bash
   vercel
   ```
3. Follow the simple terminal prompts (Accept defaults).
4. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 📦 Project Structure

```text
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind styling & dark theme
│   │   ├── layout.tsx         # Root layout & SEO OpenGraph
│   │   └── page.tsx           # Main landing page assembly
│   ├── components/
│   │   ├── About.tsx          # About me & engineering pillars
│   │   ├── Contact.tsx        # Contact details & interactive form
│   │   ├── Experience.tsx     # Work experience & education timeline
│   │   ├── Footer.tsx         # Footer & back-to-top button
│   │   ├── Hero.tsx           # Intro banner & social links
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar
│   │   ├── Projects.tsx       # Filterable projects showcase
│   │   ├── SectionHeader.tsx  # Animated section title badges
│   │   └── Skills.tsx         # Technical skills grid
│   ├── data/
│   │   └── portfolio.ts       # ⭐️ Centralized portfolio content
│   └── lib/
│       └── utils.ts           # Class merging helper
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS config
├── tailwind.config.ts         # Tailwind CSS styling config
└── tsconfig.json              # TypeScript config
```
