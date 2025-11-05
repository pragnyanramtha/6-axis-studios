# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? (press enter for default)
   - In which directory is your code located? **.**
   - Want to override settings? **N**

5. Add environment variable:
```bash
vercel env add GEMINI_API_KEY
```
Paste your Gemini API key when prompted.

6. Deploy to production:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub

2. Go to https://vercel.com/new

3. Import your repository

4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. Add Environment Variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key

6. Click **Deploy**

## Environment Variables

Required:
- `GEMINI_API_KEY` - Your Google Gemini API key

## Verifying Deployment

After deployment, test your API:

```bash
curl -X POST https://your-app.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, what are your pricing plans?"}'
```

## Troubleshooting

**API not working?**
- Check that `GEMINI_API_KEY` is set in Vercel environment variables
- Redeploy after adding environment variables

**Build failing?**
- Make sure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

**Knowledge base not loading?**
- Ensure `knowledge/` folder is committed to git
- Check that files are `.txt` format
