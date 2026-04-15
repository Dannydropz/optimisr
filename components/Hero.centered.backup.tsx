"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
)

const MessageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
)

const MissedCallIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="16" y2="8"></line>
        <line x1="16" y1="2" x2="22" y2="8"></line>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
)

const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M9 16l2 2 4-4"></path>
    </svg>
)

const ChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
)

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
)

const graphNodes = [
  { id: "in1", side: "left", x: 200, y: 120, icon: PhoneIcon, title: "Inbound Call", subtitle: "Answered instantly", color: "#4a5851", labelPos: { left: 170, top: 120, xAlign: "-100%", yAlign: "-50%" } },
  { id: "out1", side: "right", x: 800, y: 100, icon: CalendarIcon, title: "Booked Appointment", subtitle: "Drops into your calendar", color: "#14b8a6", labelPos: { left: 830, top: 100, xAlign: "0%", yAlign: "-50%" } },
  { id: "in2", side: "left", x: 120, y: 250, icon: MessageIcon, title: "Text Message", subtitle: "Replies in under 2 seconds", color: "#4a5851", labelPos: { left: 90, top: 250, xAlign: "-100%", yAlign: "-50%" } },
  { id: "out2", side: "right", x: 880, y: 250, icon: ChartIcon, title: "Closed Revenue", subtitle: "Every lead followed through", color: "#14b8a6", labelPos: { left: 910, top: 250, xAlign: "0%", yAlign: "-50%" } },
  { id: "in3", side: "left", x: 200, y: 380, icon: MissedCallIcon, title: "Missed Call", subtitle: "Called back in 30 seconds", color: "#4a5851", labelPos: { left: 170, top: 380, xAlign: "-100%", yAlign: "-50%" } },
  { id: "out3", side: "right", x: 800, y: 400, icon: StarIcon, title: "5-Star Review", subtitle: "Requested automatically", color: "#14b8a6", labelPos: { left: 830, top: 400, xAlign: "0%", yAlign: "-50%" } },
];

