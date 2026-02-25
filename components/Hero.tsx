"use client";

import React, { useEffect, useState } from "react";

const tasks = [
    { id: 1, text: "Draft outreach emails", result: "Emails Drafted" },
    { id: 2, text: "Follow up leads", result: "Leads Contacted" },
    { id: 3, text: "Customer support", result: "Tickets Resolved" },
    { id: 4, text: "Review requests", result: "Requests Processed" },
    { id: 5, text: "Update CRM records", result: "CRM Updated" },
    { id: 6, text: "Schedule meetings", result: "Calendar Set" },
];

const M = 8; // Repeat 8 times for seamless infinite scroll on ultra-wide screens
const marqueeTasks = Array.from({ length: M }).flatMap(() => tasks);

const SolidConsole = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] z-30 pointer-events-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] flex items-center justify-center">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300, 200)">
                {/* Base Shadow */}
                <ellipse cx="0" cy="50" rx="220" ry="110" fill="black" opacity="0.1" filter="blur(20px)" />

                {/* Pulsating Yellow Glow */}
                <ellipse cx="0" cy="15" rx="224" ry="112" fill="#F9E547" filter="blur(15px)" className="animate-pulse-glow" style={{ transformOrigin: 'center' }} />

                {/* Cylinder Body */}
                <path d="M-220 0 L-220 40 A220 110 0 0 0 220 40 L220 0 Z" fill="#1C1C1E" />
                {/* Cylinder Body Highlight */}
                <path d="M-220 0 L-220 40 A220 110 0 0 0 0 40 L0 0 Z" fill="#2C2C2E" />

                {/* Top Surface */}
                <ellipse cx="0" cy="0" rx="220" ry="110" fill="white" stroke="#E5E7EB" strokeWidth="2" />

                {/* Target Logo */}
                <g transform="scale(1, 0.5)">
                    {/* center dot */}
                    <circle cx="0" cy="0" r="24" fill="#1C1C1E" />
                    {/* Inner ring */}
                    <circle cx="0" cy="0" r="70" fill="none" stroke="#1C1C1E" strokeWidth="22" />
                    {/* Outer ring */}
                    <circle cx="0" cy="0" r="130" fill="none" stroke="#1C1C1E" strokeWidth="22" />
                </g>
            </g>
        </svg>
    </div>
);

const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="h-screen bg-[#FAF9F6]" />;

    return (
        <section className="relative z-0 min-h-screen bg-[#FAF9F6] font-sans flex flex-col items-center justify-center overflow-hidden pt-36 md:pt-48 pb-20">
            <style>{`
                @keyframes slideRight {
                    from { transform: translateX(-12.5%); }
                    to { transform: translateX(0%); }
                }
                .animate-slide-right {
                    /* duration scales with how many items, this makes it pleasantly readable */
                    animation: slideRight 50s linear infinite;
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.3; transform: scale(0.98); }
                    50% { opacity: 1; transform: scale(1.01); }
                }
                .animate-pulse-glow {
                    animation: pulseGlow 3s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-40 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mb-2">

                <h1 className="text-[clamp(3rem,10vw,8.5rem)] font-black font-condensed uppercase leading-[0.85] tracking-[-0.04em] text-optimisr-black mb-6 md:mb-8">
                    YOUR 24/7<br />AI EMPLOYEE
                </h1>

                <p className="text-[20px] sm:text-[24px] lg:text-[28px] text-optimisr-black max-w-[650px] mb-2 md:mb-4 leading-relaxed font-medium mx-auto">
                    Never sleeps. No days off. Scales like 10 workers. Cuts costs. Drives revenue.
                </p>
            </div>

            {/* Animation Stage */}
            <div className="relative w-full h-[400px] flex-shrink-0 mt-0 mb-12">

                <SolidConsole />

                {/* Left Track Container (Clipped exactly down the center) */}
                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap min-w-max">
                        <div className="animate-slide-right flex items-center">
                            {marqueeTasks.map((task, idx) => (
                                <div key={`left-${idx}`} className="inline-flex flex-col items-center justify-center mx-6 w-[260px] md:w-[300px]">
                                    <div className="bg-[#f3f1eb] border border-[#e8e6df] text-[#4a5851] px-6 py-3.5 rounded-[100px] text-[15px] font-bold shadow-sm whitespace-nowrap">
                                        {task.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Track Container (Clipped precisely down the center) */}
                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap min-w-max">
                        <div className="animate-slide-right flex items-center">
                            {marqueeTasks.map((task, idx) => (
                                <div key={`right-${idx}`} className="inline-flex flex-col items-center justify-center mx-6 w-[260px] md:w-[300px] relative">
                                    <div className="bg-[#1C1C1E] border border-[#2C2C2E] text-white px-6 py-3.5 rounded-[100px] text-[15px] font-bold shadow-[0_8px_16px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10 transition-transform duration-300">
                                        {task.text}
                                    </div>
                                    <div className="absolute -bottom-[12px] bg-[#F9E547] text-[#5c4a00] text-[11px] font-bold px-[10px] py-[3px] rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] tracking-wide whitespace-nowrap z-20">
                                        {task.result}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
