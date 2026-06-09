#!/bin/bash

# Cybernetic Evolution - GitHub Setup Script
# This script helps you set up the project for GitHub deployment

echo "🚀 Cybernetic Evolution - GitHub Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm version: $(pnpm -v)"
echo ""

# Install dependencies
echo "📥 Installing dependencies..."
pnpm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Run 'pnpm run dev' to start the development server"
echo "   2. Visit http://localhost:3000 to see your site"
echo "   3. Read GITHUB_DEPLOYMENT.md for deployment instructions"
echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "   1. Push this repository to GitHub"
echo "   2. Go to Settings → Pages"
echo "   3. Select 'Deploy from a branch' with gh-pages branch"
echo "   4. GitHub Actions will automatically build and deploy"
echo ""
