"use client";

import Link from "next/link";
import Image from "next/image";
import { GraduationCap, BookOpen, Code2, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
    const solutions = [
        {
            id: "k12",
            title: "K-12 Tutoring",
            icon: <BookOpen className="w-8 h-8" />,
            description: "Comprehensive support for school curriculum from Kindergarten to Grade 12. Math, Science, English, and more.",
            features: ["Common Core Aligned", "Homework Help", "Parental Dashboard"],
            color: "bg-blue-50 text-blue-600"
        },
        {
            id: "test-prep",
            title: "Test Preparation",
            icon: <CheckCircle2 className="w-8 h-8" />,
            description: "Ace your entrance exams with specialized coaching. SAT, ACT, JEE, NEET, and GRE prep courses.",
            features: ["Mock Tests", "Performance Analytics", "Top Ranker Mentors"],
            color: "bg-purple-50 text-purple-600"
        },
        {
            id: "skills",
            title: "Skill Development",
            icon: <Code2 className="w-8 h-8" />,
            description: "Future-proof your career with in-demand technical skills. Programming, Data Science, and Design.",
            features: ["Project-Based", "Industry Certifications", "Portfolio Building"],
            color: "bg-indigo-50 text-indigo-600"
        },
        {
            id: "schools",
            title: "LMS for Schools",
            icon: <Users className="w-8 h-8" />,
            description: "Empower your institution with our state-of-the-art Learning Management System.",
            features: ["Whitelabel Solution", "Attendance Tracking", "Virtual Classroom"],
            color: "bg-pink-50 text-pink-600"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Header (Simplified) */}
            <header className="px-6 h-20 flex items-center justify-between border-b bg-white sticky top-0 z-30">
                <Link className="flex items-center gap-2" href="/">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl text-slate-900">Edu-genius-Tech</span>
                </Link>
                <div className="flex gap-4">
                    <Link href="/auth">
                        <button className="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-full transition-colors">Log In</button>
                    </Link>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="py-20 px-4 bg-slate-900 text-white text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Solutions for Every Learner</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Whether you're a student aiming for top grades, a professional upskilling, or an institution seeking digital transformation.
                    </p>
                </section>

                {/* Feature Grid */}
                <section className="py-20 px-4 max-w-7xl mx-auto -mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((s) => (
                            <div key={s.id} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
                                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    {s.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h2>
                                <p className="text-slate-600 mb-8 text-lg">{s.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {s.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className="flex items-center text-primary font-bold group">
                                    Explore {s.title} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-4 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 max-w-5xl mx-auto text-white">
                        <h2 className="text-3xl font-bold mb-6">Not sure which path is right for you?</h2>
                        <p className="text-lg text-blue-100 mb-8">Take our free assessment test and get a personalized learning roadmap in minutes.</p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                            Take Free Assessment
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
