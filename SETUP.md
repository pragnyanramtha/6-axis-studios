# Complete Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Google account (for Gemini API)
- Vercel account (for deployment)

## Step-by-Step Setup

### 1. Get Your Gemini API Key

1. Visit https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Install Dependencies

```bash
npm install
```

This installs:
- React and UI components
- Gemini AI SDK
- Vite build tool
- All other dependencies

### 3. Configure Environment

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:
```
GEMINI_API_KEY=AIzaSy...your_actual_key_here
```

**Important:** Never commit `.env` to git. It's already in `.gitignore`.

### 4. Customize Your Chatbot

Edit files in the `knowledge/` folder to customize your bot:

**knowledge/system-prompt.txt** - The AI's personality:
```
You are a friendly customer support assistant for [Your Company].
Your role is to help customers with...
```

**knowledge/pricing.txt** - Your pricing info:
```
PRICING INFORMATION

Basic Plan: $X/month
- Feature 1
- Feature 2
```

**knowledge/location.txt** - Your contact info:
```
LOCATION & CONTACT

Address: Your address here
Phone: Your phone
Email: Your email
```

Add more `.txt` files as needed - they'll all be loaded automatically!

### 5. Test Locally

Start the development server:
```bash
npm run dev
```

Open http://localhost:5173 and test the chat!

### 6. Deploy to Vercel

**Quick deploy:**
```bash
npm install -g vercel
vercel login
vercel
```

**Add your API key to Vercel:**
```bash
vercel env add GEMINI_API_KEY
```

**Deploy to production:**
```bash
vercel --prod
```

Done! Your chatbot is live 🎉

## Customization Tips

### Adding New Knowledge

Just create a new `.txt` file in `knowledge/`:

```bash
echo "SHIPPING POLICY\n\nWe ship worldwide..." > knowledge/shipping.txt
```

The AI will automatically use this information!

### Changing AI Behavior

Edit `knowledge/system-prompt.txt` to change:
- Tone (formal, casual, friendly)
- Response length
- Specific instructions
- What to do when unsure

### Testing the API Directly

Use the test script:
```bash
node test-api.js
```

Or use curl:
```bash
curl -X POST http://localhost:5173/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

## Troubleshooting

**"API key not valid" error:**
- Check your `.env` file has the correct key
- Make sure there are no extra spaces
- Restart the dev server after changing `.env`

**Chat not responding:**
- Check browser console for errors
- Verify the API endpoint is accessible
- Check that Gemini API key has proper permissions

**Deployment issues:**
- Ensure environment variables are set in Vercel
- Check build logs in Vercel dashboard
- Verify `vercel.json` is committed to git

## Next Steps

- Customize the UI in `src/components/`
- Add more knowledge files
- Set up analytics
- Add user authentication
- Implement chat history storage

Need help? Check the main README.md or DEPLOYMENT.md
