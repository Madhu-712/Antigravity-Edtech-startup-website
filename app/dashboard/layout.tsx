"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            <DashboardSidebar />
            <div className="pl-64">
                {children}
            </div>
        </div>
    );
}
