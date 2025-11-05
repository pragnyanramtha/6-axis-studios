# Quick Reference Card

## Essential Commands

### Development
```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
```

### Deployment
```bash
vercel                  # Deploy to Vercel
vercel --prod          # Deploy to production
vercel env add         # Add environment variable
```

### Testing
```bash
node test-api.js       # Test the API
```

## Important Files

| File | Purpose |
|------|---------|
| `api/chat.js` | Main API endpoint |
| `knowledge/system-prompt.txt` | AI personality |
| `knowledge/*.txt` | Knowledge base files |
| `.env` | Local environment variables |
| `vercel.json` | Deployment config |

## API Endpoint

**URL:** `/api/chat`

**Method:** POST

**Body:**
```json
{
  "message": "Your question here",
  "history": []
}
```

**Response:**
```json
{
  "response": "AI response here",
  "timestamp": "2025-11-05T12:00:00.000Z"
}
```

## Environment Variables

| Variable | Where to Get It |
|----------|----------------|
| `GEMINI_API_KEY` | https://makersuite.google.com/app/apikey |

## Customization

### Change AI Behavior
Edit: `knowledge/system-prompt.txt`

### Add Business Info
Create: `knowledge/your-file.txt`

### Modify UI
Edit: `src/components/ChatInterface.tsx`

## Common Issues

| Problem | Solution |
|---------|----------|
| API not responding | Check `.env` has valid `GEMINI_API_KEY` |
| Build failing | Run `npm install` again |
| 404 on API | Check `vercel.json` is committed |
| Slow responses | Check Gemini API quota |

## File Structure

```
├── api/chat.js              ← API endpoint
├── knowledge/               ← Add .txt files here
│   ├── system-prompt.txt    ← AI personality
│   ├── pricing.txt          ← Your pricing
│   ├── location.txt         ← Your location
│   └── *.txt                ← Any other info
├── src/components/          ← UI components
└── .env                     ← API key (local only)
```

## URLs

- **Local:** http://localhost:5173
- **Production:** https://your-app.vercel.app
- **API:** https://your-app.vercel.app/api/chat
- **Get API Key:** https://makersuite.google.com/app/apikey

## Quick Deploy Steps

1. `npm install`
2. Add API key to `.env`
3. Test: `npm run dev`
4. Deploy: `vercel`
5. Add env: `vercel env add GEMINI_API_KEY`
6. Production: `vercel --prod`

Done! 🚀

## Need Help?

- 📖 Full docs: `README.md`
- 🔧 Setup guide: `SETUP.md`
- 🚀 Deploy guide: `DEPLOYMENT.md`
- ✅ Checklist: `DEPLOYMENT-CHECKLIST.md`
- 📋 Overview: `PROJECT-OVERVIEW.md`
