# 🚀 Deploy to Vercel - Single Command

## One-Time Setup (First Deploy)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy!
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → Press Enter (or type a name)
- **Directory?** → Press Enter (current directory)
- **Override settings?** → No

### 4. Add Your API Key
```bash
vercel env add GEMINI_API_KEY production
```
Paste your API key when prompted: `AIzaSyBPQmISa5m0Yt3vUvbGH2zZibsaKFF9m-g`

### 5. Deploy to Production
```bash
vercel --prod
```

**Done!** 🎉 Your chatbot is live!

---

## Future Deploys (After First Time)

Just run:
```bash
npm run deploy
```

Or:
```bash
vercel --prod
```

That's it! Single command deployment.

---

## What Happens During Deploy

1. ✅ Vercel builds your frontend (Vite)
2. ✅ Deploys static files to CDN
3. ✅ Creates serverless function from `api/chat.js`
4. ✅ Loads your knowledge base automatically
5. ✅ Your chatbot is live globally!

---

## Verify Deployment

After deployment, Vercel will give you a URL like:
```
https://your-app-name.vercel.app
```

Test it:
1. Open the URL in your browser
2. Send a message: "What are your pricing plans?"
3. Should get AI response! ✅

---

## Update Your Chatbot

1. Edit knowledge files (e.g., `knowledge/pricing.txt`)
2. Run: `vercel --prod`
3. Done! Changes are live in ~30 seconds

---

## Troubleshooting

**Build fails?**
- Check that `npm run build` works locally
- Make sure all files are committed to git

**API not working?**
- Verify environment variable: `vercel env ls`
- Check logs: `vercel logs`

**404 on /api/chat?**
- Make sure `api/chat.js` is committed
- Check `vercel.json` is in the repo

---

## Environment Variables

View all env vars:
```bash
vercel env ls
```

Add new env var:
```bash
vercel env add VARIABLE_NAME production
```

Remove env var:
```bash
vercel env rm VARIABLE_NAME production
```

---

## Quick Commands

| Command | Description |
|---------|-------------|
| `vercel` | Deploy preview |
| `vercel --prod` | Deploy to production |
| `vercel logs` | View logs |
| `vercel env ls` | List environment variables |
| `vercel domains` | Manage custom domains |
| `vercel --help` | Show all commands |

---

## Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your domain
5. Update DNS records as shown

---

## Cost

- **Vercel Hobby Plan**: FREE
  - Unlimited deployments
  - Automatic HTTPS
  - Global CDN
  - Serverless functions

- **Gemini API**: FREE tier
  - 60 requests per minute
  - 1,500 requests per day

Perfect for small to medium traffic! 🎉
