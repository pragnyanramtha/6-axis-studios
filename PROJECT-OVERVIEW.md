# Project Overview: AI Customer Support Chatbot

## What This Is

A complete full-stack customer support chatbot application that uses Google's Gemini AI to provide intelligent, context-aware responses based on your business information.

## Architecture

```
Frontend (React + Vite)
    ↓
API Endpoint (/api/chat)
    ↓
Gemini AI (with loaded knowledge base)
    ↓
Response to user
```

## Key Components

### Frontend (`src/`)
- **ChatInterface.tsx** - Main chat UI component
- **MessageBubble.tsx** - Individual message display
- **MessageInput.tsx** - User input field
- **LoadingIndicator.tsx** - Loading animation

### Backend (`api/`)
- **chat.js** - Serverless function that:
  - Loads knowledge base on startup
  - Processes chat requests
  - Communicates with Gemini AI
  - Returns AI responses

### Knowledge Base (`knowledge/`)
- **system-prompt.txt** - Defines AI personality and behavior
- **pricing.txt** - Pricing information
- **location.txt** - Contact and location details
- **faq.txt** - Frequently asked questions
- **services.txt** - Services offered
- **[any-file].txt** - Add any text file, it's auto-loaded!

## How It Works

1. **Startup**: When the API starts, it reads all `.txt` files from `knowledge/` folder
2. **Context Building**: Combines system prompt + all knowledge files into one context
3. **User Message**: User sends a message through the chat interface
4. **API Call**: Frontend calls `/api/chat` with message and conversation history
5. **AI Processing**: Gemini AI processes the message with full context
6. **Response**: AI generates a response based on the knowledge base
7. **Display**: Response is shown in the chat interface

## Customization Points

### Change AI Personality
Edit `knowledge/system-prompt.txt`

### Add Business Information
Create new `.txt` files in `knowledge/` folder

### Modify UI
Edit components in `src/components/`

### Adjust AI Parameters
Edit `api/chat.js` - change temperature, max tokens, etc.

## Deployment

### Local Development
```bash
npm install
npm run dev
```

### Production (Vercel)
```bash
vercel
```

That's it! One command deployment.

## Environment Variables

- `GEMINI_API_KEY` - Required for AI functionality

## File Structure

```
.
├── api/
│   └── chat.js                 # API endpoint
├── knowledge/                  # Knowledge base (auto-loaded)
│   ├── system-prompt.txt
│   ├── pricing.txt
│   ├── location.txt
│   ├── faq.txt
│   └── services.txt
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx   # Main chat component
│   │   ├── MessageBubble.tsx
│   │   ├── MessageInput.tsx
│   │   └── LoadingIndicator.tsx
│   └── main.tsx
├── .env                        # Environment variables (local)
├── .env.example                # Template for .env
├── vercel.json                 # Vercel configuration
├── package.json                # Dependencies
├── README.md                   # Main documentation
├── SETUP.md                    # Setup instructions
├── DEPLOYMENT.md               # Deployment guide
└── PROJECT-OVERVIEW.md         # This file

```

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Serverless Functions
- **AI**: Google Gemini API
- **Deployment**: Vercel
- **UI Components**: Radix UI

## Features

✅ Real-time chat interface
✅ AI-powered responses
✅ Programmable knowledge base
✅ Conversation history
✅ Error handling
✅ Loading states
✅ Responsive design
✅ One-command deployment
✅ Easy customization

## Extending the Project

### Add Database for Chat History
Integrate Vercel KV or PostgreSQL to store conversations

### Add User Authentication
Use NextAuth or Clerk for user management

### Add Analytics
Track conversations, popular questions, user satisfaction

### Multi-language Support
Add translation files and language detection

### Voice Input
Integrate Web Speech API for voice messages

### File Uploads
Allow users to upload documents for context

## Cost Considerations

- **Gemini API**: Free tier available, pay-as-you-go after
- **Vercel Hosting**: Free tier for hobby projects
- **Total**: Can run completely free for small-medium traffic

## Support

- Check README.md for general info
- Check SETUP.md for setup instructions
- Check DEPLOYMENT.md for deployment help
- Test API with: `node test-api.js`

## License

This is your project - customize and use as needed!
