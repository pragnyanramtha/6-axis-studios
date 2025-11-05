#!/bin/bash

echo "🚀 Deploying to Vercel..."
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel..."
    vercel login
fi

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. If this is your first deploy, add your API key:"
echo "   vercel env add GEMINI_API_KEY production"
echo ""
echo "2. Then redeploy:"
echo "   vercel --prod"
echo ""
