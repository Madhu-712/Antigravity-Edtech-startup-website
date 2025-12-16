"use client";

import { Navbar } from "@/components/ui/navbar";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    const branches = [
        {
            city: "New York, USA",
            address: "10 Hudson Yards, Suite 300, NY 10001",
            phone: "+1 (212) 555-0199",
            email: "ny@edugenius.tech",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=400&auto=format&fit=crop"
        },
        {
            city: "London, UK",
            address: "25 Canada Square, Canary Wharf, London E14 5LB",
            phone: "+44 20 7946 0958",
            email: "london@edugenius.tech",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop"
        },
        {
            city: "Bangalore, India",
            address: "Prestige Tech Park, Outer Ring Rd, Bangalore 560103",
            phone: "+91 80 1234 5678",
            email: "india@edugenius.tech",
            image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=400&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 pt-20">
                {/* Hero */}
                <section className="bg-slate-900 text-white py-20 px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Get in Touch</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Find our offices or send us a message below.
                    </p>
                </section>

                {/* Contact Form & Branches */}
                <section className="py-20 px-4 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Form Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Map & Info */}
                        <div className="space-y-8">
                            {/* Simulated Map */}
                            <div className="bg-slate-200 rounded-2xl h-80 relative overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                                    alt="World Map Locations"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm font-bold text-slate-900">
                                        <MapPin className="w-4 h-4 text-primary" /> View on Google Maps
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {branches.map((branch, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/50 transition-colors">
                                        <div className="w-24 h-24 relative shrink-0 rounded-lg overflow-hidden bg-slate-100">
                                            <Image src={branch.image} alt={branch.city} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-2">{branch.city}</h3>
                                            <div className="space-y-1 text-sm text-slate-600">
                                                <p className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5" />{branch.address}</p>
                                                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" />{branch.phone}</p>
                                                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" />{branch.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
