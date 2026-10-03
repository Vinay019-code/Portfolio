"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

interface Message {
  sender: "assistant" | "user";
  text: string;
}

const PRESET_QUESTIONS = [
  "Tell me about Vinay",
  "What projects has Vinay built?",
  "What technologies does Vinay use?",
  "Tell me about the Chat App",
  "Tell me about AI Life Admin OS",
  "What is Vinay's education?",
];

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hello! I am Vinay's portfolio assistant. You can ask me questions about Vinay's technical background, projects, full-stack skillset, or education.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("about vinay") || q.includes("who is")) {
      return `${profileData.name} is a Software Engineer / Full-Stack Developer focused on building scalable and user-friendly web applications using MERN, Java, and Python. He is pursuing a B.Tech (2023–2027) at SRMCEM / AKTU and has a strong foundation in Data Structures, Algorithms, REST APIs, and databases.`;
    }

    if (q.includes("what projects") || q.includes("all projects") || q.includes("portfolio projects")) {
      return `Vinay has built three featured projects:
1. Real-Time Chat Application (React.js, Node.js, Express.js, MongoDB, JWT, Socket.IO) - Full-stack chat with auth & instant messaging.
2. AI Meditation Analytics Application (Python, MediaPipe, OpenCV, NumPy, Matplotlib) - Computer-vision prototype analyzing posture and breathing signals.
3. AI Life Admin OS (Next.js, React, Tailwind CSS, Node.js, Express.js, MongoDB) - Productivity dashboard with Google OAuth and Gmail API integration.`;
    }

    if (q.includes("chat app")) {
      const p = projects[0];
      return `The Real-Time Chat Application is built on the MERN stack (React, Node, Express, MongoDB) with Socket.IO and JWT. It features user authentication, protected backend routes via middleware, REST APIs, and centralized state management for scalable chat delivery.`;
    }

    if (q.includes("meditation")) {
      const p = projects[1];
      return `The AI Meditation Analytics Application is a Python & Computer Vision prototype using smartphone camera input. It extracts MediaPipe pose landmarks (shoulder/torso displacement) and applies moving-average filtering and peak detection for breathing and posture analysis, visualized via Matplotlib.`;
    }

    if (q.includes("life admin")) {
      const p = projects[2];
      return `AI Life Admin OS is a Next.js and Tailwind CSS productivity platform concept designed to manage emails, bills, subscriptions, reminders, and documents. It utilizes HttpOnly refresh cookies, access tokens, Google OAuth 2.0, and the Gmail API.`;
    }

    if (q.includes("technolog") || q.includes("skill") || q.includes("stack")) {
      return `Vinay's technical ecosystem includes:
• Languages: Java, JavaScript, Python, SQL, HTML, CSS
• Frontend: React.js, Next.js, Tailwind CSS, Zustand, Responsive UI
• Backend: Node.js, Express.js, Java, REST APIs
• Databases: MongoDB, MongoDB Atlas, SQLite
• Core: DSA (primary in Java), OOP, DBMS, OS, Networks, JWT Authentication
• Data Science: Python, NumPy, Pandas, Matplotlib`;
    }

    if (q.includes("education") || q.includes("college") || q.includes("degree")) {
      return `Vinay is pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering (2023 – 2027) at Shri Ram Murti College of engineering, Bareilly / AKTU, India. Relevant coursework includes DSA, OOP, DBMS, Operating Systems, Computer Networks, and Software Engineering.`;
    }

    if (q.includes("dsa") || q.includes("problem solving") || q.includes("algorithm")) {
      return `Vinay practices pattern-based problem solving with primary focus in Java. Topics covered include Arrays, Strings, Hashing, Two Pointers, Sliding Window, Recursion, Sorting, Searching, Linked Lists, Stacks, and Queues.`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
      return `You can reach Vinay at vinayyadav00190@gmail.com or by phone at +91-6397157910. He is based in India.`;
    }

    return `Thank you for asking. Based on Vinay's verified profile: Vinay is a Software Engineer & Full-Stack Developer specializing in MERN, Java, and Python. You can inspect his case studies in the Work section or ask about specific projects like the Chat App, Meditation Analytics, or AI Life Admin OS.`;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { sender: "user", text };
    const answer = generateAnswer(text);
    const botMsg: Message = { sender: "assistant", text: answer };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-900 border border-white/15 text-white hover:border-[#8B5CF6] hover:bg-zinc-800 transition-all shadow-2xl backdrop-blur-md group"
          aria-label="Ask about Vinay"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Terminal className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-xs font-mono font-medium tracking-wide">
            Ask about Vinay
          </span>
        </button>
      )}

      {/* Chat Assistant Panel */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[400px] h-[520px] max-h-[85vh] rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Portfolio Assistant
                </h4>
                <p className="text-[10px] font-mono text-zinc-400">
                  Direct facts from Vinay Yadav&apos;s portfolio
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#8B5CF6]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-white text-black font-sans text-xs font-medium ml-auto"
                      : "bg-zinc-900/90 text-zinc-300 border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick preset questions */}
          <div className="p-2 border-t border-white/5 bg-zinc-950/80">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px] font-mono">
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-[#8B5CF6]/50 whitespace-nowrap transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="p-3 border-t border-white/10 bg-zinc-900/50 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 rounded-lg bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-[#8B5CF6]"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
