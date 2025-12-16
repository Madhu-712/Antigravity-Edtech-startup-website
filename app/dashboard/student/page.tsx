"use client";

import { Clock, Play, Calendar, Trophy, Zap, ArrowRight, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudentDashboard() {
    const nextClass = {
        title: "Advanced Python Algorithms",
        tutor: "Sarah Jenkins",
        time: "Today, 4:00 PM",
        timeLeft: "2 hours",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    };

    const upcomingClasses = [
        { id: 1, title: "Calculus II: Integration", tutor: "Dr. Aravind Patel", date: "Tomorrow, 2:00 PM", type: "Live" },
        { id: 2, title: "Machine Learning Basics", tutor: "Elena Rostova", date: "Wed, 10:00 AM", type: "Live" },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Welcome back, Alex! 👋</h1>
                    <p className="text-slate-500">You're making great progress. Keep it up!</p>
                </div>
                <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-slate-900 border border-slate-200 bg-white px-4 py-2 rounded-full shadow-sm">
                        🕒 Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Main Content) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Next Class Card */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="space-y-4">
                                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    <Clock className="w-3 h-3" /> Up Next • in {nextClass.timeLeft}
                                </span>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{nextClass.title}</h2>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/50">
                                            <Image src={nextClass.image} alt={nextClass.tutor} width={32} height={32} className="object-cover" />
                                        </div>
                                        <span className="opacity-90">with {nextClass.tutor}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg">
                                <Video className="w-5 h-5" /> Join Class
                            </button>
                        </div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4"><Clock className="w-5 h-5" /></div>
                            <p className="text-3xl font-bold text-slate-900">12.5</p>
                            <p className="text-xs text-slate-500 font-medium uppercase mt-1">Hours Learned</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4"><Zap className="w-5 h-5" /></div>
                            <p className="text-3xl font-bold text-slate-900">8</p>
                            <p className="text-xs text-slate-500 font-medium uppercase mt-1">Classes Attended</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4"><Trophy className="w-5 h-5" /></div>
                            <p className="text-3xl font-bold text-slate-900">Top 10%</p>
                            <p className="text-xs text-slate-500 font-medium uppercase mt-1">Student Rank</p>
                        </div>
                    </div>

                    {/* Upcoming List */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-slate-900 text-lg">Upcoming Sessions</h3>
                            <Link href="#" className="text-sm font-medium text-primary hover:underline">View Calendar</Link>
                        </div>
                        <div className="space-y-4">
                            {upcomingClasses.map(cls => (
                                <div key={cls.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-slate-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex flex-col items-center justify-center text-slate-600">
                                            <span className="text-xs font-bold uppercase">{cls.date.split(',')[0]}</span>
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{cls.title}</h4>
                                            <p className="text-sm text-slate-500">with {cls.tutor} • {cls.date.split(',')[1]}</p>
                                        </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-slate-400 hover:text-primary"><ArrowRight className="w-5 h-5" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar/Extras) */}
                <div className="space-y-8">
                    {/* Recommended Tutors */}
                    <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100">
                        <h3 className="font-bold text-indigo-900 mb-4">Recommended for You</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=100&auto=format&fit=crop" alt="Rec" fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-slate-900">Lisa Wang</h4>
                                    <p className="text-xs text-slate-500">Swift & iOS Dev</p>
                                    <div className="flex gap-1 mt-2">
                                        <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">New</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <Link href="/search" className="text-sm font-bold text-indigo-600 hover:underline">Find more tutors</Link>
                            </div>
                        </div>
                    </div>

                    {/* Daily Challenge */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Daily Goal</span>
                                <h3 className="font-bold text-slate-900 text-lg">Solve 5 Problems</h3>
                            </div>
                            <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                                <Trophy className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                            <div className="bg-orange-500 h-full w-3/5"></div>
                        </div>
                        <p className="text-sm text-slate-500 mb-4">3/5 Completed. Keep going alex!</p>
                        <button className="w-full py-2 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50">
                            Continue Practice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
