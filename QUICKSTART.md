# Quick Start Guide

## 🎯 Get Started in 3 Minutes

### 1️⃣ Install Dependencies

```bash
# Option A: Using the setup script (recommended)
bash SETUP.sh

# Option B: Manual installation
pnpm install
```

### 2️⃣ Run Locally

```bash
pnpm run dev
```

Open your browser to `http://localhost:3000` and you'll see the Cybernetic Evolution landing page.

### 3️⃣ Deploy to GitHub Pages

#### Step 1: Create a GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit: Cybernetic Evolution landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cybernetic-evolution.git
git push -u origin main
```

#### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

#### Step 3: Done! 🎉
GitHub Actions will automatically build and deploy your site. Your site will be live at:
```
https://YOUR_USERNAME.github.io/cybernetic-evolution/
```

---

## 📚 Available Commands

```bash
# Start development server
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

---

## 📁 Project Structure

```
cybernetic-evolution/
├── client/
│   ├── public/images/          # All 6 cyborg images (25MB)
│   └── src/
│       ├── pages/Home.tsx       # Main landing page
│       ├── App.tsx              # Routes
│       └── index.css            # Cyberpunk theme
├── .github/workflows/
│   └── deploy.yml               # Auto-deploy on push
├── vite.config.ts               # Build config
└── package.json                 # Dependencies
```

---

## 🎨 Customization

### Change Site Title
Edit `client/index.html`:
```html
<title>Your Custom Title</title>
```

### Modify Colors
Edit `client/src/index.css`:
```css
:root {
  --primary: #00d9ff;        /* Cyan */
  --secondary: #b000ff;      /* Purple */
  --accent: #ff006e;         /* Pink */
}
```

### Update Content
Edit `client/src/pages/Home.tsx` to change text, images, and layout.

---

## ⚠️ Important Notes

- **All images are included locally** (~25MB) - no external dependencies
- **Pure frontend** - no backend server needed
- **GitHub Pages compatible** - works with free GitHub Pages hosting
- **Fully responsive** - works on mobile, tablet, and desktop

---

## 🆘 Troubleshooting

**Q: Images not showing?**
- Ensure `public/images/` directory has all 6 PNG files
- Check browser console for 404 errors

**Q: Build fails?**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

**Q: GitHub Pages not updating?**
- Check GitHub Actions tab for build errors
- Verify `gh-pages` branch exists
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📖 More Information

- **Full Deployment Guide**: See `GITHUB_DEPLOYMENT.md`
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/

---

**Ready to deploy? Let's go! 🚀**
