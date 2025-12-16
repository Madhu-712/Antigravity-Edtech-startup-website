"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Star, Quote, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col bg-white">
            {/* Navigation */}
            <header className="px-8 h-20 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <Link className="flex items-center gap-3 group" href="#">
                    <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                        <Image src="/logo.png" alt="Edu-genius-Tech Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-slate-900">Edu-genius-Tech</span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/search">
                        Find Tutors
                    </Link>
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#how-it-works">
                        How it Works
                    </Link>
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/become-tutor">
                        Become a Tutor
                    </Link>
                </nav>
                <div className="flex gap-4">
                    <Link href="/auth">
                        <button className="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-full transition-colors">Log In</button>
                    </Link>
                    <Link href="/search">
                        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                            Get Started
                        </button>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
                <div className="animate-in fade-in zoom-in duration-700 slide-in-from-bottom-4">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
                        Empowering Minds, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Shaping Futures.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Unlock your full potential with personalized, AI-enhanced tutoring from world-class experts. Experience the future of learning today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/search">
                            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:scale-105 transition-all shadow-xl">
                                Find Your Tutor
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsDemoOpen(true)}
                            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-700"
                        >
                            View Demo
                        </button>
                    </div>
                </div>

                {/* Trust/Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center opacity-70">
                    <div>
                        <p className="text-3xl font-bold text-slate-900">10k+</p>
                        <p className="text-sm text-slate-500">Students</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-slate-900">500+</p>
                        <p className="text-sm text-slate-500">Expert Tutors</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-slate-900">98%</p>
                        <p className="text-sm text-slate-500">Satisfaction</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-slate-900">24/7</p>
                        <p className="text-sm text-slate-500">Support</p>
                    </div>
                </div>
            </section>

            {/* Trusted By / Partners Section */}
            <section className="py-12 border-b border-slate-100 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Leading Institutions</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using text placeholders with icons as mock logos */}
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700"><span className="text-2xl">🏛️</span> Stanford</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700"><span className="text-2xl">💻</span> Google</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700"><span className="text-2xl">🎓</span> MIT</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700"><span className="text-2xl">☁️</span> AWS</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700"><span className="text-2xl">🚀</span> NASA</div>
                    </div>
                </div>
            </section>

            {/* Video Demo Section ("See How It Works") */}
            <section id="how-it-works" className="py-20 px-4 bg-slate-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">See How It Works</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                        From finding the perfect mentor to mastering your subject—see the journey in action.
                    </p>

                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-slate-900">
                        <SimulatedVideoPlayer
                            slides={[
                                "/flow_signup.png",
                                "/lms_dashboard.png",
                                "/video_thumb.png",
                                "/lms_live_class.png",
                                "/lms_analytics.png"
                            ]}
                            captions={[
                                "1. Create Your Account",
                                "2. Find Perfect Tutors",
                                "3. Connect Instantly",
                                "4. Interactive Learning",
                                "5. Review Progress"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
                        Success Stories from Our Students
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The AI matching is incredible. I found a tutor who perfectly understood my learning style for Physics.",
                                author: "Alex M.",
                                role: "Grade 11 Student",
                                bg: "bg-blue-50"
                            },
                            {
                                quote: "My grades in Calculus went from C to A in just 3 months. The virtual tools make it feel like being in the same room.",
                                author: "Priya S.",
                                role: "College Freshman",
                                bg: "bg-purple-50"
                            },
                            {
                                quote: "As a CS major, having a code editor built right into the call is a game changer. Best platform out there.",
                                author: "James T.",
                                role: "Computer Science Major",
                                bg: "bg-indigo-50"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className={`p-8 rounded-2xl ${testimonial.bg} hover:-translate-y-1 transition-transform duration-300`}>
                                <Quote className="w-10 h-10 text-slate-300 mb-6" />
                                <p className="text-lg font-medium text-slate-800 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LMS Demo Modal */}
            {isDemoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsDemoOpen(false)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-20"
                        >
                            <X className="w-6 h-6 text-slate-900" />
                        </button>
                        <div className="p-6 border-b">
                            <h3 className="text-2xl font-bold">LMS Dashboard Tour</h3>
                            <p className="text-slate-500">See how our Learning Management System helps you track progress.</p>
                        </div>

                        {/* Simulated Video Player */}
                        <div className="relative aspect-video bg-black group text-white">
                            <SimulatedVideoPlayer
                                slides={[
                                    "/lms_dashboard.png",
                                    "/lms_live_class.png",
                                    "/lms_analytics.png"
                                ]}
                                captions={[
                                    "Student Dashboard",
                                    "Live Classroom",
                                    "Performance Analytics"
                                ]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

function SimulatedVideoPlayer({ slides, captions }: { slides: string[], captions: string[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full h-full">
            {slides.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                    <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" />
                </div>
            ))}

            {/* Fake Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent flex items-end px-6 py-4 z-10">
                <div className="w-full flex items-center gap-4">
                    <Play className="w-5 h-5 text-white fill-white" />
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-white/80 font-medium tracking-wide text-shadow">
                            <span>{captions[currentSlide]}</span>
                            <span>{currentSlide + 1} / {slides.length}</span>
                        </div>
                        <div className="h-1 bg-white/30 rounded-full overflow-hidden w-full">
                            <div className="h-full bg-primary w-full origin-left animate-[progress_3s_linear_infinite]" key={currentSlide} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
