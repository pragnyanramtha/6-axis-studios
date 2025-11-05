#!/bin/bash

echo "🚀 6 Axis Studios Chatbot - Quick Start"
echo "========================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env and add your GEMINI_API_KEY"
    echo ""
fi

# Check if node_modules exists
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env and add your Gemini API key"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:5173"
echo ""
echo "To deploy: vercel"
echo ""
