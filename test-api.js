// Simple test script for the chat API
// Run with: node test-api.js

const API_URL = process.env.API_URL || 'http://localhost:5173/api/chat';

async function testChat(message) {
  console.log(`\n🧪 Testing: "${message}"\n`);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: []
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Response:', data.response);
    console.log('⏰ Timestamp:', data.timestamp);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API tests...');
  console.log('📍 API URL:', API_URL);
  
  await testChat('What are your pricing plans?');
  await testChat('Where are you located?');
  await testChat('What services do you offer?');
  await testChat('How can I contact support?');
  
  console.log('\n✨ Tests completed!\n');
}

runTests();
