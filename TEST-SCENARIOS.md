# Test Scenarios

Use these test scenarios to verify your chatbot is working correctly.

## Basic Functionality Tests

### Test 1: Simple Greeting
**User:** "Hello"
**Expected:** Friendly greeting, offer to help

### Test 2: General Help
**User:** "What can you help me with?"
**Expected:** Overview of services and support capabilities

## Knowledge Base Tests

### Test 3: Pricing Information
**User:** "What are your pricing plans?"
**Expected:** Should mention Basic ($29), Professional ($79), and Enterprise plans

**User:** "How much does the basic plan cost?"
**Expected:** $29/month with features listed

**User:** "Do you offer a free trial?"
**Expected:** Yes, 14-day free trial, no credit card required

### Test 4: Location & Contact
**User:** "Where are you located?"
**Expected:** San Francisco headquarters address

**User:** "What's your phone number?"
**Expected:** +1 (555) 123-4567

**User:** "What are your office hours?"
**Expected:** Monday-Friday 9 AM - 6 PM PST

**User:** "How can I contact support?"
**Expected:** Email, phone, and emergency support options

### Test 5: Services
**User:** "What services do you offer?"
**Expected:** Web development, mobile apps, design, consulting

**User:** "Do you build mobile apps?"
**Expected:** Yes, iOS, Android, and cross-platform

**User:** "Can you help with website design?"
**Expected:** Yes, UI/UX design and web development

### Test 6: FAQs
**User:** "How do I get started?"
**Expected:** Sign up for 14-day trial, no credit card

**User:** "Can I cancel anytime?"
**Expected:** Yes, access continues until end of billing period

**User:** "Is my data secure?"
**Expected:** AES-256 encryption, SOC 2 certified, daily backups

**User:** "Do you offer refunds?"
**Expected:** 30-day money-back guarantee

## Conversation Flow Tests

### Test 7: Multi-Turn Conversation
**User:** "Hi, I'm interested in your services"
**Expected:** Greeting, ask how to help

**User:** "What's the difference between Basic and Professional?"
**Expected:** Compare features (projects, storage, support)

**User:** "Can I upgrade later?"
**Expected:** Yes, can upgrade/downgrade anytime

### Test 8: Complex Questions
**User:** "I need a mobile app for iOS and Android with custom design. What plan should I choose and how much will it cost?"
**Expected:** Recommend Professional or Enterprise, mention mobile app development service

**User:** "If I'm not satisfied, can I get my money back?"
**Expected:** Yes, 30-day money-back guarantee

## Edge Cases

### Test 9: Out of Scope Questions
**User:** "What's the weather today?"
**Expected:** Politely redirect to support topics

**User:** "Tell me a joke"
**Expected:** Stay professional, offer to help with services

### Test 10: Unclear Questions
**User:** "How much?"
**Expected:** Ask for clarification about what pricing they need

**User:** "Where?"
**Expected:** Ask if they mean location, office hours, or something else

### Test 11: Technical Questions
**User:** "What technology stack do you use?"
**Expected:** May not have specific answer, offer to connect with technical team

**User:** "Do you support API integrations?"
**Expected:** Yes, mention custom integrations in Enterprise plan

## Error Handling Tests

### Test 12: Very Long Message
**User:** [Send a very long message with 500+ words]
**Expected:** Should still respond appropriately

### Test 13: Special Characters
**User:** "What's your pricing? $$$"
**Expected:** Should handle special characters gracefully

### Test 14: Multiple Questions
**User:** "What are your prices, where are you located, and do you offer support?"
**Expected:** Should address all three questions

## Response Quality Tests

### Test 15: Accuracy
- Verify all prices are correct
- Verify contact information is accurate
- Verify service descriptions match your offerings

### Test 16: Tone
- Responses should be friendly and professional
- Should match the personality in system-prompt.txt
- Should be helpful and empathetic

### Test 17: Completeness
- Answers should be complete but concise
- Should provide relevant details
- Should offer to help further

## Performance Tests

### Test 18: Response Time
- First message: < 5 seconds (cold start)
- Subsequent messages: < 3 seconds
- Should show loading indicator

### Test 19: Concurrent Users
- Test with multiple browser tabs
- Each should maintain separate conversation

## Mobile Tests

### Test 20: Mobile Interface
- Test on phone browser
- Verify responsive design
- Check input field usability
- Verify scrolling works

## API Tests

### Test 21: Direct API Call
```bash
curl -X POST http://localhost:5173/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are your prices?"}'
```
**Expected:** JSON response with pricing information

### Test 22: With History
```bash
curl -X POST http://localhost:5173/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What about Professional?",
    "history": [
      {"type": "user", "content": "Tell me about pricing"},
      {"type": "ai", "content": "We have three plans..."}
    ]
  }'
```
**Expected:** Response should reference previous context

## Automated Test Script

Save this as `run-tests.js`:

```javascript
const tests = [
  { message: "What are your pricing plans?", expect: "Basic" },
  { message: "Where are you located?", expect: "San Francisco" },
  { message: "What services do you offer?", expect: "Web development" },
  { message: "How can I contact you?", expect: "support@" },
];

async function runTests() {
  for (const test of tests) {
    console.log(`\nTest: ${test.message}`);
    const response = await fetch('http://localhost:5173/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: test.message, history: [] })
    });
    const data = await response.json();
    const passed = data.response.includes(test.expect);
    console.log(passed ? '✅ PASS' : '❌ FAIL');
    console.log(`Response: ${data.response.substring(0, 100)}...`);
  }
}

runTests();
```

## Success Criteria

✅ All pricing information is accurate
✅ Contact information is correct
✅ Services are described accurately
✅ FAQs are answered correctly
✅ Responses are friendly and professional
✅ Response time is < 5 seconds
✅ Mobile interface works well
✅ Error handling is graceful
✅ Multi-turn conversations work
✅ API responds correctly

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Wrong pricing | Update `knowledge/pricing.txt` |
| Wrong location | Update `knowledge/location.txt` |
| Unprofessional tone | Update `knowledge/system-prompt.txt` |
| Slow responses | Check Gemini API quota |
| Inaccurate answers | Add more detail to knowledge files |
| Out of scope answers | Improve system prompt instructions |

## Continuous Testing

After deployment:
1. Test daily with sample questions
2. Review actual user conversations
3. Update knowledge base based on common questions
4. Refine system prompt for better responses
5. Add new knowledge files as needed
