# Deepika Portfolio

A premium portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis, and GSAP.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript, Tailwind CSS
- **Animation:** Framer Motion, Lenis Smooth Scroll, GSAP
- **Components:** Shadcn UI, Lucide Icons
- **Font:** Geist

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Static files are exported to the `out/` folder.

## Deploy to GitHub Pages

This project is configured for **static export** and deploys automatically via GitHub Actions.

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repo (e.g. `portfolio` or `deepika-portfolio`)
3. Keep it **Public**
4. Do **not** add a README, .gitignore, or license (this project already has them)

### Step 2 — Push your code

```bash
cd "/Users/deepika/Downloads/Deepika's Portfolio"
git init
git add .
git commit -m "Initial commit: premium portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub details.

### Step 3 — Enable GitHub Pages

1. Open your repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. After the workflow runs, your site will be live at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` (project repo)
   - `https://YOUR_USERNAME.github.io/` (if repo is named `YOUR_USERNAME.github.io`)

### Manual local export (optional)

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

Then serve the `out/` folder locally to preview the GitHub Pages path.

## Features

- Premium dark-mode design with glassmorphism
- Smooth scroll with Lenis
- Magnetic button hover effects
- Text reveal and fade-in animations
- Auto-sliding testimonials carousel
- Interactive floating tech stack icons
- Responsive layout with mobile navigation
- SEO optimized with metadata
- Accessibility friendly

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── effects/      # Animation & effect components
│   ├── illustrations/# SVG illustrations
│   ├── layout/       # Navbar, Footer, Loading
│   ├── sections/     # Page sections
│   └── ui/           # Shadcn UI components
├── data/             # Static content data
├── hooks/            # Custom React hooks
└── lib/              # Utilities
```
