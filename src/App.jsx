import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import ChatBubble from './ChatBubble';
import BottomBar from './BottomBar';

// Dummy conversation data
const messages = [
  {
    type: "mila",
    jp: "こんにちは！今日はどこに行きたいですか？",
    en: "Hello! Where would you like to go today?",
    buttons: ["Hear Again", "Hear Slower", "Translate"]
  },
  {
    type: "user",
    jp: "渋谷に行きたいです。",
    en: "I want to go to Shibuya.",
    buttons: ["Hear Myself Again", "Redo", "Translate"]
  },
  {
    type: "tip",
    text: "Nice work! You used polite form *です* correctly. Try adding a reason — 渋谷は楽しいから行きたいです。 (I want to go because Shibuya is fun!)"
  },
  {
    type: "mila",
    jp: "いいですね！渋谷で何をしたいですか？",
    en: "Sounds great! What do you want to do in Shibuya?",
    buttons: ["Hear Again", "Hear Slower", "Translate"]
  },
  {
    type: "user",
    jp: "買い物をしたいです。",
    en: "I want to go shopping.",
    buttons: ["Hear Myself Again", "Redo", "Translate"]
  },
  {
    type: "tip",
    text: "Perfect! You're using the *〜たい* form naturally. Try changing verbs to express more desires!"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex]);

  // Handle next message
  const nextMessage = () => {
    if (currentIndex < messages.length) {
      // Show typing indicator for Mila messages
      if (messages[currentIndex]?.type === 'mila') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentIndex(prev => prev + 1);
        }, 200);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  // Handle click anywhere in chat area
  const handleChatClick = () => {
    if (currentIndex < messages.length) {
      nextMessage();
    }
  };

  // Calculate progress percentage
  const progress = (currentIndex / messages.length) * 100;

  // Get visible messages
  const visibleMessages = messages.slice(0, currentIndex);

  return (
    <div className="min-h-screen bg-mila-bg flex flex-col">
      {/* Header */}
      <Header progress={progress} />

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        onClick={handleChatClick}
        className="flex-1 overflow-y-auto pt-20 pb-32 px-4 cursor-pointer"
      >
        <div className="max-w-3xl mx-auto">
          {visibleMessages.map((message, index) => (
            <ChatBubble
              key={index}
              type={message.type}
              jp={message.jp}
              en={message.en}
              text={message.text}
              buttons={message.buttons}
              isTyping={
                isTyping &&
                index === visibleMessages.length - 1 &&
                message.type === 'mila'
              }
            />
          ))}

          {/* Typing indicator for next message */}
          {isTyping && (
            <div className="flex items-start gap-3 mb-6 animate-fade-in">
              <div className="w-10 h-10 rounded-full shadow-neumorph flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-mila-purple to-mila-purple-light animate-bobbing">
                <span className="text-white text-lg font-bold">M</span>
              </div>
              <div className="bg-mila-bg rounded-3xl shadow-neumorph px-5 py-4">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar
        onNext={nextMessage}
        hasMore={currentIndex < messages.length}
      />
    </div>
  );
}

export default App;
