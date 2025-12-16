"use client";

import { DollarSign, Users, Eye, Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";

export default function TutorDashboard() {
    const stats = [
        { label: "Total Earnings", value: "$3,240", change: "+12%", icon: DollarSign, color: "bg-green-50 text-green-600" },
        { label: "Active Students", value: "24", change: "+4", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "Profile Views", value: "1.2k", change: "+18%", icon: Eye, color: "bg-purple-50 text-purple-600" },
    ];

    const upcomingSessions = [
        { id: 1, student: "Alex M.", time: "4:00 PM - 5:00 PM", subject: "Python Basics", status: "Confirm" },
        { id: 2, student: "Sarah C.", time: "5:30 PM - 6:30 PM", subject: "Data Structures", status: "Confirm" },
    ];

    const requests = [
        { id: 1, student: "John Doe", subject: "Advanced Java", time: "Tomorrow, 10 AM", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" },
        { id: 2, student: "Emma W.", subject: "Spring Boot", time: "Fri, 2 PM", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Tutor Dashboard</h1>
                    <p className="text-slate-500">Manage your business and schedule.</p>
                </div>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                    Share Profile Link
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500 font-medium mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 inline-block">{stat.change} this month</span>
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Schedule */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-slate-400" /> Today's Schedule
                    </h3>

                    <div className="space-y-4 relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100"></div>
                        {upcomingSessions.map((session, i) => (
                            <div key={i} className="relative z-10 pl-10">
                                <div className="absolute left-2 top-3 w-4 h-4 rounded-full bg-white border-4 border-primary"></div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-bold text-slate-900">{session.subject}</h4>
                                            <p className="text-sm text-slate-500 mb-2">with {session.student}</p>
                                            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                                                <Clock className="w-3 h-3" /> {session.time}
                                            </span>
                                        </div>
                                        <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90">
                                            Join Room
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Empty State Mock */}
                        <div className="relative z-10 pl-10 opacity-50">
                            <div className="absolute left-2 top-3 w-4 h-4 rounded-full bg-slate-200"></div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 border-dashed flex items-center justify-center h-24">
                                <span className="text-sm text-slate-400 font-medium">No more sessions today</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Requests */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 h-fit">
                    <h3 className="font-bold text-lg text-slate-900 mb-6">Pending Requests <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full ml-2">2</span></h3>
                    <div className="space-y-4">
                        {requests.map((req, i) => (
                            <div key={i} className="border border-slate-100 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <Image src={req.image} alt={req.student} width={40} height={40} className="rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">{req.student}</h4>
                                        <p className="text-xs text-slate-500">{req.subject}</p>
                                    </div>
                                </div>
                                <p className="text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded-lg mb-4 flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> {req.time}
                                </p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-green-50 text-green-600 hover:bg-green-100 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1">
                                        <CheckCircle className="w-3 h-3" /> Accept
                                    </button>
                                    <button className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1">
                                        <XCircle className="w-3 h-3" /> Decline
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
