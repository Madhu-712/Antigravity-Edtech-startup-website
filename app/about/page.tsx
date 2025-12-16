"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Target, Heart, ArrowRight, Calendar } from "lucide-react";

export default function AboutPage() {
    const blogs = [
        {
            id: 1,
            title: "The Future of AI in Education",
            date: "Dec 15, 2024",
            excerpt: "How Large Language Models are personalizing the learning experience for students worldwide.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Top 5 Study Techniques for Finals",
            date: "Dec 10, 2024",
            excerpt: "Master the art of retention with active recall and spaced repetition strategies.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Why Coding is the New Literacy",
            date: "Nov 28, 2024",
            excerpt: "Understanding the basics of programming is becoming essential for every modern career path.",
            image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=400&auto=format&fit=crop"
        }
    ];

    const team = [
        { name: "Dr. Emily Carter", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
        { name: "James Rodriguez", role: "Head of Product", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
        { name: "Sarah Chen", role: "Chief Learning Officer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Header (Simplified for now, will be replaced by global Navbar) */}
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
                {/* Mission Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-wide uppercase text-sm">Our Mission</span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8">
                            Democratizing Access to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">World-Class Education</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-12">
                            We believe every student deserves a personalized learning journey. By connecting passionate experts with curious minds and leveraging cutting-edge AI, we're tearing down barriers to academic excellence.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 bg-blue-50 rounded-2xl">
                                <Users className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Expert Community</h3>
                                <p className="text-slate-600 text-sm">A strictly vetted network of top-tier tutors from Ivy League universities and leading tech companies.</p>
                            </div>
                            <div className="p-6 bg-purple-50 rounded-2xl">
                                <Target className="w-10 h-10 text-purple-600 mb-4" />
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Precision Matching</h3>
                                <p className="text-slate-600 text-sm">Our AI analyzes learning styles to find the perfect mentor-student fit for maximum retention.</p>
                            </div>
                            <div className="p-6 bg-pink-50 rounded-2xl">
                                <Heart className="w-10 h-10 text-pink-600 mb-4" />
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Student Centric</h3>
                                <p className="text-slate-600 text-sm">Everything we do revolves around one goal: helping students achieve their full potential.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-20 px-4 bg-slate-50 border-y border-slate-200">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Strategic Partners</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Collaborating with industry leaders and top universities to design curriculum that works.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Tech Giants", desc: "Curriculum reviewed by Google & Meta engineers.", icon: "💻" },
                                { name: "Ivy League", desc: "Tutors recruited from Harvard, MIT, and Stanford.", icon: "🎓" },
                                { name: "EdTech Alliance", desc: "Certified for global education standards.", icon: "🌍" },
                                { name: "Startup Incubators", desc: "Direct internship pathways for top students.", icon: "🚀" }
                            ].map((p, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all text-center group">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
                                    <h3 className="font-bold text-slate-900 mb-2">{p.name}</h3>
                                    <p className="text-sm text-slate-500">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-4 bg-slate-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet the Visionaries</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                    <div className="w-32 h-32 relative mx-auto mb-6 rounded-full overflow-hidden">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Latest Blogs Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-primary font-bold tracking-wide uppercase text-sm">Insights</span>
                                <h2 className="text-3xl font-bold text-slate-900 mt-2">Latest from Our Blog</h2>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                                View All Posts <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <article key={blog.id} className="group cursor-pointer">
                                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                        <Calendar className="w-3 h-3" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 text-center md:hidden">
                            <button className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                                View All Posts <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
