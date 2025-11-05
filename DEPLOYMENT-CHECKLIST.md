# Deployment Checklist

Use this checklist to ensure smooth deployment of your chatbot.

## Pre-Deployment

- [ ] Get Gemini API key from https://makersuite.google.com/app/apikey
- [ ] Add API key to `.env` file locally
- [ ] Test locally with `npm run dev`
- [ ] Customize `knowledge/system-prompt.txt` with your company info
- [ ] Update `knowledge/pricing.txt` with your actual pricing
- [ ] Update `knowledge/location.txt` with your contact details
- [ ] Update `knowledge/faq.txt` with your FAQs
- [ ] Test the chatbot with various questions
- [ ] Verify responses are accurate and helpful
- [ ] Check that all knowledge files are being used
- [ ] Test error handling (try with invalid API key)
- [ ] Commit all changes to git

## Vercel Deployment

- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Login to Vercel: `vercel login`
- [ ] Run deployment: `vercel`
- [ ] Add environment variable: `vercel env add GEMINI_API_KEY`
- [ ] Deploy to production: `vercel --prod`
- [ ] Test the production URL
- [ ] Verify API endpoint works: `https://your-app.vercel.app/api/chat`

## Post-Deployment Testing

- [ ] Open the deployed app in browser
- [ ] Send a test message
- [ ] Verify AI responds correctly
- [ ] Test with questions about pricing
- [ ] Test with questions about location
- [ ] Test with questions about services
- [ ] Test with questions about FAQs
- [ ] Check response time (should be < 5 seconds)
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Check browser console for errors

## Optional Enhancements

- [ ] Set up custom domain in Vercel
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Set up monitoring/alerts
- [ ] Add rate limiting
- [ ] Implement chat history storage
- [ ] Add user authentication
- [ ] Set up CI/CD pipeline
- [ ] Add automated tests
- [ ] Configure caching
- [ ] Optimize bundle size

## Maintenance

- [ ] Monitor API usage and costs
- [ ] Review chat logs for improvements
- [ ] Update knowledge base regularly
- [ ] Test after each update
- [ ] Keep dependencies updated
- [ ] Monitor error rates
- [ ] Collect user feedback

## Troubleshooting

If something doesn't work:

1. Check Vercel deployment logs
2. Verify environment variables are set
3. Test API endpoint directly with curl
4. Check browser console for errors
5. Verify Gemini API key is valid
6. Check API quota/limits
7. Review knowledge base files

## Quick Test Commands

Test API locally:
```bash
curl -X POST http://localhost:5173/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are your prices?"}'
```

Test API in production:
```bash
curl -X POST https://your-app.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are your prices?"}'
```

## Success Criteria

✅ App loads without errors
✅ Chat interface is responsive
✅ AI responds within 5 seconds
✅ Responses are relevant and accurate
✅ Knowledge base information is used correctly
✅ Error handling works properly
✅ Mobile experience is good
✅ No console errors

## Done!

Once all items are checked, your chatbot is ready for users! 🎉
