"use client";

import React from "react";

const SiteFooter: React.FC = () => {
    return (
        <footer className="relative z-10 bg-black text-white pt-48 pb-12 px-6 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                {/* Top */}
                <div className="flex flex-col lg:flex-row justify-between items-start border-b border-white/10 pb-20 mb-20 gap-16">
                    <div className="flex flex-col gap-10 max-w-sm items-start">
                        <img
                            src="/logo-white.png"
                            alt="optimisr"
                            className="h-10 md:h-14 w-auto object-contain shrink-0 self-start"
                        />
                        <p className="text-[20px] font-medium leading-[1.3] text-white/50">
                            Have questions or want to chat? Drop us a line → <a href="mailto:hello@optimisr.com" className="text-white">hello@optimisr.com</a>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 w-full lg:w-auto">
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Platform</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">AI Employees</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Speed to Lead</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">AI Voice Agent</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Solutions</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Lead Capture</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Appointment Booking</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Follow-Up Automation</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Review Management</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Industries</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Home Services</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Real Estate</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Dental & Medical</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Auto Dealers</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Company</h4>
                            <ul className="space-y-3 text-[17px] font-medium">
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-optimisr-yellow transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
                    <div className="flex gap-10 items-center">
                        <span className="text-[14px] font-medium text-white/30">© 2025 Optimisr AI. All rights reserved.</span>
                    </div>
                    <div className="flex gap-10 items-center text-[14px] font-medium text-white/40">
                        <a href="#" className="hover:text-white">YouTube</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Privacy Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
