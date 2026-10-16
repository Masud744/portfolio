import React, { useState, useRef, useEffect } from "react";
import { Avatar } from "@bible-strong/avatar-react";
import "@bible-strong/avatar-react/styles.css";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Terminal, 
  RefreshCw, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2 
} from "lucide-react";
import avatarData from "../assets/assistant.avatar.json";
import "./InteractiveAssistant.css";

const QUICK_PROMPTS = [
  "Who is Masud?",
  "Tell me about SmartProv v2.1.3",
  "What is his Edge AI & Hardware stack?",
  "How can I hire or contact him?"
];

export default function InteractiveAssistant({ onOpenTerminal }) {
  const avatarRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am Strobi, Masud's cyber lab assistant. Ask me anything about his embedded firmware, Edge AI pipelines, or Arduino packages!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [avatarExpression, setAvatarExpression] = useState("neutral");
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Initial greeting animation
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        avatarRef.current?.play("happy");
      } catch (e) {
        console.error(e);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (textToSend) => {
    const userMessage = textToSend || input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setShowGreetingBubble(false);

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    // Switch avatar to thinking / listening
    try {
      avatarRef.current?.play("thinking");
      setAvatarExpression("thinking");
    } catch (e) {}

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.slice(-6).map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply }
      ]);

      // Reaction: celebrate / happy when answered
      try {
        avatarRef.current?.play("happy");
        setAvatarExpression("joyful-wide");
      } catch (e) {}
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ I encountered an issue connecting to Groq. Please ensure your network is stable or check the configuration."
        }
      ]);
      try {
        avatarRef.current?.setExpression("uneasy-left");
      } catch (e) {}
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        try {
          avatarRef.current?.play("idle");
          setAvatarExpression("neutral");
        } catch (e) {}
      }, 3500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Chat cleared! Ask me anything about Shahriar Alom Masud's projects, hardware, or credentials."
      }
    ]);
    try {
      avatarRef.current?.play("idle");
    } catch (e) {}
  };

  return (
    <div className="assistant-root-container">
      {/* Floating Mascot Trigger */}
      {!isOpen && (
        <div className="mascot-launcher">
          {showGreetingBubble && (
            <div className="greeting-pill-bubble">
              <span>Hi! I am Masud's AI Companion 👋</span>
              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); setShowGreetingBubble(false); }} 
                className="pill-close-btn"
                aria-label="Close greeting"
              >
                <X size={12} />
              </button>
            </div>
          )}

          <button
            type="button"
            className="mascot-round-btn"
            onClick={() => {
              setIsOpen(true);
              setShowGreetingBubble(false);
            }}
            title="Chat with Masud's AI Assistant (Powered by Groq)"
            aria-label="Open AI Assistant"
          >
            <div className="avatar-frame">
              <Avatar
                ref={avatarRef}
                definition={avatarData}
                defaultAnimation="idle"
                size={84}
              />
            </div>
            <span className="mascot-status-pulse" />
          </button>
        </div>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="chat-window-modal">
          {/* Header */}
          <div className="chat-header">
            <div className="header-left">
              <div className="header-avatar-mini">
                <Avatar
                  definition={avatarData}
                  defaultAnimation="idle"
                  size={46}
                />
              </div>
              <div className="header-title-block">
                <div className="title-row">
                  <span className="bot-name">Strobi</span>
                  <span className="badge-groq">
                    <Sparkles size={10} /> Groq LPU
                  </span>
                </div>
                <span className="bot-status-text">
                  <span className="status-dot-green" /> Masud's Hardware Assistant
                </span>
              </div>
            </div>

            <div className="header-actions">
              <button
                type="button"
                onClick={resetChat}
                className="hdr-btn"
                title="Clear Conversation"
                aria-label="Clear Conversation"
              >
                <RefreshCw size={14} />
              </button>
              {onOpenTerminal && (
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="hdr-btn"
                  title="Open PlatformIO Terminal"
                  aria-label="Open PlatformIO Terminal"
                >
                  <Terminal size={14} />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="hdr-btn"
                title="Minimize Chat"
                aria-label="Minimize Chat"
              >
                <Minimize2 size={14} />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="quick-prompts-bar">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                className="prompt-chip"
                onClick={() => handleSendMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message Stream */}
          <div className="chat-messages-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble-row ${msg.role === "user" ? "user-row" : "bot-row"}`}
              >
                {msg.role === "assistant" && (
                  <div className="bubble-icon bot-icon">
                    <Bot size={14} />
                  </div>
                )}

                <div className={`message-bubble ${msg.role === "user" ? "user-bubble" : "bot-bubble"}`}>
                  <p className="message-text">{msg.content}</p>
                </div>

                {msg.role === "user" && (
                  <div className="bubble-icon user-icon">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="chat-bubble-row bot-row">
                <div className="bubble-icon bot-icon">
                  <Bot size={14} />
                </div>
                <div className="message-bubble bot-bubble typing-bubble">
                  <div className="typing-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="thinking-label">Thinking on Groq...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-bar">
            <textarea
              className="chat-textarea"
              placeholder="Ask about Masud's IoT, FreeRTOS, or Vision projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              type="button"
              className="send-btn"
              onClick={() => handleSendMessage()}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
