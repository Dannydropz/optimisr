"use client";

import React from "react";

const SiteFooter: React.FC = () => {
    return (
        <footer className="relative z-10 bg-black text-white pt-48 pb-12 px-6 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                {/* Top */}
                <div className="flex flex-col lg:flex-row justify-between items-start border-b border-white/10 pb-20 mb-20 gap-16">
                    <div className="flex flex-col gap-10 max-w-sm items-start">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo-white.png"
                            alt="optimisr"
                            className="h-10 md:h-14 w-auto object-contain shrink-0 self-start"
                        />
                        <p className="text-[20px] font-medium leading-[1.3] text-white/50">
                            Never lose a lead. Built for aesthetic clinics.
                        </p>
                        <p className="text-[17px] font-medium leading-[1.3] text-white/40">
                            Have questions? Drop us a line &rarr; <a href="mailto:hello@optimisr.com" className="text-white">hello@optimisr.com</a>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 w-full lg:w-auto">
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Platform</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="/#how-it-works" className="hover:text-optimisr-yellow transition-colors">How It Works</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">AI Call Answering</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Lead Response Automation</a></li>
                                <li><a href="/#skin-analysis" className="hover:text-optimisr-yellow transition-colors">Skin Analysis</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">What We Do</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">24/7 Call Answering</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Instant Lead Response</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Consultation Booking</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Review Automation</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Industries</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Aesthetic Clinics</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Cosmetic Clinics</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Medical Spas</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Skin Clinics</a></li>
                                <li><a href="/#what-we-do" className="hover:text-optimisr-yellow transition-colors">Laser &amp; Beauty Clinics</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Company</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="/#about" className="hover:text-optimisr-yellow transition-colors">About</a></li>
                                <li><a href="/#pricing" className="hover:text-optimisr-yellow transition-colors">Pricing</a></li>
                                <li><a href="/#audit" className="hover:text-optimisr-yellow transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
                    <div className="flex gap-10 items-center">
                        <span className="text-[14px] font-medium text-white/30">© 2026 Optimisr AI. All rights reserved.</span>
                    </div>
                    <div className="flex gap-10 items-center text-[14px] font-medium text-white/40">
                        <a href="#" className="hover:text-white">YouTube</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="/privacy" className="hover:text-white">Privacy Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
