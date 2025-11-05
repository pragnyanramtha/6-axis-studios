# System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         USER                                 │
│                    (Web Browser)                             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP Request
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   FRONTEND (React)                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  ChatInterface.tsx                                    │  │
│  │  - Manages conversation state                         │  │
│  │  - Displays messages                                  │  │
│  │  - Handles user input                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ POST /api/chat
                         │ { message, history }
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              API ENDPOINT (Serverless)                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  api/chat.js                                          │  │
│  │                                                        │  │
│  │  1. Load knowledge base (on cold start)              │  │
│  │     - system-prompt.txt                               │  │
│  │     - pricing.txt                                     │  │
│  │     - location.txt                                    │  │
│  │     - faq.txt                                         │  │
│  │     - services.txt                                    │  │
│  │     - [any other .txt files]                          │  │
│  │                                                        │  │
│  │  2. Build context with knowledge                      │  │
│  │  3. Send to Gemini AI                                 │  │
│  │  4. Return response                                   │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ API Call
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   GEMINI AI (Google)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  - Processes message with context                     │  │
│  │  - Uses knowledge base for accurate answers           │  │
│  │  - Generates human-like response                      │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ AI Response
                         ▼
                    (Back to API)
                         │
                         │ JSON Response
                         ▼
                   (Back to Frontend)
                         │
                         │ Display to User
                         ▼
                       USER
```

## Data Flow

### 1. Initialization (Cold Start)

```
Server Starts
    ↓
Load knowledge/system-prompt.txt
    ↓
Load all knowledge/*.txt files
    ↓
Combine into systemContext
    ↓
Ready to handle requests
```

### 2. User Message Flow

```
User types message
    ↓
Frontend: Add to messages array
    ↓
Frontend: Call /api/chat
    ↓
API: Receive message + history
    ↓
API: Initialize Gemini with context
    ↓
API: Build chat history
    ↓
API: Send message to Gemini
    ↓
Gemini: Process with knowledge base
    ↓
Gemini: Generate response
    ↓
API: Receive response
    ↓
API: Return JSON to frontend
    ↓
Frontend: Display AI message
    ↓
User sees response
```

## Component Breakdown

### Frontend Components

```
App.tsx
  └── ChatInterface.tsx
        ├── MessageBubble.tsx (for each message)
        ├── LoadingIndicator.tsx (when waiting)
        └── MessageInput.tsx (user input)
```

### API Structure

```
api/chat.js
  ├── loadKnowledgeBase()
  │     └── Reads all .txt files from knowledge/
  │
  └── handler()
        ├── CORS headers
        ├── Validate request
        ├── Initialize Gemini
        ├── Build chat history
        ├── Send to AI
        └── Return response
```

### Knowledge Base Structure

```
knowledge/
  ├── system-prompt.txt    → AI personality & instructions
  ├── pricing.txt          → Pricing information
  ├── location.txt         → Contact & location
  ├── faq.txt              → Common questions
  ├── services.txt         → Services offered
  └── [custom].txt         → Any additional info
```

## Request/Response Format

### Frontend → API

```javascript
POST /api/chat
Content-Type: application/json

{
  "message": "What are your pricing plans?",
  "history": [
    {
      "type": "user",
      "content": "Hello"
    },
    {
      "type": "ai",
      "content": "Hi! How can I help you today?"
    }
  ]
}
```

### API → Frontend

```javascript
200 OK
Content-Type: application/json

{
  "response": "We offer three pricing plans: Basic ($29/month), Professional ($79/month), and Enterprise (custom pricing). Each plan includes...",
  "timestamp": "2025-11-05T12:34:56.789Z"
}
```

### API → Gemini

```javascript
{
  history: [
    {
      role: "user",
      parts: [{ text: "System Context: [full knowledge base]" }]
    },
    {
      role: "model",
      parts: [{ text: "I understand..." }]
    },
    {
      role: "user",
      parts: [{ text: "Hello" }]
    },
    {
      role: "model",
      parts: [{ text: "Hi! How can I help?" }]
    }
  ],
  message: "What are your pricing plans?"
}
```

## Deployment Architecture (Vercel)

```
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL EDGE NETWORK                     │
│                                                               │
│  ┌────────────────────┐      ┌──────────────────────────┐  │
│  │   Static Assets    │      │  Serverless Functions    │  │
│  │   (Frontend)       │      │  (API)                   │  │
│  │                    │      │                          │  │
│  │  - HTML            │      │  - api/chat.js           │  │
│  │  - CSS             │      │  - Node.js runtime       │  │
│  │  - JavaScript      │      │  - Auto-scaling          │  │
│  │  - Images          │      │  - Cold start < 1s       │  │
│  └────────────────────┘      └──────────────────────────┘  │
│                                                               │
│  Environment Variables:                                      │
│  - GEMINI_API_KEY                                            │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Scaling Characteristics

- **Frontend**: Served from CDN, instant global delivery
- **API**: Auto-scales based on traffic
- **Cold Start**: ~500ms-1s for first request
- **Warm Requests**: ~100-300ms API response time
- **AI Processing**: ~1-3s for Gemini response
- **Total Response Time**: ~2-5s end-to-end

## Security

```
User Request
    ↓
HTTPS (TLS 1.3)
    ↓
Vercel Edge
    ↓
CORS Validation
    ↓
API Function
    ↓
Gemini API (HTTPS)
    ↓
Response
```

- API key stored in environment variables (not in code)
- CORS enabled for frontend domain
- HTTPS enforced
- No sensitive data stored client-side
- Rate limiting via Vercel (optional)

## Performance Optimization

1. **Knowledge Base Loading**: Cached after cold start
2. **Frontend**: Vite optimized bundle
3. **API**: Serverless, auto-scaling
4. **AI**: Gemini Pro model (fast responses)
5. **CDN**: Static assets cached globally

## Monitoring Points

- Frontend errors (browser console)
- API response times
- Gemini API usage/quota
- Error rates
- User message patterns
- Response quality

## Future Enhancements

```
Current Architecture
    ↓
Add Database (Vercel KV/PostgreSQL)
    ↓
Store conversation history
    ↓
Add Analytics (Vercel Analytics)
    ↓
Track usage patterns
    ↓
Add Authentication (NextAuth)
    ↓
User accounts & personalization
```
