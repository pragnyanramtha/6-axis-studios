# 🚀 Get Started in 5 Minutes

## Step 1: Get Your Gemini API Key (2 minutes)

1. Go to https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key (starts with `AIza...`)

## Step 2: Install & Configure (1 minute)

```bash
# Install dependencies
npm install

# Create .env file and add your API key
echo "GEMINI_API_KEY=paste_your_key_here" > .env
```

## Step 3: Test Locally (1 minute)

```bash
# Start the development server
npm run dev
```

Open http://localhost:5173 and try these test messages:
- "What are your pricing plans?"
- "Where are you located?"
- "What services do you offer?"

## Step 4: Customize (1 minute)

Edit these files with your actual information:

```bash
# Your company info
nano knowledge/system-prompt.txt

# Your pricing
nano knowledge/pricing.txt

# Your contact details
nano knowledge/location.txt
```

## Step 5: Deploy to Vercel (30 seconds)

```bash
# Install Vercel CLI (one time only)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy!
vercel

# Add your API key to production
vercel env add GEMINI_API_KEY
# (paste your key when prompted)

# Deploy to production
vercel --prod
```

Done! Your chatbot is live! 🎉

## What You Get

✅ AI-powered customer support chatbot
✅ Fully customizable knowledge base
✅ Production-ready deployment
✅ Auto-scaling infrastructure
✅ Comprehensive documentation

## Next Steps

### Customize Your Chatbot

1. **Update company information:**
   - Edit `knowledge/system-prompt.txt` - Change AI personality
   - Edit `knowledge/pricing.txt` - Add your pricing
   - Edit `knowledge/location.txt` - Add your contact info
   - Edit `knowledge/faq.txt` - Add your FAQs

2. **Add more knowledge:**
   ```bash
   echo "Your shipping policy..." > knowledge/shipping.txt
   echo "Your return policy..." > knowledge/returns.txt
   ```

3. **Customize the UI:**
   - Edit `src/components/ChatInterface.tsx`
   - Change colors, fonts, layout

### Test Your Chatbot

```bash
# Run automated tests
node test-api.js

# Or test manually
curl -X POST http://localhost:5173/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

### Monitor & Improve

1. Test with real questions
2. Check responses for accuracy
3. Add missing information to knowledge base
4. Refine system prompt for better tone
5. Monitor Gemini API usage

## Common Customizations

### Change AI Tone

Edit `knowledge/system-prompt.txt`:

**Formal:**
```
You are a professional customer service representative for [Company].
Maintain a formal, business-appropriate tone at all times.
```

**Casual:**
```
You are a friendly helper for [Company].
Be warm, conversational, and use a casual tone.
```

**Technical:**
```
You are a technical support specialist for [Company].
Provide detailed, technical explanations when needed.
```

### Add New Information

Just create a new `.txt` file:

```bash
# Add shipping information
cat > knowledge/shipping.txt << EOF
SHIPPING INFORMATION

We offer free shipping on orders over $50.
Standard shipping: 5-7 business days
Express shipping: 2-3 business days
International shipping: 10-15 business days
EOF
```

The AI will automatically use this information!

### Change Response Style

Edit `api/chat.js` and modify:

```javascript
generationConfig: {
  maxOutputTokens: 1000,  // Longer/shorter responses
  temperature: 0.7,       // 0.0 = focused, 1.0 = creative
}
```

## Troubleshooting

**"API key not valid"**
- Check your `.env` file
- Make sure key starts with `AIza`
- No extra spaces or quotes

**Chat not responding**
- Check browser console (F12)
- Verify API endpoint is running
- Check Gemini API quota

**Build errors**
- Run `npm install` again
- Delete `node_modules` and reinstall
- Check Node.js version (need 18+)

## Documentation

- 📖 **README.md** - Main documentation
- 🔧 **SETUP.md** - Detailed setup guide
- 🚀 **DEPLOYMENT.md** - Deployment instructions
- ⚡ **QUICK-REFERENCE.md** - Quick commands
- 🧪 **TEST-SCENARIOS.md** - Testing guide
- 🏗️ **ARCHITECTURE.md** - System architecture
- 📋 **WHAT-WAS-BUILT.md** - Complete summary

## Support

Need help? Check:
1. QUICK-REFERENCE.md for common commands
2. TEST-SCENARIOS.md for testing examples
3. DEPLOYMENT-CHECKLIST.md for deployment steps
4. ARCHITECTURE.md to understand how it works

## You're All Set! 🎊

Your AI customer support chatbot is ready to use. Start customizing it with your business information and deploy to production!

**Quick Deploy:**
```bash
vercel
```

**That's it!** Your chatbot is live and ready to help your customers.
