
# Customer Support Chat App with Gemini AI

A full-stack customer support chatbot powered by Google's Gemini AI with a programmable knowledge base.

## Features

- 🤖 AI-powered responses using Gemini API
- 📚 Programmable knowledge base (pricing, location, FAQs, etc.)
- 💬 Real-time chat interface
- 🎨 Modern UI with React and Tailwind CSS
- 🚀 One-command deployment to Vercel

## Project Structure

```
├── api/
│   └── chat.js              # Serverless API endpoint for chat
├── knowledge/               # Knowledge base files (loaded into AI)
│   ├── system-prompt.txt    # AI personality and behavior
│   ├── pricing.txt          # Pricing information
│   ├── location.txt         # Location and contact info
│   └── faq.txt              # Frequently asked questions
├── src/
│   └── components/          # React components
└── vercel.json              # Vercel deployment config
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get your Gemini API key:**
   - Go to https://makersuite.google.com/app/apikey
   - Create a new API key
   - Copy the key

3. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```
   
4. **Add your API key to `.env`:**
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

## Local Development

The app runs two servers:
- **API Server**: http://localhost:3001 (backend)
- **Frontend**: http://localhost:3000 (Vite dev server)

**Start both servers:**
```bash
npm run dev
```

Or start them separately:
```bash
# Terminal 1 - API Server
npm run dev:api

# Terminal 2 - Frontend
npm run dev:frontend
```

Visit http://localhost:3000

## Customizing the Knowledge Base

Add or edit files in the `knowledge/` folder:

- **system-prompt.txt** - Define the AI's personality and role
- **pricing.txt** - Add your pricing information
- **location.txt** - Add your location and contact details
- **faq.txt** - Add frequently asked questions

You can add any `.txt` file to the knowledge folder, and it will be automatically loaded into the AI's context.

## Deploy to Vercel (One Command)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variable:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key
   - Redeploy: `vercel --prod`

That's it! Your chatbot is live.

## API Endpoint

**POST /api/chat**

Request:
```json
{
  "message": "What are your pricing plans?",
  "history": [
    { "type": "user", "content": "Hello" },
    { "type": "ai", "content": "Hi! How can I help?" }
  ]
}
```

Response:
```json
{
  "response": "We offer three pricing plans...",
  "timestamp": "2025-11-05T12:00:00.000Z"
}
```
  