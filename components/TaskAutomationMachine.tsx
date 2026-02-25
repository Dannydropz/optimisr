"use client";

import React from "react";
import { motion } from "framer-motion";

const tasks = [
    { id: 1, label: "New Lead", icon: "🎯", color: "#3B82F6" },
    { id: 2, label: "Respond", icon: "⚡", color: "#EC4899" },
    { id: 3, label: "Qualify", icon: "✅", color: "#10B981" },
    { id: 4, label: "Book Appt", icon: "📅", color: "#F59E0B" },
    { id: 5, label: "Follow Up", icon: "🔄", color: "#8B5CF6" },
];

const TaskAutomationMachine = () => {
    return (
        <div className="relative w-full aspect-square max-w-[620px] flex items-center justify-center select-none overflow-hidden h-[720px]">

            {/* 3D Environment Scene */}
            <div
                className="relative w-full h-full transform-style-3d perspective-2000 flex items-center justify-center"
                style={{ transform: "rotateX(58deg) rotateZ(0deg)" }}
            >

                {/* 1. The Conveyor Belt (Aligned Vertical Axis) */}
                <div className="absolute w-48 h-[2500px] bg-neutral-100 border-x-[1px] border-black/5 transform-style-3d shadow-inner overflow-hidden">
                    {/* Animated Ridges for movement texture */}
                    <motion.div
                        animate={{ y: [0, -100] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full flex flex-col items-center opacity-30"
                    >
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className="w-full h-[1px] bg-black my-12 shrink-0" />
                        ))}
                    </motion.div>

                    {/* Glowing Track Edges */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-optimisr-yellow/20 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-optimisr-yellow/20 to-transparent" />
                </div>

                {/* 2. Tasks Flow (Input -> Machine -> Output) */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transform-style-3d">
                    {tasks.map((task, i) => (
                        <motion.div
                            key={task.id}
                            initial={{ y: 550, opacity: 0 }}
                            animate={{
                                y: -550,
                                opacity: [0, 1, 1, 1, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 1.6,
                                ease: "linear"
                            }}
                            className="absolute w-40 h-40 transform-style-3d"
                        >
                            <PremiumTaskTile task={task} />
                        </motion.div>
                    ))}
                </div>

                {/* 3. The Mac Mini Styled Machine (Yellow) */}
                <div className="relative z-20 w-[340px] h-[340px] transform-style-3d">

                    {/* Soft Shadow on conveyor floor */}
                    <div className="absolute inset-10 bg-black/[0.08] blur-[40px] -translate-z-10 rounded-[4.5rem]" />

                    {/* Machine 3D Body */}
                    <div className="relative w-full h-full transform-style-3d">

                        {/* BOTTOM PAN (Depth) */}
                        <div className="absolute inset-0 bg-optimisr-yellow/10 rounded-[4.5rem] translate-z-0" />

                        {/* FRONT FACE (The Entry Opening) */}
                        <div className="absolute inset-x-0 bottom-0 h-14 bg-optimisr-yellow origin-bottom -rotate-x-90 rounded-b-[2.5rem] flex items-center justify-center border-t border-white/20">
                            {/* The Slot Opening */}
                            <div className="w-52 h-9 bg-neutral-900 rounded-full shadow-[inset_0_4px_16px_rgba(0,0,0,1)] border border-white/5" />
                        </div>

                        {/* REAR FACE (The Exit Opening) */}
                        <div className="absolute inset-x-0 top-0 h-14 bg-optimisr-yellow/80 origin-top rotate-x-90 rounded-t-[2.5rem] flex items-center justify-center">
                            <div className="w-52 h-9 bg-neutral-900 rounded-full shadow-[inset_0_4px_16px_rgba(0,0,0,1)] border border-white/5" />
                        </div>

                        {/* SIDES (Curvature visualization) */}
                        <div className="absolute inset-y-0 left-0 w-14 bg-optimisr-yellow/90 origin-left rotate-y-90 rounded-l-[2.5rem]" />
                        <div className="absolute inset-y-0 right-0 w-14 bg-optimisr-yellow origin-right -rotate-y-90 rounded-r-[2.5rem]" />

                        {/* TOP SURFACE (High-gloss Logo Plate) */}
                        <div className="absolute inset-[-2px] bg-optimisr-yellow border-2 border-white/40 rounded-[4.5rem] translate-z-14 shadow-2xl flex items-center justify-center p-16 overflow-hidden ring-1 ring-black/[0.03]">
                            {/* Premium Sheen / Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10" />
                            <div className="absolute top-0 inset-x-0 h-1/2 bg-white/10 blur-xl opacity-50" />

                            <motion.img
                                animate={{
                                    scale: [1, 1.02, 1],
                                    filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                src="/logo.png"
                                alt="Optimisr"
                                className="w-full h-auto relative z-10 drop-shadow-[0_12px_32px_rgba(0,0,0,0.1)] brightness-110"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Fading Masks */}
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-optimisr-grey to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-optimisr-grey to-transparent z-40 pointer-events-none" />
        </div>
    );
};

// Premium Square Tile matching example vibe
const PremiumTaskTile = ({ task }: { task: typeof tasks[0] }) => {
    return (
        <div className="relative w-full h-full transform-style-3d preserve-3d">
            <div className="absolute inset-4 transform-style-3d bg-white rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/[0.03]">

                {/* 3D BASE SLAB (Thickness) */}
                <div className="absolute inset-x-0 bottom-0 h-5 bg-neutral-200 origin-bottom -rotate-x-90 rounded-b-[2rem]" />
                <div className="absolute inset-y-0 right-0 w-5 bg-neutral-100 origin-right -rotate-y-90 rounded-r-[2rem]" />

                {/* TOP SURFACE CONTENT */}
                <div className="absolute inset-0 bg-white rounded-[2.5rem] translate-z-5 p-5 flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.8)] border border-black/[0.02]">
                    <PremiumTileStateContent task={task} />
                </div>
            </div>
        </div>
    );
};

const PremiumTileStateContent = ({ task }: { task: typeof tasks[0] }) => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            {/* PRE-MACHINE STAGE */}
            <motion.div
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 8, times: [0, 0.48, 0.52, 1], repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-3"
            >
                <div
                    className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-5xl mb-4 bg-neutral-50 shadow-[inset_0_2px_6px_rgba(0,0,0,0.04)]"
                    style={{ color: task.color }}
                >
                    {task.icon}
                </div>
                <span className="text-[15px] font-bold text-black/80 tracking-tight">{task.label}</span>
                <div className="flex items-center gap-1.5 mt-1.5 opacity-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Incoming</span>
                </div>
            </motion.div>

            {/* POST-MACHINE STAGE (Marked as Complete) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1] }}
                transition={{ duration: 8, times: [0, 0.48, 0.52, 1], repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-3"
            >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-4xl text-green-600 mb-4 border border-green-500/20 shadow-[0_8px_16px_rgba(34,197,94,0.1)]">
                    ✓
                </div>
                <span className="text-[15px] font-bold text-black/80 tracking-tight">{task.label}</span>
                <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse" />
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest leading-none">Done</span>
                </div>
            </motion.div>
        </div>
    );
};

export default TaskAutomationMachine;
