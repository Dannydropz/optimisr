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
    const W = 500, H = 720, CX = 250, CY = 360;
    // Vertical positions — order matches graphNodes: in1, out1, in2, out2, in3, out3
    const vPos = [
        { svgX: 80,  svgY: 145, lOff:  45, lX: '0%'    }, // in1  top-left    → label RIGHT
        { svgX: 80,  svgY: 575, lOff:  45, lX: '0%'    }, // out1 bottom-left  → label RIGHT
        { svgX: 250, svgY: 115, lOff:  45, lX: '0%'    }, // in2  top-center   → label RIGHT
        { svgX: 250, svgY: 605, lOff: -45, lX: '-100%' }, // out2 bottom-center → label LEFT
        { svgX: 420, svgY: 145, lOff: -45, lX: '-100%' }, // in3  top-right    → label LEFT
        { svgX: 420, svgY: 575, lOff: -45, lX: '-100%' }, // out3 bottom-right  → label LEFT
    ];
    const getPath = (svgX: number, svgY: number, side: string) =>
        side === 'left'
            ? `M ${svgX} ${svgY} C ${svgX} ${(svgY + CY) / 2}, ${CX} ${(svgY + CY) / 2}, ${CX} ${CY}`
            : `M ${CX} ${CY} C ${CX} ${(CY + svgY) / 2}, ${svgX} ${(CY + svgY) / 2}, ${svgX} ${svgY}`;
    return (
        <div className="flex w-full h-full items-center justify-center overflow-hidden">
            <div className="relative flex-shrink-0 scale-[0.62] md:scale-[0.68] lg:scale-[0.80] xl:scale-[0.92] origin-center" style={{ width: W, height: H }}>
                <svg className="absolute inset-0 pointer-events-none" width={W} height={H}>
                    <circle cx="25"  cy="200" r="4" fill="#d8b4e2" opacity="0.4"/>
                    <circle cx="25"  cy="520" r="6" fill="#a7f3d0" opacity="0.4"/>
                    <circle cx="475" cy="200" r="5" fill="#bfdbfe" opacity="0.4"/>
                    <circle cx="475" cy="520" r="4" fill="#d8b4e2" opacity="0.4"/>
                    <circle cx="155" cy="220" r="14" fill="none" stroke="#bfdbfe" strokeWidth="1" opacity="0.25"/>
                    <rect x="356" y="280" width="12" height="12" fill="none" stroke="#d8b4e2" strokeWidth="1" opacity="0.3" transform="rotate(25 362 286)"/>
                    {graphNodes.map((node, i) => {
                        const { svgX, svgY } = vPos[i];
                        const pathId = `vp-${i}`;
                        const pathD = getPath(svgX, svgY, node.side);
                        const dots = [
                            { dur: `${1.4 + (i * 0.37) % 1.1}s`, begin: '0s' },
                            { dur: `${1.1 + (i * 0.53) % 1.3}s`, begin: `${0.4 + (i * 0.29) % 1.2}s` },
                            { dur: `${1.6 + (i * 0.61) % 0.9}s`, begin: `${0.9 + (i * 0.41) % 1.5}s` },
                        ];
                        return (
                            <g key={pathId}>
                                <defs><path id={pathId} d={pathD}/></defs>
                                <path d={pathD} stroke={node.color} strokeWidth="2" fill="none" opacity="0.15"/>
                                <path d={pathD} stroke={node.color} strokeWidth="2" fill="none" strokeDasharray="4 16" className="animate-flow-line opacity-60"/>
                                {dots.map((dot, di) => (
                                    <circle key={di} r="4.5" fill={node.color} opacity="0.85">
                                        <animateMotion dur={dot.dur} begin={dot.begin} repeatCount="indefinite" rotate="auto">
                                            <mpath href={`#${pathId}`}/>
                                        </animateMotion>
                                    </circle>
                                ))}
                            </g>
                        );
                    })}
                    <g transform={`translate(${CX},${CY})`} className="animate-center-pulse">
                        <circle cx="0" cy="0" r="105" fill="none" stroke="#d8b4e2" strokeWidth="2" opacity="0.4"/>
                        <circle cx="0" cy="0" r="125" fill="none" stroke="#a7f3d0" strokeWidth="1" opacity="0.3"/>
                    </g>
                    <g transform={`translate(${CX},${CY})`}>
                        <circle cx="0" cy="0" r="85" fill="none" stroke="#F9E547" strokeWidth="4" className="animate-emanate-pulse"/>
                    </g>
                </svg>
                <div className="absolute z-20 flex items-center justify-center bg-white rounded-full w-[170px] h-[170px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50"
                    style={{ left: CX, top: CY, transform: 'translate(-50%,-50%)' }}>
                    <Image src="/logo.png" alt="Optimisr" width={130} height={36} className="w-[120px] h-auto" priority/>
                </div>
                {graphNodes.map((node, i) => {
                    const { svgX, svgY, lOff, lX } = vPos[i];
                    const isActive = i === activeIndex;
                    const Icon = node.icon;
                    return (
                        <div key={node.id}>
                            <div className="absolute z-10 w-16 h-16 bg-white rounded-full border border-gray-100 flex items-center justify-center transition-all duration-500"
                                style={{ left: svgX, top: svgY, transform: `translate(-50%,-50%) scale(${isActive ? 1.15 : 1})`, color: node.color, boxShadow: isActive ? `0 12px 30px ${node.color}30` : '0 4px 10px rgba(0,0,0,0.05)' }}>
                                <Icon/>
                            </div>
                            <div className="absolute z-30 transition-all duration-500 ease-out"
                                style={{ left: svgX + lOff, top: svgY, transform: `translate(${lX},-50%) translateY(${isActive ? '0' : '10px'})`, opacity: isActive ? 1 : 0, pointerEvents: isActive ? 'auto' : 'none', minWidth: 185 }}>
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-4 flex flex-col">
                                    <span className="font-bold text-optimisr-black text-[16px] mb-0.5">{node.title}</span>
                                    <span className="text-gray-500 text-[13px]">{node.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}



const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [nodeIndex, setNodeIndex] = useState(0);

    const rotatingWords = [
        "Patients.",
        "Bookings.",
        "5-Star Reviews.",
        "Revenue."
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
        <section className="relative z-0 bg-[#FAF9F6] font-sans overflow-hidden">
            <style>{`
                @keyframes flowLine {
                    to { stroke-dashoffset: -20; }
                }
                .animate-flow-line {
                    animation: flowLine 0.7s linear infinite;
                }
                @keyframes emanatePulse {
                    0%   { r: 85; opacity: 0.7; }
                    100% { r: 160; opacity: 0; }
                }
                .animate-emanate-pulse {
                    animation: emanatePulse 2.2s ease-out infinite;
                }
                @keyframes centerPulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                .animate-center-pulse {
                    animation: centerPulse 3s ease-in-out infinite;
                    transform-origin: center;
                }

            `}</style>

            {/* ── DESKTOP: two-column above-the-fold layout ── */}
            <div className="hidden md:grid md:grid-cols-2 md:min-h-screen md:items-center px-8 lg:px-16 xl:px-24 pt-24">

                {/* Left column — copy */}
                <div className="flex flex-col items-start text-left pr-8 lg:pr-12 z-10">

                    <div className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-widest text-optimisr-black uppercase border-2 border-optimisr-black/10 bg-white/50">
                        Optimisr™ Aesthetics System
                    </div>

                    <h1 className="text-[clamp(4rem,6.5vw,7rem)] font-black font-condensed uppercase leading-[0.88] tracking-[-0.04em] text-optimisr-black mb-6 flex flex-col items-start w-full">
                        <motion.span initial={{ opacity: 0, y: 50, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block">Getting</motion.span>
                        <motion.span initial={{ opacity: 0, y: 50, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="block">Clinics</motion.span>
                        <motion.span initial={{ opacity: 0, y: 50, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="block">More</motion.span>
                        <motion.div initial={{ opacity: 0, y: 50, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} className="text-optimisr-yellow relative w-full h-[1.05em] mt-2">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={wordIndex}
                                    initial={{ opacity: 0, y: 36 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -36 }}
                                    transition={{ duration: 0.5, ease: "anticipate" }}
                                    className="absolute left-0 whitespace-nowrap"
                                >
                                    {rotatingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>
                    </h1>

                    <p className="text-[16px] lg:text-[18px] text-gray-500 max-w-[560px] mb-10 leading-relaxed">
                        Discover Optimisr™, the system powering the UK&apos;s fastest growing aesthetic clinics.
                    </p>

                    <div className="flex flex-row items-center gap-4">
                        <a
                            href="#what-we-do"
                            className="px-8 py-4 bg-optimisr-black text-white rounded-2xl text-[17px] font-bold hover:scale-105 active:scale-95 transition-all"
                        >
                            See How It Works
                        </a>
                        <a
                            href="#audit"
                            className="px-8 py-4 border-2 border-optimisr-black text-optimisr-black rounded-2xl text-[17px] font-bold hover:scale-105 active:scale-95 transition-all"
                        >
                            Book A Call
                        </a>
                    </div>
                </div>

                {/* Right column — graph animation */}
                <div className="relative h-[min(80vh,600px)] w-full">
                    <DesktopNodeGraph activeIndex={nodeIndex} />
                </div>
            </div>

            {/* ── MOBILE: stacked layout ── */}
            <div className="md:hidden flex flex-col items-center text-center px-6 pt-36 pb-16">

                <div className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-widest text-optimisr-black uppercase border-2 border-optimisr-black/10 bg-white/50">
                    Optimisr™ Aesthetics System
                </div>

                <h1 className="text-[clamp(2.5rem,10vw,4rem)] font-black font-condensed uppercase leading-[0.95] tracking-[-0.04em] text-optimisr-black mb-6 flex flex-col items-center w-full">
                    <motion.span initial={{ opacity: 0, y: 50, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-center block">Getting Clinics More</motion.span>
                    <motion.div initial={{ opacity: 0, y: 50, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-optimisr-yellow relative w-full h-[1.1em] mt-1">
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
                    </motion.div>
                </h1>

                <p className="text-[16px] lg:text-[18px] text-gray-500 max-w-[560px] mb-8 leading-relaxed mx-auto">
                    Discover Optimisr™, the system powering the UK&apos;s fastest growing aesthetic clinics.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
                    <a href="#what-we-do" className="w-full sm:w-auto px-8 py-4 bg-optimisr-black text-white rounded-2xl text-[17px] font-bold hover:scale-105 active:scale-95 transition-all">
                        See How It Works
                    </a>
                    <a href="#audit" className="w-full sm:w-auto px-8 py-4 border-2 border-optimisr-black text-optimisr-black rounded-2xl text-[17px] font-bold hover:scale-105 active:scale-95 transition-all">
                        Book A Call
                    </a>
                </div>

                <div className="w-full h-[500px] mt-4">
                    <DesktopNodeGraph activeIndex={nodeIndex} />
                </div>
            </div>

        </section>
    );
};

export default Hero;
