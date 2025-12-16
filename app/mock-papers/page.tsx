"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, Download, Clock, CheckCircle } from "lucide-react";

export default function MockPapersPage() {
    const papers = [
        {
            id: 1,
            title: "Calculus I Final Exam 2024",
            subject: "Mathematics",
            duration: "180 mins",
            questions: 25,
            downloads: 1540
        },
        {
            id: 2,
            title: "Physics 101 Midterm",
            subject: "Physics",
            duration: "90 mins",
            questions: 40,
            downloads: 890
        },
        {
            id: 3,
            title: "Introduction to CS: Python",
            subject: "Computer Science",
            duration: "120 mins",
            questions: 30,
            downloads: 2100
        },
        {
            id: 4,
            title: "Chemistry: Organic Reactions",
            subject: "Chemistry",
            duration: "60 mins",
            questions: 20,
            downloads: 650
        },
        {
            id: 5,
            title: "SAT Practice Test #5",
            subject: "Test Prep",
            duration: "200 mins",
            questions: 154,
            downloads: 5400
        },
        {
            id: 6,
            title: "Data Structures Quiz",
            subject: "Computer Science",
            duration: "45 mins",
            questions: 15,
            downloads: 1200
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Header */}
            <header className="px-6 h-20 flex items-center justify-between border-b bg-white sticky top-0 z-30">
                <Link className="flex items-center gap-2" href="/">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl text-slate-900">Edu-genius-Tech</span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/search">Find Tutors</Link>
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/projects">Projects</Link>
                    <Link className="text-sm font-medium text-primary hover:text-primary transition-colors" href="/mock-papers">Mock Question Papers</Link>
                </nav>
                <div className="flex gap-4">
                    <Link href="/auth">
                        <button className="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-full transition-colors">Log In</button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Mock Question Papers</h1>
                    <p className="text-lg text-slate-600">
                        Practice makes perfect. Download past exams and mock tests to prepare for your next big challenge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {papers.map((paper) => (
                        <div key={paper.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all flex items-center gap-6 group">
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <FileText className="w-8 h-8" />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{paper.title}</h3>
                                <p className="text-sm text-slate-500 font-medium mb-3">{paper.subject}</p>

                                <div className="flex items-center gap-4 text-xs text-slate-400">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {paper.duration}</span>
                                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {paper.questions} Questions</span>
                                </div>
                            </div>

                            <button className="bg-slate-100 text-slate-600 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