const DesktopNodeGraph = ({ activeIndex }: { activeIndex: number }) => {
    return (
        <div className="hidden md:flex relative w-[1000px] h-[500px] scale-[0.6] lg:scale-[0.8] xl:scale-100 origin-center flex-shrink-0 mx-auto justify-center items-center mt-8">
            <svg className="absolute inset-0 z-0 pointer-events-none" width="1000" height="500" viewBox="0 0 1000 500">
                {/* Decorative Elements */}
                <circle cx="50" cy="80" r="4" fill="#d8b4e2" opacity="0.4"/>
                <circle cx="100" cy="420" r="6" fill="#a7f3d0" opacity="0.4"/>
                <circle cx="950" cy="120" r="5" fill="#bfdbfe" opacity="0.4"/>
                <circle cx="900" cy="450" r="4" fill="#d8b4e2" opacity="0.4"/>
                <ellipse cx="500" cy="50" rx="30" ry="10" fill="none" stroke="#a7f3d0" strokeWidth="1" opacity="0.3" transform="rotate(-15 500 50)"/>
                <ellipse cx="200" cy="200" rx="20" ry="20" fill="none" stroke="#bfdbfe" strokeWidth="1" opacity="0.3" />
                <rect x="750" y="200" width="15" height="15" fill="none" stroke="#d8b4e2" strokeWidth="1" opacity="0.3" transform="rotate(25 750 200)"/>

                {/* Connecting Lines */}
                {graphNodes.map((node, i) => {
                    const isLeft = node.side === 'left';
                    const pathId = `flow-path-${i}`;
                    const pathD = isLeft
                        ? `M ${node.x} ${node.y} C ${(node.x + 500)/2} ${node.y}, ${(node.x + 500)/2} 250, 500 250`
                        : `M 500 250 C 650 250, ${(node.x + 500)/2} ${node.y}, ${node.x} ${node.y}`;
                    // Each line gets 2-3 dots with different durations and begin offsets to feel random
                    const dots = [
                        { dur: `${1.4 + (i * 0.37) % 1.1}s`, begin: '0s' },
                        { dur: `${1.1 + (i * 0.53) % 1.3}s`, begin: `${0.4 + (i * 0.29) % 1.2}s` },
                        { dur: `${1.6 + (i * 0.61) % 0.9}s`, begin: `${0.9 + (i * 0.41) % 1.5}s` },
                    ];
                    return (
                        <g key={`path-${i}`}>
                            <defs>
                                <path id={pathId} d={pathD} />
                            </defs>
                            <path d={pathD} stroke={node.color} strokeWidth="2" fill="none" opacity="0.15" />
                            <path
                                d={pathD}
                                stroke={node.color}
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4 16"
                                strokeDashoffset="0"
                                className="animate-flow-line opacity-60"
                            />
                            {dots.map((dot, di) => (
                                <circle key={di} r="4.5" fill={node.color} opacity="0.85">
                                    <animateMotion
                                        dur={dot.dur}
                                        begin={dot.begin}
                                        repeatCount="indefinite"
                                        rotate="auto"
                                    >
                                        <mpath href={`#${pathId}`} />
                                    </animateMotion>
                                </circle>
                            ))}
                        </g>
                    )
                })}

                {/* Center Pulse Rings */}
                <g className="animate-center-pulse" transform="translate(500, 250)">
                    <circle cx="0" cy="0" r="105" fill="none" stroke="#d8b4e2" strokeWidth="2" opacity="0.4" />
                    <circle cx="0" cy="0" r="125" fill="none" stroke="#a7f3d0" strokeWidth="1" opacity="0.3" />
                </g>
                <circle cx="500" cy="250" r="85" fill="none" stroke="#F9E547" strokeWidth="4" className="animate-emanate-pulse" />
            </svg>

            {/* Center Node */}
            <div className="absolute left-[500px] top-[250px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center bg-white rounded-full w-[170px] h-[170px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50">
                 <Image src="/logo.png" alt="Optimisr" width={130} height={36} className="w-[120px] h-auto" priority />
            </div>

            {/* Action Nodes & Floating Labels */}
            {graphNodes.map((node, i) => {
                const isActive = i === activeIndex;
                const Icon = node.icon;
                return (
                    <div key={`node-${i}`}>
                        {/* Node Circle */}
                        <div
                            className={`absolute z-10 w-16 h-16 bg-white rounded-full border border-gray-100 flex items-center justify-center transition-all duration-500`}
                            style={{
                                left: node.x, top: node.y, transform: `translate(-50%, -50%) scale(${isActive ? 1.15 : 1})`,
                                color: node.color,
                                boxShadow: isActive ? `0 12px 30px ${node.color}30` : '0 4px 10px rgb(0 0 0 / 0.05)'
                            }}
                        >
                            <Icon />
                        </div>

                        {/* Floating Label Card */}
                        <div
                            className={`absolute z-30 transition-all duration-500 ease-out flex`}
                            style={{
                                left: node.labelPos.left, top: node.labelPos.top,
                                transform: `translate(${node.labelPos.xAlign}, ${node.labelPos.yAlign}) translateY(${isActive ? '0' : '10px'})`,
                                opacity: isActive ? 1 : 0,
                                pointerEvents: isActive ? 'auto' : 'none'
                            }}
                        >
                            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-4 min-w-[240px] flex flex-col relative overflow-hidden">
                                <span className="font-bold text-optimisr-black text-[17px] mb-0.5">{node.title}</span>
                                <span className="text-gray-500 text-[14px]">{node.subtitle}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const MobileNodeGraph = ({ activeIndex }: { activeIndex: number }) => {
    const activeNode = graphNodes[activeIndex];
    const isInput = activeNode.side === 'left';
    const Icon = activeNode.icon;

    return (
        <div className="relative w-full max-w-[340px] h-[450px] flex flex-col items-center justify-center md:hidden mx-auto mt-8 mb-4">
            
            {/* Top Container (Inputs) */}
            <div className="absolute top-0 w-full h-[100px] flex items-center justify-center z-20">
                <AnimatePresence mode="sync">
                    {isInput && (
                         <motion.div
                            key={activeNode.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15, position: 'absolute' }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-3 min-w-[240px] flex items-center justify-start gap-4"
                        >
                            <div style={{ color: activeNode.color }} className="flex-shrink-0 bg-gray-50 p-2.5 rounded-full"><Icon /></div>
                            <div className="flex flex-col text-left">
                                <span className="font-bold text-optimisr-black text-[15px]">{activeNode.title}</span>
                                <span className="text-gray-500 text-[12px]">{activeNode.subtitle}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Top Flow Line */}
            <div className={`absolute top-[100px] bottom-[225px] w-0.5 transition-opacity duration-300 ${isInput ? 'opacity-50' : 'opacity-0'}`}>
                <div className="w-full h-full animate-mobile-flow" style={{
                    backgroundImage: `linear-gradient(${activeNode.color} 50%, transparent 50%)`,
                    backgroundSize: '100% 16px',
                    backgroundPosition: 'center top'
                }}></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-mobile-flow-dot" style={{ backgroundColor: activeNode.color }}></div>
            </div>

            {/* Center Node */}
            <div className="relative z-20 flex flex-col items-center justify-center bg-white rounded-full w-[140px] h-[140px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50 my-auto">
                 <div className="absolute inset-[-15px] rounded-full border border-[#d8b4e2] opacity-40 animate-center-pulse pointer-events-none"></div>
                 <div className="absolute inset-[-30px] rounded-full border border-[#a7f3d0] opacity-30 pointer-events-none"></div>
                 <div className="absolute inset-0 rounded-full border-4 border-[#F9E547] animate-emanate-pulse pointer-events-none z-0"></div>
                 <Image src="/logo.png" alt="Optimisr" width={100} height={28} className="w-[100px] h-auto relative z-10" priority />
            </div>

            {/* Bottom Flow Line */}
            <div className={`absolute top-[225px] bottom-[100px] w-0.5 transition-opacity duration-300 flex items-center ${!isInput ? 'opacity-50' : 'opacity-0'}`}>
                <div className="w-full h-full animate-mobile-flow" style={{
                    backgroundImage: `linear-gradient(${activeNode.color} 50%, transparent 50%)`,
                    backgroundSize: '100% 16px',
                    backgroundPosition: 'center top'
                }}></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-mobile-flow-dot" style={{ backgroundColor: activeNode.color }}></div>
            </div>

            {/* Bottom Container (Outputs) */}
            <div className="absolute bottom-0 w-full h-[100px] flex items-center justify-center z-20">
                <AnimatePresence mode="sync">
                    {!isInput && (
                         <motion.div
                            key={activeNode.id}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15, position: 'absolute' }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-3 min-w-[240px] flex items-center justify-start gap-4"
                        >
                            <div style={{ color: activeNode.color }} className="flex-shrink-0 bg-gray-50 p-2.5 rounded-full"><Icon /></div>
                            <div className="flex flex-col text-left">
                                <span className="font-bold text-optimisr-black text-[15px]">{activeNode.title}</span>
                                <span className="text-gray-500 text-[12px]">{activeNode.subtitle}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [nodeIndex, setNodeIndex] = useState(0);

    const rotatingWords = [
        "Booked Job.",
        "New Customer.",
        "5-Star Review.",
        "Closed Deal."
    ];

    useEffect(() => {
        setIsMounted(true);
        const wordInterval = setInterval(() => {
            setWordIndex((current) => (current + 1) % rotatingWords.length);
        }, 3000);
        
        const nodeInterval = setInterval(() => {
            setNodeIndex((current) => (current + 1) % graphNodes.length);
        }, 2500);

        return () => {
            clearInterval(wordInterval);
            clearInterval(nodeInterval);
        }
    }, []);

    if (!isMounted) return <div className="h-screen bg-[#FAF9F6]" />;

    return (
        <section className="relative z-0 min-h-screen bg-[#FAF9F6] font-sans flex flex-col items-center justify-start overflow-hidden pt-36 md:pt-40 lg:pt-48 pb-20 md:pb-40">
            <style>{`
                @keyframes flowLine {
                    to { stroke-dashoffset: -20; }
                }
                .animate-flow-line {
                    animation: flowLine 0.7s linear infinite;
                }

                @keyframes emanatePulse {
                    0% { transform: scale(0.9); opacity: 0.8; stroke-width: 4px; border-width: 4px; }
                    100% { transform: scale(1.6); opacity: 0; stroke-width: 1px; border-width: 1px; }
                }
                .animate-emanate-pulse {
                    animation: emanatePulse 2.5s ease-out infinite;
                    transform-origin: center;
                }
                @keyframes centerPulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                .animate-center-pulse {
                    animation: centerPulse 3s ease-in-out infinite;
                    transform-origin: center;
                }
                @keyframes mobileFlowDown {
                    from { background-position: center 0; }
                    to { background-position: center 16px; }
                }
                .animate-mobile-flow {
                    animation: mobileFlowDown 0.3s linear infinite;
                }
                @keyframes mobileFlowDot {
                    0% { top: 0; opacity: 1; }
                    80% { top: 80%; opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-mobile-flow-dot {
                    animation: mobileFlowDot 1.2s linear infinite;
                }
            `}</style>

            <div className="relative z-40 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mb-2 shrink-0">

                <div className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-widest text-optimisr-black uppercase border-2 border-optimisr-black/10 bg-white/50">
                    24/7 Call Answering for Tradespeople
                </div>

                <h1 className="text-[clamp(2.5rem,6vw,4rem)] lg:text-[clamp(3.5rem,5.5vw,5.5rem)] font-black font-condensed uppercase leading-[0.95] tracking-[-0.04em] text-optimisr-black mb-6 md:mb-8 flex flex-col items-center w-full">
                    <span className="text-center">
                        Turn Every Call <br className="sm:hidden" />
                        <span className="hidden sm:inline"> </span>
                        Into a
                    </span>
                    <div className="text-optimisr-yellow relative w-full h-[1.1em] mt-1 lg:mt-3">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={wordIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5, ease: "anticipate" }}
                                className="absolute left-0 right-0 mx-auto flex justify-center whitespace-nowrap"
                            >
                                {rotatingWords[wordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h1>

                <p className="text-[20px] sm:text-[24px] lg:text-[28px] text-optimisr-black max-w-[700px] mb-8 md:mb-10 leading-relaxed font-medium mx-auto">
                    Your 24/7 Call Answering answers every call, qualifies the lead, and books the job &mdash; while you&apos;re on-site earning money.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="#"
                        className="px-8 py-4 bg-optimisr-black text-white rounded-2xl text-[17px] font-bold hover:scale-105 active:scale-95 transition-all"
                    >
                        Hear a Demo Call
                    </a>
                    <a
                        href="#pricing"
                        className="px-8 py-4 border-2 border-optimisr-black text-optimisr-black rounded-2xl text-[17px] font-bold hover:scale-105 active:scale-95 transition-all"
                    >
                        See Pricing
                    </a>
                </div>
            </div>

            {/* Animation Stage */}
            <div className="w-full mt-4 md:mt-8 px-4 flex-shrink-0">
                <DesktopNodeGraph activeIndex={nodeIndex} />
                <MobileNodeGraph activeIndex={nodeIndex} />
            </div>

        </section>
    );
};

export default Hero;
