<div align="center">

# ⚡ Cybernetic Evolution
### A Futuristic Cyborg Landing Page with Interactive UI/UX

<p align="center">
  <img src="./public/images/hero_cyborg.png" alt="Cybernetic Evolution hero artwork" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animated-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

</div>

---

## Overview

**Cybernetic Evolution** is a premium futuristic landing page designed around a cybernetic-human enhancement theme. The interface blends neon gradients, glassmorphism, holographic borders, motion effects, and immersive 3D-style imagery to create a polished sci-fi experience.

The project is built as a **single-page React application** with smooth section-based navigation, responsive layouts, animated cards, and a strong visual hierarchy. It is intentionally designed to feel like a high-end product launch page for an advanced AI / cybernetic platform.

---

## What makes this page feel futuristic

The visual identity is built from the following UI patterns:

- **Dark cyberpunk palette** with cyan, purple, and pink accents
- **Glassmorphism panels** with blur, translucency, and soft borders
- **Animated aurora background** for atmosphere and depth
- **Holographic rings and glow effects** around the hero artwork
- **Motion-driven interactions** using Framer Motion
- **Responsive layouts** that adapt cleanly from mobile to desktop
- **Section-based storytelling** that guides the user through the experience

The result is a landing page that feels more like a cinematic product reveal than a normal website.

---

## Live page structure

The homepage is organized into the following blocks:

### 1. Sticky navigation
A glass-style top bar with brand identity, section anchors, and a prominent CTA button.

### 2. Hero section
The main hero combines:
- a bold headline
- supporting copy
- CTA buttons
- live stat highlights
- a large cyborg artwork panel
- rotating holographic rings

### 3. Cyborg subsystems
A grid of clickable-looking subsystem cards featuring the built-in imagery:
- Neural Architecture
- Motion System
- Power Core
- Cognitive Interface
- Outer Structure

### 4. System architecture
A futuristic five-stage flow diagram that explains the intelligence pipeline.

### 5. Statistics
Compact metric cards that reinforce scale and performance.

### 6. Testimonials
Minimal, premium testimonial cards to support the product story.

### 7. Pricing plans
A three-tier pricing layout with a highlighted “Most Popular” plan.

### 8. Call to action
A final full-width CTA section with a glowing animated background.

### 9. Footer
A clean multi-column footer for product, company, and legal links.

---

## Included image assets

This repository already includes the full visual asset set used by the page.

### Hero artwork
- `public/images/hero_cyborg.png`

### Subsystem images
- `public/images/subsystem_brain.png`
- `public/images/subsystem_limbs.png`
- `public/images/subsystem_core.png`
- `public/images/subsystem_head.png`
- `public/images/subsystem_skin.png`

### Gallery preview

<table>
  <tr>
    <td align="center"><img src="./public/images/subsystem_brain.png" alt="Neural subsystem" width="220" /></td>
    <td align="center"><img src="./public/images/subsystem_core.png" alt="Power core subsystem" width="220" /></td>
    <td align="center"><img src="./public/images/subsystem_head.png" alt="Cognitive interface subsystem" width="220" /></td>
  </tr>
  <tr>
    <td align="center"><img src="./public/images/subsystem_limbs.png" alt="Motion subsystem" width="220" /></td>
    <td align="center"><img src="./public/images/subsystem_skin.png" alt="Outer structure subsystem" width="220" /></td>
    <td align="center"><img src="./public/images/hero_cyborg.png" alt="Hero cyborg artwork" width="220" /></td>
  </tr>
</table>

> These are the same image names already used by the page, so the README stays visually consistent with the live UI.

---

## UI/UX details worth highlighting

The page is not just decorative. It has several deliberate interaction patterns:

- **Framer Motion entrances** on major sections
- **Hover scaling** on CTA buttons and imagery
- **Parallax-style background motion**
- **Sticky navigation** for easy section jumping
- **Gradient typography** to create focal points
- **Card depth and layered borders** for hierarchy
- **Scroll-aware reveal behavior** so content appears progressively
- **Hover feedback on subsystem cards** to encourage exploration

These details make the experience feel tactile and premium rather than static.

---

## Tech stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **Wouter**
- **shadcn/ui primitives**
- **Radix UI components**

