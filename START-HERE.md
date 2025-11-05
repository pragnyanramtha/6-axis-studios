# ⚡ Quick Fix Applied - Start Here

## What Was Fixed

The frontend and backend are now properly connected! 

**The issue:** Vite doesn't handle `/api` routes in development.

**The solution:** Created a separate Express server for local development.

## ✅ SERVERS ARE RUNNING!

- ✅ **API Server**: http://localhost:3333
- ✅ **Frontend**: http://localhost:3002

## How to Run Now

### Option 1: Run Both Servers Together (Recommended)

```bash
npm run dev
```

This starts:
- ✅ API Server on http://localhost:3333
- ✅ Frontend on http://localhost:3002 (or next available port)

### Option 2: Run Separately (If Option 1 doesn't work)

**Terminal 1 - Start API Server:**
```bash
npm run dev:api
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev:frontend
```

## Test It

1. Open http://localhost:3000
2. Type: "What are your pricing plans?"
3. You should get a real AI response! 🎉

## How It Works Now

### Development (Local)
```
Frontend (localhost:3000)
    ↓
API Server (localhost:3001/api/chat)
    ↓
Gemini AI
```

### Production (Vercel)
```
Frontend
    ↓
Serverless Function (/api/chat)
    ↓
Gemini AI
```

## Files Changed

1. **server.js** - New Express server for local development
2. **package.json** - Added express, dotenv, updated scripts
3. **src/components/ChatInterface.tsx** - Uses different URL for dev/prod
4. **dev.sh** - Script to run both servers

## Troubleshooting

**Port 3000 or 3001 already in use?**
```bash
# Kill processes on those ports
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

**API key error?**
Check your `.env` file:
```bash
cat .env
```
Should show: `GEMINI_API_KEY=AIza...`

**Still getting 404?**
Make sure both servers are running:
```bash
# Check if API server is running
curl http://localhost:3001/api/health

# Should return: {"status":"ok","message":"API server is running"}
```

## Next Steps

1. ✅ Test the chatbot locally
2. ✅ Customize knowledge base files
3. ✅ Deploy to Vercel: `vercel`

## Deploy to Production

When you deploy to Vercel, it automatically uses the serverless function in `api/chat.js` - no changes needed!

```bash
vercel
vercel env add GEMINI_API_KEY
vercel --prod
```

Done! 🚀
