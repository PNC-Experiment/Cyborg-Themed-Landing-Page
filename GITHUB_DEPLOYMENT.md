# Cybernetic Evolution - GitHub Pages Deployment Guide

This is a fully independent, frontend-only React website that can be deployed to GitHub Pages or any static hosting service.

## 📋 Prerequisites

- Node.js 18+ or 22+
- pnpm (package manager)
- Git
- GitHub account

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/cybernetic-evolution.git
cd cybernetic-evolution
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run Locally

```bash
pnpm run dev
```

The site will be available at `http://localhost:3000`

### 4. Build for Production

```bash
pnpm run build
```

This creates a `dist` folder with the optimized production build.

## 🌐 Deploy to GitHub Pages

### Option A: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys on every push to `main`.

**Setup:**

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to "Deploy from a branch"
4. Select **Branch: `gh-pages`** and **Folder: `/ (root)`**
5. Save

The workflow will automatically:
- Build the project
- Create/update the `gh-pages` branch
- Deploy to your GitHub Pages URL

Your site will be live at: `https://YOUR_USERNAME.github.io/cybernetic-evolution/`

### Option B: Manual Deployment

1. Build the project:
   ```bash
   pnpm run build
   ```

2. Deploy the `dist` folder to GitHub Pages:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 📝 Configuration

### Update Repository Name

If your repository name is different from `cybernetic-evolution`, update the `vite.config.ts`:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   your-domain.com
   ```

2. Configure DNS records to point to GitHub Pages

3. Enable HTTPS in GitHub Pages settings

## 📦 Project Structure

```
cybernetic-evolution/
├── client/
│   ├── public/
│   │   └── images/          # All image assets (6 cyborg images)
│   └── src/
│       ├── pages/
│       │   └── Home.tsx      # Main landing page
│       ├── components/       # Reusable UI components
│       ├── App.tsx           # App routing
│       └── index.css         # Global styles & cyberpunk theme
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── vite.config.ts            # Vite build configuration
├── package.json              # Dependencies
└── README.md                  # Original project README
```

## 🎨 Design & Features

- **Cyberpunk Theme**: Dark mode with cyan, purple, and pink gradients
- **Photorealistic 3D Visuals**: 6 high-quality cyborg images included locally
- **Smooth Animations**: Framer Motion for interactive elements
- **Responsive Design**: Mobile-first, works on all devices
- **No Backend**: Pure frontend React + Tailwind CSS

## 🛠️ Available Scripts

```bash
# Development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build locally
pnpm run preview

# Type checking
pnpm run check

# Format code
pnpm run format
```

## 📊 Performance

- **Build Size**: ~150KB (gzipped)
- **Images**: ~25MB total (all included locally)
- **Load Time**: < 2 seconds on typical connections
- **SEO**: Optimized with proper meta tags

## 🔧 Customization

### Change Colors

Edit `client/src/index.css` to modify the cyberpunk color palette:

```css
:root {
  --primary: #00d9ff;        /* Cyan */
  --secondary: #b000ff;      /* Purple */
  --accent: #ff006e;         /* Pink */
}
```

### Modify Content

Edit `client/src/pages/Home.tsx` to change:
- Headings and descriptions
- Feature cards
- Pricing tiers
- Testimonials
- CTA buttons

### Add New Pages

1. Create a new file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `Home.tsx`

## 🐛 Troubleshooting

### Images not loading

Ensure all images are in `public/images/` directory:
```bash
ls -la public/images/
```

Should show:
- hero_cyborg.png
- subsystem_brain.png
- subsystem_limbs.png
- subsystem_core.png
- subsystem_head.png
- subsystem_skin.png

### Build fails

Clear cache and reinstall:
```bash
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm run build
```

### GitHub Pages not updating

1. Check GitHub Actions workflow status
2. Verify `gh-pages` branch exists
3. Check Pages settings point to correct branch
4. Clear browser cache (Ctrl+Shift+Delete)

## 📄 License

MIT License - Feel free to use this for personal or commercial projects.

## 🤝 Support

For issues or questions:
1. Check GitHub Issues
2. Review this deployment guide
3. Consult Vite documentation: https://vitejs.dev/

---

**Happy deploying! 🚀**
