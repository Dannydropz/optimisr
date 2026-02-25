"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    id: number;
    sender: 'user' | 'agent';
    text: string;
};

const script: Message[] = [
    { id: 1, sender: 'agent', text: "3 leads came in overnight, I've added them to your calendar in the available time slots." },
    { id: 2, sender: 'user', text: "great, how about the draft personalised outreach emails I asked you to compose?" },
    { id: 3, sender: 'agent', text: "The emails are complete, would you like me to send them out?" },
    { id: 4, sender: 'user', text: "Yes" },
    { id: 5, sender: 'agent', text: "Done ✅" },
];

const Hero: React.FC = () => {
    const [visibleMessages, setVisibleMessages] = useState<Message[]>([script[0]]);
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // Auto-scroll to bottom smoothly without scrolling the whole page
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [visibleMessages, isTyping]);

    useEffect(() => {
        if (!isMounted) return;
        let isCancelled = false;

        const runAnimation = async () => {
            // Wait before starting so user can read first agent message
            await new Promise(r => setTimeout(r, 2500));
            if (isCancelled) return;

            // User types message 2
            await new Promise(r => setTimeout(r, 1000));
            if (isCancelled) return;
            setVisibleMessages(prev => [...prev, script[1]]);

            // Agent typing message 3
            await new Promise(r => setTimeout(r, 800));
            if (isCancelled) return;
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 2800)); // slightly slower typing for agent
            if (isCancelled) return;
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, script[2]]);

            // User types message 4
            await new Promise(r => setTimeout(r, 2000));
            if (isCancelled) return;
            setVisibleMessages(prev => [...prev, script[3]]);

            // Agent typing message 5
            await new Promise(r => setTimeout(r, 800));
            if (isCancelled) return;
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 1500)); // fast typing for "Done"
            if (isCancelled) return;
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, script[4]]);

            // Hold on final frame for about 5 seconds
            await new Promise(r => setTimeout(r, 5000));
            if (isCancelled) return;

            // Restart animation
            setVisibleMessages([script[0]]);
            setTimeout(() => {
                if (!isCancelled) runAnimation();
            }, 1000);
        };

        runAnimation();

        return () => {
            isCancelled = true;
        };
    }, [isMounted]);

    if (!isMounted) return <div className="h-screen bg-[#ebeff5]" />;

    return (
        <section className="relative z-0 min-h-screen bg-[#ebeff5] font-sans flex items-center justify-center overflow-hidden pt-32 pb-40">
            <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center relative z-10 gap-16">

                {/* LEFT COLUMN: TITLE */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">

                    <h1 className="text-[clamp(4rem,10vw,8.5rem)] font-black font-condensed uppercase leading-[0.85] tracking-[-0.04em] text-optimisr-black mb-8 max-w-[90rem]">
                        YOUR 24/7<br />AI EMPLOYEE
                    </h1>

                    <p className="text-[18px] lg:text-[22px] text-optimisr-black max-w-[480px] mb-12 leading-relaxed font-medium">
                        Never sleeps. No days off. Scales like 10 workers. Cuts costs. Drives revenue.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        <button className="flex items-center gap-4 bg-[#242426] p-2 pr-8 rounded-full text-white font-bold text-sm tracking-tight hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                            <div className="w-10 h-10 rounded-full bg-[#d9f15c] flex items-center justify-center text-black">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            <span className="ml-1 tracking-tight">Get started</span>
                        </button>

                        <div className="flex flex-col">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img key={i} src={`https://i.pravatar.cc/100?u=${i + 30}`} className="w-10 h-10 rounded-full border-2 border-[#ebeff5] object-cover shadow-sm" alt="User" />
                                ))}
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#242426]/30 mt-2">Trusted by 1k+ teams</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: iPhone Mockup */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end perspective-[1200px]">
                    <motion.div
                        animate={{
                            y: [0, -12, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            rotateY: -8,
                            rotateX: 4
                        }}
                        className="relative w-[340px] h-[700px] bg-white rounded-[56px] shadow-[30px_50px_80px_rgba(0,0,0,0.15),inset_0_0_0_10px_#f4f4f5,inset_0_0_0_14px_#e4e4e7] overflow-hidden border-2 border-gray-100/50"
                    >
                        {/* Status bar */}
                        <div className="absolute top-0 left-0 right-0 h-14 flex justify-between items-center px-8 z-20 bg-white/95 backdrop-blur-sm pt-2">
                            <span className="text-[14px] font-semibold text-black tracking-tight mt-1">9:41</span>
                            <div className="flex items-center gap-1.5 mt-1">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="black"><path d="M14 0H2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zm-1 9H3a1 1 0 010-2h10a1 1 0 010 2zm0-4H3a1 1 0 010-2h10a1 1 0 010 2z" /></svg>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="black"><path d="M8 0C3.3 0 0 3.1 0 3.1L8 12 16 3.1C16 3.1 12.7 0 8 0z" /></svg>
                                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="black" strokeWidth="1.5"><rect x="1" y="1" width="20" height="10" rx="3" /><path fill="black" d="M22 4h1a1 1 0 011 1v2a1 1 0 01-1 1h-1V4z" /></svg>
                            </div>
                        </div>

                        {/* Chat Header */}
                        <div className="absolute top-14 left-0 right-0 h-[72px] bg-white/95 backdrop-blur-md flex items-center px-5 border-b border-gray-100 z-10">
                            <button className="mr-3 text-blue-500 flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                <div className="ml-1 w-6 h-6 bg-blue-500 rounded-full text-white text-[12px] flex items-center justify-center font-bold">2</div>
                            </button>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0055ff] to-[#4080ff] flex items-center justify-center mr-3 shadow-sm text-white">
                                <span className="font-semibold text-[16px]">O</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">Optimisr</h3>
                                <p className="text-[12px] text-gray-500 font-medium tracking-wide">AI Agent</p>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div
                            ref={chatContainerRef}
                            className="absolute top-[128px] bottom-[80px] left-0 right-0 overflow-y-auto px-5 py-5 flex flex-col gap-3.5 scroll-smooth no-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            <AnimatePresence>
                                {visibleMessages.map((msg, idx) => {
                                    const showName = idx === 0 || visibleMessages[idx - 1].sender !== msg.sender;
                                    return (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                            className={`flex flex-col max-w-[85%] mb-1 ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                                        >
                                            {showName && (
                                                <span className="text-[12px] mb-1.5 px-2 text-gray-400 font-medium tracking-wide">
                                                    {msg.sender === 'user' ? 'Me' : 'Optimisr'}
                                                </span>
                                            )}
                                            <div
                                                className={`px-4 py-3 rounded-[22px] text-[15px] leading-[1.4] tracking-tight shadow-sm border border-black/5 ${msg.sender === 'user'
                                                    ? 'bg-[#F2F2F7] text-[#1C1C1E] rounded-br-[4px]'
                                                    : 'bg-[#E5F0FF] text-[#0055FF] rounded-bl-[4px] border-[#0055FF]/10'
                                                    }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="self-start flex flex-col mt-1"
                                    >
                                        <span className="text-[12px] mb-1.5 px-2 text-gray-400 font-medium tracking-wide">Optimisr</span>
                                        <div className="bg-[#E5F0FF] px-4 py-3.5 rounded-[22px] rounded-bl-[4px] w-fit flex items-center gap-1.5 shadow-sm border border-[#0055FF]/10">
                                            <motion.div className="w-1.5 h-1.5 bg-[#0055FF]/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                                            <motion.div className="w-1.5 h-1.5 bg-[#0055FF]/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                                            <motion.div className="w-1.5 h-1.5 bg-[#0055FF]/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} className="h-1" />
                        </div>

                        {/* Chat Input Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-white border-t border-gray-100 flex items-center px-4 pb-4">
                            <div className="w-full h-10 rounded-full border border-gray-200 flex items-center px-4 justify-between bg-white shadow-sm">
                                <span className="text-gray-300 text-[15px]">iMessage</span>
                                <div className="flex items-center gap-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="1.5"><path d="M12 5v14M5 12h14" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-black/80 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
