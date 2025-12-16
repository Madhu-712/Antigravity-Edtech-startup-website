"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link className="flex items-center gap-2" href="/">
                            <div className="relative w-8 h-8 opacity-90">
                                <Image src="/logo.png" alt="Logo" fill className="object-contain invert" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Edu-genius-Tech</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Unlock your inner genius with world-class tutors. Personalized learning for everyone, anywhere.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/search" className="hover:text-primary transition-colors">Find Tutors</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Project Library</Link></li>
                            <li><Link href="/mock-papers" className="hover:text-primary transition-colors">Mock Papers</Link></li>
                            <li><Link href="/become-tutor" className="hover:text-primary transition-colors">Become a Tutor</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>123 EduTech Plaza,<br />Silicon Valley, CA 94025</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>support@edugenius.tech</span>
                            </li>
                        </ul>
                    </div>

                    {/* Branches Mini List */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Our Centers</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                            <span>🇺🇸 New York</span>
                            <span>🇬🇧 London</span>
                            <span>🇨🇦 Toronto</span>
                            <span>🇸🇬 Singapore</span>
                            <span>🇮🇳 Bangalore</span>
                            <span>🇦🇺 Sydney</span>
                        </div>
                        <Link href="/contact" className="inline-block mt-6 text-primary text-sm font-bold hover:underline">
                            View All Locations →
                        </Link>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2024 Edu-genius-Tech Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
