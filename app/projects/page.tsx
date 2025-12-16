"use client";

import Link from "next/link";
import Image from "next/image";
import { FolderGit2, ArrowRight, Code, Database, FlaskConical, Calculator } from "lucide-react";

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: "Build an AI Chatbot",
            category: "Computer Science",
            difficulty: "Intermediate",
            icon: <Code className="w-6 h-6" />,
            description: "Create a functional chatbot using Python and OpenAI API. Learn natural language processing basics.",
            tags: ["Python", "AI", "API integration"],
            students: 1200
        },
        {
            id: 2,
            title: "E-commerce Platform",
            category: "Web Development",
            difficulty: "Advanced",
            icon: <FolderGit2 className="w-6 h-6" />,
            description: "Full-stack application with Next.js, Stripe payments, and a database. essential for your portfolio.",
            tags: ["React", "Node.js", "Stripe"],
            students: 3500
        },
        {
            id: 3,
            title: "Stock Price Predictor",
            category: "Data Science",
            difficulty: "Advanced",
            icon: <Database className="w-6 h-6" />,
            description: "Analyze historical stock data to predict future trends using Machine Learning libraries like Scikit-learn.",
            tags: ["Python", "ML", "Pandas"],
            students: 850
        },
        {
            id: 4,
            title: "Chemical Reaction Sim",
            category: "Chemistry",
            difficulty: "Intermediate",
            icon: <FlaskConical className="w-6 h-6" />,
            description: "Simulate molecular bonding and chemical reactions visually using JavaScript and Canvas API.",
            tags: ["Simulation", "Chemistry", "JS"],
            students: 600
        },
        {
            id: 5,
            title: "Trajectory Calculator",
            category: "Physics",
            difficulty: "Beginner",
            icon: <Calculator className="w-6 h-6" />,
            description: "Build a tool to calculate projectile motion, accounting for gravity and air resistance.",
            tags: ["Physics", "Math", "Simulation"],
            students: 400
        },
        {
            id: 6,
            title: "Personal Finance Tracker",
            category: "App Development",
            difficulty: "Beginner",
            icon: <Code className="w-6 h-6" />,
            description: "Mobile app to track expenses and income. Great introduction to React Native or Swift.",
            tags: ["Mobile", "Finance", "UI/UX"],
            students: 2100
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Header */}
            <header className="px-6 h-20 flex items-center justify-between border-b bg-white sticky top-0 z-30">
                <Link className="flex items-center gap-2" href="/">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl text-slate-900">Edu-genius-Tech</span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/search">Find Tutors</Link>
                    <Link className="text-sm font-medium text-primary hover:text-primary transition-colors" href="/projects">Projects</Link>
                    <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/mock-papers">Mock Question Papers</Link>
                </nav>
                <div className="flex gap-4">
                    <Link href="/auth">
                        <button className="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-full transition-colors">Log In</button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Library</h1>
                    <p className="text-lg text-slate-600">
                        Apply your knowledge with hands-on projects. Build your portfolio and master real-world skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {project.icon}
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                        project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                    }`}>
                                    {project.difficulty}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-sm text-slate-500 font-medium mb-3">{project.category}</p>
                            <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <span className="text-sm text-slate-400">{project.students.toLocaleString()} students</span>
                                <button className="flex items-center text-primary font-bold text-sm group/btn">
                                    View Project <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
