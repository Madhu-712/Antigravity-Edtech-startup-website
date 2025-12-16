"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, BookOpen, Code2, GraduationCap, Users, FileText, FolderGit2 } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
            isScrolled ? "bg-white/90 backdrop-blur-md h-16 shadow-sm border-slate-200" : "bg-white h-20 border-transparent"
        )}>
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link className="flex items-center gap-2 group" href="/">
                    <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl text-slate-900 tracking-tight">Edu-genius-Tech</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/search" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Find Tutors
                    </Link>

                    {/* Solutions Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors py-4">
                            Solutions <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="grid grid-cols-2 gap-4">
                                <Link href="/solutions" className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">K-12 Tutoring</h4>
                                        <p className="text-xs text-slate-500 mt-1">Personalized support for school curriculum.</p>
                                    </div>
                                </Link>
                                <Link href="/solutions" className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Test Prep</h4>
                                        <p className="text-xs text-slate-500 mt-1">SAT, ACT, JEE & Competitive Exams.</p>
                                    </div>
                                </Link>
                                <Link href="/solutions" className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Skill Development</h4>
                                        <p className="text-xs text-slate-500 mt-1">Coding, Design & Professional Skills.</p>
                                    </div>
                                </Link>
                                <Link href="/solutions" className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">For Schools</h4>
                                        <p className="text-xs text-slate-500 mt-1">LMS & Institutional Solutions.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors py-4">
                            Resources <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="grid grid-cols-1 gap-2">
                                <Link href="/projects" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-8 h-8 bg-green-50 text-green-600 rounded-md flex items-center justify-center shrink-0">
                                        <FolderGit2 className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-slate-900 text-sm">Projects Library</span>
                                </Link>
                                <Link href="/mock-papers" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-md flex items-center justify-center shrink-0">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-slate-900 text-sm">Mock Question Papers</span>
                                </Link>
                                <Link href="/mock-interviews" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded-md flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-slate-900 text-sm">Mock Interviews</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    <Link href="/auth">
                        <button className={cn("text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-full transition-colors", isScrolled ? "text-slate-900" : "text-slate-700")}>
                            Log In
                        </button>
                    </Link>
                    <Link href="/search">
                        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
