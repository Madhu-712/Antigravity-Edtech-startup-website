"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Github, Mail } from "lucide-react";

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
            {/* Left: Branding */}
            <div className="hidden md:flex flex-col justify-center items-center bg-slate-900 text-white p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-950 opacity-50"></div>
                <div className="relative z-10 max-w-md text-center">
                    <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                    </p>
                    <div className="flex gap-4 justify-center">
                        <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-1 bg-slate-700 rounded-full"></div>
                        <div className="w-2 h-1 bg-slate-700 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="flex items-center justify-center p-8 bg-slate-50">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                    <div className="flex justify-center mb-8">
                        <div className="bg-slate-100 p-1 rounded-xl flex">
                            <button
                                onClick={() => setActiveTab("signin")}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "signin" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setActiveTab("signup")}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "signup" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {activeTab === "signin" ? "Sign in to your account" : "Create your account"}
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">
                            {activeTab === "signin" ? "Welcome back! Please enter your details." : "Join thousands of learners today."}
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {activeTab === "signup" && (
                            <div className="space-y-4 animate-in slide-in-from-left-2 duration-300">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">I am a</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex items-center justify-center gap-2 p-2 border border-blue-500 bg-blue-50 text-blue-700 rounded-lg cursor-pointer">
                                            <input type="radio" name="role" className="accent-blue-600" defaultChecked /> Student
                                        </label>
                                        <label className="flex items-center justify-center gap-2 p-2 border border-slate-200 hover:bg-slate-50 rounded-lg cursor-pointer">
                                            <input type="radio" name="role" className="accent-blue-600" /> Tutor
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <input type="password" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="••••••••" />
                        </div>

                        {activeTab === "signin" && (
                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                    <span className="text-slate-600">Remember me</span>
                                </label>
                                <a href="#" className="text-primary hover:underline">Forgot password?</a>
                            </div>
                        )}

                        <button className="w-full bg-slate-900 text-white py-2.5 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/10">
                            {activeTab === "signin" ? "Sign In" : "Create Account"}
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                            <Github className="w-4 h-4" /> Github
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                            <span>G</span> Google
                        </button>
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-8">
                        <Link href="/" className="hover:text-primary transition-colors flex items-center justify-center gap-1 group">
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
