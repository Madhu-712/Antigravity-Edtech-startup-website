"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi! 👋 I'm the EduGenius AI. How can I help you find the perfect tutor or resource today?" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            let response = "That's a great question! I'm just a demo bot right now, but our support team would love to help you with " + input;

            if (input.toLowerCase().includes("price") || input.toLowerCase().includes("cost")) {
                response = "Our tutors set their own rates, typically ranging from $30 to $150 per hour depending on experience and subject.";
            } else if (input.toLowerCase().includes("python") || input.toLowerCase().includes("coding")) {
                response = "We have excellent Computer Science tutors! Check out the 'Find Tutors' page and filter by 'Python'.";
            } else if (input.toLowerCase().includes("tutor")) {
                response = "You can apply to become a tutor by clicking 'Become a Tutor' in the menu. We'd love to have you!";
            }

            setMessages(prev => [...prev, { role: "bot", text: response }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            <div className={cn(
                "bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 transition-all duration-300 origin-bottom-right overflow-hidden mb-4 flex flex-col",
                isOpen ? "scale-100 opacity-100 h-[500px]" : "scale-0 opacity-0 h-0"
            )}>
                {/* Header */}
                <div className="bg-slate-900 p-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">EduGenius Assistant</h3>
                            <div className="flex items-center gap-1.5 opacity-80">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-xs">Online</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                    {messages.map((msg, i) => (
                        <div key={i} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "")}>
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                msg.role === "bot" ? "bg-primary text-white" : "bg-slate-200 text-slate-600"
                            )}>
                                {msg.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                            </div>
                            <div className={cn(
                                "p-3 rounded-2xl text-sm max-w-[80%]",
                                msg.role === "bot" ? "bg-white text-slate-700 shadow-sm rounded-tl-none" : "bg-primary text-white rounded-tr-none"
                            )}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 bg-white border-t border-slate-100">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2"
                    >
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent text-sm outline-none text-slate-900 placeholder:text-slate-400"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="text-primary disabled:text-slate-400 hover:scale-110 transition-transform"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110",
                    isOpen ? "bg-slate-700 text-white rotate-90" : "bg-primary text-white"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
            </button>
        </div>
    );
}
