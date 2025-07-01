"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogs = [
    // 🔨 Construction & Infrastructure Blogs
    {
        slug: "green-construction-benefits",
        title: "Sustainable Building Practices: Why Green Construction Matters",
        image: "/images/blogs/green-construction.webp",
        desc: "Explore eco-friendly materials, energy-saving techniques, and the future of sustainable infrastructure.",
        
    },
    {
        slug: "smart-construction-tech",
        title: "Smart Construction: How Technology is Shaping Infrastructure",
        image: "/images/blogs/smart-construction.jpg",
        desc: "Discover how BIM, drones, and AI are revolutionizing modern construction and project planning.",
    },
    {
        slug: "project-management-construction",
        title: "How Project Management Ensures Timely Construction Delivery",
        image: "/images/blogs/project-management.jpg",
        desc: "Understand the importance of timelines, coordination, and risk mitigation in construction projects.",
    },
    {
        slug: "urban-planning-essentials",
        title: "Urban Planning Essentials: Designing Livable Cities",
        image: "/images/blogs/urban-planning.jpg",
        desc: "Explore how thoughtful urban planning balances mobility, green spaces, and community growth.",
    },
    {
        slug: "pre-construction-checklist",
        title: "Why Pre-Construction Planning is the Most Crucial Phase",
        image: "/images/blogs/pre-construction.jpg",
        desc: "Explore the steps taken before construction starts—from land approvals to financial planning.",
    },

    // 📘 General/Strategic Consultancy Blogs
    {
        slug: "what-consultants-do",
        title: "What Does a Consultancy Firm Really Do?",
        image: "/images/blogs/Consultancy-firm.jpg",
        desc: "Understand how consultants analyze problems, craft strategies, and support organizational success.",
    },
    {
        slug: "education-consultancy-role",
        title: "The Role of Educational Consultancy in Modern Learning",
        image: "/images/blogs/edu-consult.jpg",
        desc: "Explore how consultants shape digital learning, faculty training, and institutional strategy.",
    },
    {
        slug: "institutional-audit-importance",
        title: "Why Institutional Audits Are Crucial for Compliance",
        image: "/images/blogs/institute-audit.jpg",
        desc: "Learn how audits help organizations stay compliant, transparent, and future-ready.",
    },
    {
        slug: "consultancy-vs-contracting",
        title: "Consultancy vs. Contracting: Understanding the Difference",
        image: "/images/blogs/contract.jpg",
        desc: "Know the key roles and how each contributes uniquely to project success.",
    },
    {
        slug: "why-hire-consultant",
        title: "5 Signs Your Organization Needs a Consultant",
        image: "/images/blogs/consultant.jpg",
        desc: "From unclear direction to slow growth—find out when it's time to call in a consultant.",
    },
];

const chunkSize = 3;
const totalChunks = Math.ceil(blogs.length / chunkSize);

export default function BlogShowcase() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalChunks);
        }, 12000);
        return () => clearInterval(timer);
    }, []);

    const currentChunk = blogs.slice(index * chunkSize, index * chunkSize + chunkSize);

    return (
        <section className="relative py-20 px-4 sm:px-10 bg-white w-full">
            <div className="relative max-w-7xl mx-auto w-full rounded-none overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/bg-blue.jpg"
                        alt="Blog Background"
                        fill
                        className="object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
                </div>

                <div className="w-full px-4 sm:px-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[var(--primary-green)]">
                        From Our Blogs
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="wait">
                            {currentChunk.map((blog) => (
                                <motion.div
                                    key={`${blog.slug}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-2xl overflow-hidden transition-all bg-white group"
                                    style={{
                                        boxShadow: "0 10px 40px rgba(200, 2, 20, 0.3)",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.boxShadow = "0 12px 48px rgba(172, 2, 20, 0.4)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.boxShadow = "0 10px 40px rgba(172, 2, 20, 0.3)")
                                    }
                                >
                                    <Link href={`/blogs/${blog.slug}`}>
                                        <div className="relative w-full h-60">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2 text-center">
                                                {blog.title}
                                            </h3>
                                            <p className="text-[var(--primary-grey)] text-sm mb-3 text-center">
                                                {blog.desc}
                                            </p>
                                            <div className="flex justify-end">
                                                <span className="text-[#790F1B] hover:text-[var(--primary-red)] hover:underline text-sm font-medium transition">
                                                    Read Blog →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-10 gap-3">
                        {Array.from({ length: totalChunks }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full transition ${i === index
                                    ? "bg-[var(--primary-green)]"
                                    : "bg-gray-300 hover:bg-[var(--primary-green)]"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end mt-10">
                        <Link href="/blogs">
                            <button className="text-sm font-medium text-white bg-[var(--primary-green)] hover:bg-[var(--primary-red)] transition px-6 py-2 rounded-full">
                                Show All Blogs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
