import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/ui/footer";
import { Chatbot } from "@/components/ui/chatbot";

export const metadata: Metadata = {
    title: "Edu-genius-Tech Tutors",
    description: "Unlock your inner genius with world-class tutors.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">
                {children}
                <Chatbot />
                <Footer />
            </body>
        </html>
    );
}
