"use client";

import { Navbar } from "@/components/ui/navbar";
import { Mic, Video, Users, Clock, ArrowRight, BrainCircuit } from "lucide-react";
import Image from "next/image";

export default function MockInterviewsPage() {
    const interviews = [
        {
            id: 1,
            title: "Frontend System Design",
            role: "Senior Frontend Engineer",
            company: "Google Style",
            duration: "45 mins",
            participants: 1240,
            difficulty: "Hard",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Behavioral: Leadership",
            role: "Engineering Manager",
            company: "Amazon Style",
            duration: "30 mins",
            participants: 3500,
            difficulty: "Medium",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Data Structures & Algos",
            role: "SDE I / SDE II",
            company: "Meta Style",
            duration: "60 mins",
            participants: 5100,
            difficulty: "Hard",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Machine Learning Design",
            role: "ML Engineer",
            company: "Netflix Style",
            duration: "60 mins",
            participants: 890,
            difficulty: "Advanced",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Product Management Case",
            role: "Product Manager",
            company: "Uber Style",
            duration: "45 mins",
            participants: 1500,
            difficulty: "Medium",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "DevOps Troubleshooting",
            role: "DevOps Engineer",
            company: "Microsoft Style",
            duration: "50 mins",
            participants: 600,
            difficulty: "Medium",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 pt-20">
                <section className="bg-slate-900 text-white py-20 px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Master Your Interview</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Practice with AI-driven mock interviews simulation or book a session with an industry expert to get real-time feedback.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
                            <BrainCircuit className="w-5 h-5" /> Start AI Practice
                        </button>
                    </div>
                </section>

                <section className="py-20 px-4 max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Popular Scenarios</h2>
                            <p className="text-slate-600 mt-2">Curated lists of questions from top tech companies.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {interviews.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
                                <div className="h-48 relative">
                                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {item.difficulty}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500 mb-4">{item.role} • {item.company}</p>

                                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.duration}</div>
                                        <div className="flex items-center gap-1"><Users className="w-4 h-4" /> {item.participants}</div>
                                    </div>

                                    <button className="w-full border border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                        Start Session <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
