import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: welcome, 1: info collection, 2: chat
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'bot'}>>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      setStep(2);
      setMessages([
        {
          id: 1,
          text: `Hello ${userInfo.name}! I'm your AI assistant for 6axis Studios. How can I help you with your architectural needs today?`,
          sender: 'bot'
        }
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: currentMessage,
      sender: 'user' as const
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(currentMessage),
        sender: 'bot' as const
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setCurrentMessage('');
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    if (message.includes('project') || message.includes('design')) {
      return "I'd be happy to help you with your project! Our team specializes in residential, commercial, and sustainable architecture. Would you like to know more about our services or schedule a consultation?";
    } else if (message.includes('cost') || message.includes('price')) {
      return "Project costs vary depending on scope, size, and complexity. I'd recommend scheduling a consultation where our team can provide you with a detailed estimate based on your specific needs.";
    } else if (message.includes('time') || message.includes('duration')) {
      return "Project timelines typically range from 3-18 months depending on the scope. Design phases usually take 2-4 months, followed by permitting and construction. Would you like to discuss your specific timeline requirements?";
    } else if (message.includes('sustainable') || message.includes('green')) {
      return "We're committed to sustainable design! Our projects incorporate energy-efficient systems, sustainable materials, and environmental considerations. Would you like to learn more about our green building practices?";
    } else {
      return "That's a great question! Our team of architects and designers would be the best to provide you with detailed information. Would you like me to help you schedule a consultation?";
    }
  };

  const handleInfoChange = (field: keyof typeof userInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
        size="lg"
      >
        <span className="text-base sm:text-lg">💬</span>
      </Button>
    );
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 sm:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        <div className="absolute inset-x-4 top-4 bottom-4 flex flex-col">
          <Card className="w-full h-full flex flex-col shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground flex-shrink-0">
              <CardTitle className="text-lg">6axis AI Assistant</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:text-primary-foreground/80"
              >
                ✕
              </Button>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              {step === 0 && (
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <h3 className="font-medium mb-2">Welcome to 6axis Studios!</h3>
                    <p className="text-sm text-gray-600">
                      I'm your AI assistant. I can help answer questions about our services, projects, and more.
                    </p>
                  </div>
                  <Button onClick={() => setStep(1)} className="w-full">
                    Start Chat
                  </Button>
                </div>
              )}

              {step === 1 && (
                <div className="p-6 flex-1 overflow-y-auto">
                  <h3 className="font-medium mb-4">Let's get to know you!</h3>
                  <form onSubmit={handleInfoSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="chat-name">Name *</Label>
                      <Input
                        id="chat-name"
                        type="text"
                        required
                        value={userInfo.name}
                        onChange={(e) => handleInfoChange('name', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="chat-email">Email *</Label>
                      <Input
                        id="chat-email"
                        type="email"
                        required
                        value={userInfo.email}
                        onChange={(e) => handleInfoChange('email', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="chat-phone">Phone Number</Label>
                      <Input
                        id="chat-phone"
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) => handleInfoChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Continue
                    </Button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <>
                  <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg text-sm ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSendMessage} className="p-4 border-t flex-shrink-0">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Type your message..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" size="sm">
                        Send
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Desktop View */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-80 sm:w-96 h-[400px] sm:h-[500px] z-50 hidden sm:block">
        <Card className="w-full h-full flex flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground flex-shrink-0">
            <CardTitle className="text-lg">6axis AI Assistant</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              ✕
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {step === 0 && (
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h3 className="font-medium mb-2">Welcome to 6axis Studios!</h3>
                  <p className="text-sm text-gray-600">
                    I'm your AI assistant. I can help answer questions about our services, projects, and more.
                  </p>
                </div>
                <Button onClick={() => setStep(1)} className="w-full">
                  Start Chat
                </Button>
              </div>
            )}

            {step === 1 && (
              <div className="p-6 flex-1 overflow-y-auto">
                <h3 className="font-medium mb-4">Let's get to know you!</h3>
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="chat-name-desktop">Name *</Label>
                    <Input
                      id="chat-name-desktop"
                      type="text"
                      required
                      value={userInfo.name}
                      onChange={(e) => handleInfoChange('name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="chat-email-desktop">Email *</Label>
                    <Input
                      id="chat-email-desktop"
                      type="email"
                      required
                      value={userInfo.email}
                      onChange={(e) => handleInfoChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="chat-phone-desktop">Phone Number</Label>
                    <Input
                      id="chat-phone-desktop"
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => handleInfoChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Continue
                  </Button>
                </form>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSendMessage} className="p-4 border-t flex-shrink-0">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="sm">
                      Send
                    </Button>
                  </div>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};