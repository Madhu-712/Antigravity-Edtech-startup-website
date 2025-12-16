"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Calendar, BookOpen, MessageSquare, Settings, LogOut, GraduationCap } from "lucide-react";

export function DashboardSidebar() {
    const pathname = usePathname();
    const isTutor = pathname.includes("/tutor");

    const links = isTutor ? [
        { href: "/dashboard/tutor", label: "Overview", icon: LayoutDashboard },
        { href: "/dashboard/tutor/schedule", label: "My Schedule", icon: Calendar },
        { href: "/dashboard/tutor/students", label: "My Students", icon: GraduationCap },
        { href: "/dashboard/tutor/messages", label: "Messages", icon: MessageSquare },
        { href: "/dashboard/tutor/settings", label: "Settings", icon: Settings },
    ] : [
        { href: "/dashboard/student", label: "My Learning", icon: LayoutDashboard },
        { href: "/dashboard/student/classes", label: "My Classes", icon: Calendar },
        { href: "/dashboard/student/resources", label: "Saved Resources", icon: BookOpen },
        { href: "/dashboard/student/messages", label: "Messages", icon: MessageSquare },
        { href: "/dashboard/student/settings", label: "Settings", icon: Settings },
    ];

    return (
        <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 flex flex-col text-slate-300">
            <div className="p-6 border-b border-slate-800">
                <Link href="/" className="flex items-center gap-2 font-bold text-white text-xl">
                    <span className="text-primary">Edu</span>Genius
                </Link>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-2 block">
                    {isTutor ? "Tutor Portal" : "Student Portal"}
                </span>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium",
                                isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 hover:text-red-300 w-full rounded-xl transition-colors font-medium">
                    <LogOut className="w-5 h-5" />
                    Log Out
                </button>
            </div>
        </div>
    );
}