---

## Project layout

```bash
Cyborg-Themed-Landing-Page/
├── client/
│   ├── index.html
│   ├── public/
│   │   └── images/
│   │       ├── hero_cyborg.png
│   │       ├── subsystem_brain.png
│   │       ├── subsystem_core.png
│   │       ├── subsystem_head.png
│   │       ├── subsystem_limbs.png
│   │       └── subsystem_skin.png
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css
│       ├── pages/
│       │   └── Home.tsx
│       ├── components/
│       │   ├── ErrorBoundary.tsx
│       │   ├── ManusDialog.tsx
│       │   └── Map.tsx
│       ├── contexts/
│       ├── hooks/
│       └── components/ui/
├── public/
│   └── images/
├── shared/
├── .github/workflows/deploy.yml
├── vite.config.ts
├── package.json
└── README.md
```

---

## Running locally

### Install dependencies

```bash
pnpm install
```

### Start the dev server

```bash
pnpm run dev
```

The app runs on:

```bash
http://localhost:3000
```

---

## Production build

```bash
pnpm run build
```

To preview the production build locally:

```bash
pnpm run preview
```

Type-check the project:

```bash
pnpm run check
```

Format the codebase:

```bash
pnpm run format
```

---

## Deployment notes

This project is already configured for GitHub Pages-style static deployment.

Important files:
- `vite.config.ts` sets the base path to `/Cyborg-Themed-Landing-Page/`
- `client/src/App.tsx` uses the matching router base
- `.github/workflows/deploy.yml` builds and publishes on push to `main`

If the repository name changes, update both:
1. `vite.config.ts`
2. `client/src/App.tsx`

---

## How the page loads images

The landing page currently loads its built-in assets from the local image folder in `client/public/images/` using a small helper in `Home.tsx`:

```ts
const asset = (name: string) => new URL(`../../public/images/${name}`, import.meta.url).href;
```

That means the existing artwork stays bundled with the app and does not depend on external URLs.

---

## How to add your own images

### Option 1: Replace an existing image
Replace any of these files with your own artwork while keeping the same filename:

- `public/images/hero_cyborg.png`
- `public/images/subsystem_brain.png`
- `public/images/subsystem_limbs.png`
- `public/images/subsystem_core.png`
- `public/images/subsystem_head.png`
- `public/images/subsystem_skin.png`

This is the easiest option because the page will keep working without code changes.

### Option 2: Add a new image and use it in the page
1. Place the new file in `public/images/`
2. Add a new constant in `client/src/pages/Home.tsx`, for example:

```ts
const NEW_ASSET = asset("your_new_image.png");
```

3. Use it in an `<img>` tag or in your feature data object.

### Option 3: Use screenshots for the README
If you want extra preview images in the README, add them to `public/images/` and reference them with relative paths such as:

```md
<img src="./public/images/your-screenshot.png" alt="Preview" />
```

Recommended README screenshots:
- full desktop hero
- subsystem cards
- mobile layout
- pricing section

---

## Design system notes

The visual language is driven by the global theme in `client/src/index.css`, which defines:

- a deep black background
- cyan/purple/pink accent colors
- custom glassmorphism utilities
- glow effects
- holographic borders
- scan-line styling
- animated utility classes

That stylesheet is the foundation of the whole cybernetic aesthetic.

---

## Notable components in the codebase

A few reusable pieces are already included for future expansion:

- **ErrorBoundary** for graceful runtime failures
- **ManusDialog** for dialog-based interactions
- **MapView** for Google Maps integration
- **ThemeProvider** for dark/light theme management
- **shadcn/ui primitives** for consistent interactive components

Even though the homepage is a single landing experience, the codebase is structured so it can expand into a larger product site later.

---

## Customization ideas

A few easy ways to evolve the page further:

- swap in new cyborg artwork
- add a video background or animated loop
- introduce more micro-interactions on cards
- connect the CTA to a contact form or waitlist
- add a dedicated gallery section
- turn pricing into a tabbed plan selector
- add a live stats counter or scroll-triggered progress effects

---

## License

MIT License.

---

<div align="center">

**Built for a future where design feels engineered.**

</div>
