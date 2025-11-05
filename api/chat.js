import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Load knowledge base and system prompt
let systemContext = '';

function loadKnowledgeBase() {
  try {
    // Load system prompt
    const promptPath = path.join(process.cwd(), 'knowledge', 'system-prompt.txt');
    const systemPrompt = fs.existsSync(promptPath) 
      ? fs.readFileSync(promptPath, 'utf-8') 
      : 'You are a helpful customer support assistant.';

    // Load all knowledge files
    const knowledgePath = path.join(process.cwd(), 'knowledge');
    let knowledgeContent = '';

    if (fs.existsSync(knowledgePath)) {
      const files = fs.readdirSync(knowledgePath);
      files.forEach(file => {
        if (file.endsWith('.txt') && file !== 'system-prompt.txt') {
          const content = fs.readFileSync(path.join(knowledgePath, file), 'utf-8');
          knowledgeContent += `\n\n--- ${file.replace('.txt', '').toUpperCase()} ---\n${content}`;
        }
      });
    }

    systemContext = `${systemPrompt}\n\n${knowledgeContent}`;
  } catch (error) {
    console.error('Error loading knowledge base:', error);
    systemContext = 'You are a helpful customer support assistant.';
  }
}

// Load knowledge base on startup
loadKnowledgeBase();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    // Build conversation history
    const chatHistory = history.map(msg => ({
      role: msg.type === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Start chat with context
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'System Context: ' + systemContext }]
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I will use this information to assist customers.' }]
        },
        ...chatHistory
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return res.status(200).json({ 
      response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process message',
      details: error.message 
    });
  }
}
