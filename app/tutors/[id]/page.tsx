import Link from "next/link";
import { tutors } from "@/lib/data";
import { MoveLeft, Star, Clock, GraduationCap, Award, BookOpen, UserCheck, Linkedin, CheckCircle } from "lucide-react";

interface Props {
    params: { id: string }
}

export default function TutorProfilePage({ params }: Props) {
    const tutor = tutors.find(t => t.id === params.id);

    if (!tutor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Tutor not found</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <header className="px-8 h-20 flex items-center border-b bg-white sticky top-0 z-50">
                <Link className="flex items-center justify-center font-bold text-2xl tracking-tight text-slate-900" href="/">
                    Edu-genius-Tech
                </Link>
            </header>

            <main className="flex-1 container mx-auto p-6 max-w-6xl">
                <Link href="/search" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-flex items-center gap-2 group">
                    <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Search
                </Link>

                {/* Hero Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 mb-8">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 relative bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-900">{tutor.name}</h1>
                                <p className="text-xl text-primary font-medium mt-1">{tutor.headline}</p>
                            </div>
                            <Link href={tutor.linkedin} target="_blank" className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6 text-slate-600">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-slate-900">{tutor.rating}</span>
                                <span className="text-sm">({tutor.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-slate-400" />
                                <span>{tutor.yearsExperience} Years Exp.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-slate-400" />
                                <span>{tutor.studentsTaught}+ Students</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {tutor.subjects.map((subject) => (
                                <span key={subject} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium text-sm">
                                    {subject}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Detailed Info */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* About Me */}
                        <section className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-primary rounded-full"></div>
                                About Me
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">{tutor.bio}</p>
                        </section>

                        {/* Methodology */}
                        <section className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-primary" />
                                Teaching Methodology
                            </h2>
                            <blockquote className="border-l-4 border-primary/20 pl-4 italic text-slate-700">
                                "{tutor.methodology}"
                            </blockquote>
                        </section>

                        {/* Achievements */}
                        <section className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6 text-primary" />
                                Achievements
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {tutor.achievements.map((ach) => (
                                    <div key={ach} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-slate-800">{ach}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl sticky top-24">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <p className="text-slate-500 font-medium">Hourly Rate</p>
                                    <p className="text-3xl font-black text-slate-900">${tutor.price}</p>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                    <Star className="w-5 h-5 fill-current" /> {tutor.rating}
                                </div>
                            </div>

                            {/* Date Picker (Simplified) */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Select Date</label>
                                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                                    {[0, 1, 2, 3, 4].map(day => {
                                        const d = new Date();
                                        d.setDate(d.getDate() + day);
                                        return (
                                            <button
                                                key={day}
                                                className="flex-shrink-0 w-14 h-16 rounded-xl border border-slate-200 flex flex-col items-center justify-center hover:border-primary hover:bg-primary/5 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                            >
                                                <span className="text-xs font-bold text-slate-500 uppercase">{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                                <span className="text-lg font-bold text-slate-900">{d.getDate()}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Time Picker */}
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Available Times</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"].map(time => (
                                        <button key={time} className="px-3 py-2 text-sm font-medium border border-slate-200 rounded-lg hover:border-primary hover:text-primary focus:bg-primary focus:text-white transition-colors">
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Link href="/dashboard/student" className="block w-full">
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95 flex items-center justify-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> Book Session
                                </button>
                            </Link>

                            <p className="text-xs text-center text-slate-400 mt-4">
                                You won't be charged yet. 100% Satisfaction Guarantee.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
