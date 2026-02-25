"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
    {
        id: 1,
        sender: "ai",
        text: "New lead from your website! Sarah J. is asking about pricing for your premium service. Want me to respond?",
    },
    {
        id: 2,
        sender: "user",
        text: "Yes, send her our pricing & book a call",
    },
    {
        id: 3,
        sender: "ai",
        text: "Done! Pricing sent. Sarah's booked for Tuesday at 2pm. I also followed up with 3 leads from yesterday — 2 confirmed appointments.",
    },
    {
        id: 4,
        sender: "user",
        text: "Perfect. Any missed calls today?",
    },
    {
        id: 5,
        sender: "ai",
        text: "Zero missed. I answered 12 calls, qualified 8 leads, and booked 5 appointments. Your calendar is updated.",
    },
];

const ChatAutomation = () => {
    const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
    const [isTyping, setIsTyping] = useState<"ai" | "user" | null>(null);
    const [key, setKey] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleMessages, isTyping]);

    useEffect(() => {
        const timeoutIds: NodeJS.Timeout[] = [];

        const runAnimation = async () => {
            setVisibleMessages([]);
            setIsTyping(null);

            const wait = (ms: number) => new Promise(resolve => {
                const id = setTimeout(resolve, ms);
                timeoutIds.push(id);
            });

            await wait(800);

            for (let i = 0; i < messages.length; i++) {
                // 1. Show Typing
                setIsTyping(messages[i].sender as "ai" | "user");
                await wait(1200 + Math.random() * 800); // Random typing feel

                // 2. Add Message
                setIsTyping(null);
                setVisibleMessages(prev => [...prev, messages[i].id]);

                // 3. Pause before next message
                await wait(1500);
            }

            // End cycle pause
            await wait(4000);
            setKey(prev => prev + 1);
        };

        runAnimation();

        return () => {
            timeoutIds.forEach(clearTimeout);
        };
    }, [key]);

    return (
        <div className="w-full max-w-[500px] h-[550px] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-[#FDFCFA] rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/[0.03] overflow-hidden flex flex-col"
            >
                {/* Header (Stay fixed) */}
                <div className="h-14 flex items-center px-8 border-b border-black/[0.03] shrink-0 bg-[#FDFCFA]/80 backdrop-blur-md z-10">
                    <div className="flex gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm" />
                    </div>
                    <div className="flex-1 text-center text-[14px] font-semibold text-black/30 pr-12 tracking-tight">
                        Optimisr AI Employee
                    </div>
                </div>

                {/* Chat Area (Internal Scroll) */}
                <div
                    ref={scrollRef}
                    className="flex-1 p-8 flex flex-col gap-5 overflow-y-auto scroll-smooth custom-scrollbar"
                >
                    <AnimatePresence mode="popLayout">
                        {messages.map((msg) => (
                            visibleMessages.includes(msg.id) && (
                                <motion.div
                                    key={`msg-${msg.id}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    className={`flex w-full ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-6 py-4 text-[15.5px] font-medium leading-relaxed
                                            ${msg.sender === "ai"
                                                ? "bg-white text-black rounded-[22px] rounded-bl-md shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-black/[0.03]"
                                                : "bg-[#63534b] text-white rounded-[22px] rounded-br-md shadow-[0_10px_20px_rgba(99,83,75,0.15)]"
                                            }
                                        `}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            )
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <motion.div
                                key="typing-indicator"
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={`flex w-full ${isTyping === "ai" ? "justify-start" : "justify-end"}`}
                            >
                                <div className={`px-5 py-3.5 rounded-[20px] flex items-center gap-1
                                    ${isTyping === "ai"
                                        ? "bg-white border border-black/[0.03] rounded-bl-md shadow-sm"
                                        : "bg-[#63534b] rounded-br-md"
                                    }
                                `}>
                                    <TypingDot delay={0} color={isTyping === "ai" ? "#6b6b6b" : "#ffffff"} />
                                    <TypingDot delay={0.2} color={isTyping === "ai" ? "#6b6b6b" : "#ffffff"} />
                                    <TypingDot delay={0.4} color={isTyping === "ai" ? "#6b6b6b" : "#ffffff"} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Subtle Footer (Empty but keeps size) */}
                <div className="h-10 shrink-0 bg-gradient-to-t from-black/[0.01] to-transparent pointer-events-none" />
            </motion.div>
        </div>
    );
};

const TypingDot = ({ delay, color }: { delay: number; color: string }) => (
    <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
            duration: 0.8,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
    />
);

export default ChatAutomation;
