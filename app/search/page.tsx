"use client";

import Link from "next/link";
import Image from "next/image";
import { tutors } from "@/lib/data";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Star, X } from "lucide-react";

export default function SearchPage() {
    // State for filters
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [maxPrice, setMaxPrice] = useState(150);
    const [minExperience, setMinExperience] = useState(0);
    const [minRating, setMinRating] = useState(0);

    // Extract all unique subjects from data
    const allSubjects = useMemo(() => {
        const subjects = new Set<string>();
        tutors.forEach(t => t.subjects.forEach(s => subjects.add(s)));
        return Array.from(subjects).sort();
    }, []);

    // Filter Logic
    const filteredTutors = useMemo(() => {
        return tutors.filter((tutor) => {
            // 1. Name Search (Case insensitive)
            const matchesName = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tutor.headline.toLowerCase().includes(searchTerm.toLowerCase());

            // 2. Subject Filter (OR logic: if any selected subject matches any of tutor's subjects)
            // If no subjects selected, show all.
            const matchesSubject = selectedSubjects.length === 0 ||
                selectedSubjects.some(s => tutor.subjects.includes(s));

            // 3. Price Filter (Less than or equal to maxPrice)
            const matchesPrice = tutor.price <= maxPrice;

            // 4. Experience Filter (Greater than or equal to minExperience)
            const matchesExperience = tutor.yearsExperience >= minExperience;

            // 5. Rating Filter (Greater than or equal to minRating)
            const matchesRating = tutor.rating >= minRating;

            return matchesName && matchesSubject && matchesPrice && matchesExperience && matchesRating;
        });
    }, [searchTerm, selectedSubjects, maxPrice, minExperience, minRating]);

    // Handlers
    const toggleSubject = (subject: string) => {
        setSelectedSubjects(prev =>
            prev.includes(subject)
                ? prev.filter(s => s !== subject)
                : [...prev, subject]
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b sticky top-0 z-30 px-6 h-20 flex items-center justify-between shadow-sm">
                <Link className="flex items-center gap-2 group" href="/">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl text-slate-900">Edu-genius-Tech</span>
                </Link>

                {/* Search Bar in Header */}
                <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by tutor name or keyword..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white border focus:border-primary rounded-full outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-4">
                    <Link href="/auth">
                        <button className="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-full transition-colors">Log In</button>
                    </Link>
                </div>
            </header>

            <div className="flex-1 container mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <div className="lg:col-span-1 space-y-8 bg-white p-6 rounded-2xl border border-slate-200 h-fit sticky top-24">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold flex items-center gap-2">
                            <SlidersHorizontal className="w-5 h-5" /> Filters
                        </h2>
                        {(searchTerm || selectedSubjects.length > 0 || maxPrice < 150 || minExperience > 0 || minRating > 0) && (
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedSubjects([]);
                                    setMaxPrice(150);
                                    setMinExperience(0);
                                    setMinRating(0);
                                }}
                                className="text-xs text-red-500 hover:underline font-medium"
                            >
                                Reset All
                            </button>
                        )}
                    </div>

                    {/* Mobile Only Search (visible if hidden in header) */}
                    <div className="md:hidden">
                        <label className="text-sm font-semibold mb-2 block">Search</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Name or keyword..."
                                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Subject Filter */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-sm text-slate-900">Subjects</h3>
                        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                            {allSubjects.map(subject => (
                                <label key={subject} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedSubjects.includes(subject) ? "bg-primary border-primary" : "border-slate-300 bg-white group-hover:border-slate-400"}`}>
                                        {selectedSubjects.includes(subject) && <X className="w-3 h-3 text-white" />}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedSubjects.includes(subject)}
                                        onChange={() => toggleSubject(subject)}
                                    />
                                    <span className={`text-sm ${selectedSubjects.includes(subject) ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                                        {subject}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Rating Filter (New) */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-sm text-slate-900">Minimum Rating</h3>
                        <div className="flex flex-col gap-2">
                            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => setMinRating(prev => prev === rating ? 0 : rating)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all ${minRating === rating ? "bg-primary/5 border-primary text-primary font-bold" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"}`}
                                >
                                    <div className="flex text-yellow-500">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} className={`w-3.5 h-3.5 ${star <= rating ? "fill-current" : "text-slate-200 fill-slate-200"}`} />
                                        ))}
                                    </div>
                                    <span>{rating}+</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-sm text-slate-900">Max Hourly Rate</h3>
                            <span className="text-sm font-bold text-primary">${maxPrice}</span>
                        </div>
                        <input
                            type="range"
                            min="20"
                            max="150"
                            step="5"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full accent-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>$20</span>
                            <span>$150+</span>
                        </div>
                    </div>

                    {/* Experience Filter */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-sm text-slate-900">Min. Experience</h3>
                            <span className="text-sm font-bold text-primary">{minExperience}+ Years</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="20"
                            step="1"
                            value={minExperience}
                            onChange={(e) => setMinExperience(Number(e.target.value))}
                            className="w-full accent-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>0 Yrs</span>
                            <span>20+ Yrs</span>
                        </div>
                    </div>
                </div>

                {/* Tutor Grid */}
                <div className="lg:col-span-3">
                    <div className="mb-6 flex items-center justify-between">
                        <p className="text-slate-500">
                            Showing <span className="font-bold text-slate-900">{filteredTutors.length}</span> tutors
                        </p>
                        {/* Sort Dropdown could go here */}
                    </div>

                    {filteredTutors.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">No tutors found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedSubjects([]);
                                    setMaxPrice(150);
                                    setMinExperience(0);
                                }}
                                className="mt-6 text-primary font-medium hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {filteredTutors.map((tutor) => (
                                <div key={tutor.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 md:items-start group">
                                    <div className="w-full md:w-48 h-48 relative shrink-0 rounded-xl overflow-hidden bg-slate-100">
                                        <Image
                                            src={tutor.image}
                                            alt={tutor.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">{tutor.name}</h3>
                                                <p className="text-primary font-medium">{tutor.headline}</p>
                                            </div>
                                            <div className="text-left md:text-right">
                                                <div className="flex items-center gap-1 md:justify-end">
                                                    <span className="text-2xl font-bold text-slate-900">${tutor.price}</span>
                                                    <span className="text-slate-500 text-sm font-medium">/hr</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-md">
                                                <Star className="w-4 h-4 fill-yellow-500" />
                                                <span className="font-bold text-slate-900">{tutor.rating}</span>
                                                <span className="text-slate-500">({tutor.reviews} reviews)</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="font-bold text-slate-900">{tutor.yearsExperience}+</span> Years Exp.
                                            </div>
                                            <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
                                            <div className="flex items-center gap-1">
                                                <span className="font-bold text-slate-900">{tutor.studentsTaught}+</span> Students.
                                            </div>
                                        </div>

                                        <p className="text-slate-600 line-clamp-2 leading-relaxed">{tutor.bio}</p>

                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {tutor.subjects.map((subject) => (
                                                <span key={subject} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors">
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-3 flex justify-end">
                                            <Link href={`/tutors/${tutor.id}`} className="w-full md:w-auto">
                                                <button className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95">
                                                    View Profile
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
