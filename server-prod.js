import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Load knowledge base
let systemContext = '';

function loadKnowledgeBase() {
  try {
    const promptPath = path.join(__dirname, 'knowledge', 'system-prompt.txt');
    const systemPrompt = fs.existsSync(promptPath)
      ? fs.readFileSync(promptPath, 'utf-8')
      : 'You are a helpful customer support assistant.';

    const knowledgePath = path.join(__dirname, 'knowledge');
    let knowledgeContent = '';

    if (fs.existsSync(knowledgePath)) {
      const files = fs.readdirSync(knowledgePath);
      files.forEach((file) => {
        if (file.endsWith('.txt') && file !== 'system-prompt.txt') {
          const content = fs.readFileSync(path.join(knowledgePath, file), 'utf-8');
          knowledgeContent += `\n\n--- ${file.replace('.txt', '').toUpperCase()} ---\n${content}`;
        }
      });
    }

    systemContext = `${systemPrompt}\n\n${knowledgeContent}`;
    console.log('✅ Knowledge base loaded successfully');
  } catch (error) {
    console.error('❌ Error loading knowledge base:', error);
    systemContext = 'You are a helpful customer support assistant.';
  }
}

loadKnowledgeBase();

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY not configured. Please add it to your .env file.',
      });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const chatHistory = history.map((msg) => ({
      role: msg.type === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'System Context: ' + systemContext }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I will use this information to assist customers.' }],
        },
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return res.status(200).json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({
      error: 'Failed to process message',
      details: error.message,
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

// Serve static files from build directory
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Serve index.html for all other routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 Production Server running on http://localhost:${PORT}`);
  console.log(`📡 Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`🌐 Frontend: http://localhost:${PORT}\n`);
});
