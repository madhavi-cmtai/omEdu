"use client";

import { motion } from "framer-motion";
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
  



export default function BlogsPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative bg-[var(--primary-red)] py-50 px-4 sm:px-10 text-white overflow-hidden">
                {/* Blurred Background Image */}
                <div className="absolute inset-0 w-full h-full z-0 justify-center items-center">
                    <Image
                        src="/images/blogs-banner.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover w-full h-full opacity-30 blur-[1px]"
                        priority
                    />
                </div>

                {/* Foreground Text */}
                <div className="relative z-10 max-w-7xl mx-auto text-center mt-7">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-6xl font-bold mb-4 mt-10"
                    >
                        Our <span className="text-[var(--primary-gold)]">Blogs</span> 
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg sm:text-xl max-w-2xl mx-auto"
                    >
                        Get inspired with our latest thoughts, insights, and wellness journeys.
                    </motion.p>
                </div>
            </section>

            {/* Blog Cards */}
            <div className="bg-white py-16 px-4 sm:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.slug}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-2xl overflow-hidden transition-all"
                            style={{
                                boxShadow: "0 0 20px 6px rgba(250, 2, 20, 0.3)",
                            }}
                        >
                            <Link href={`/blogs/${blog.slug}`}>
                                <div className="relative w-full h-60">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2 text-center">
                                        {blog.title}
                                    </h3>
                                    <p className="text-[var(--primary-grey)] text-sm mb-3 text-center">
                                        {blog.desc}
                                    </p>
                                    <div className="flex justify-end">
                                        <span className="text-[var(--primary-red)] hover:text-[var(--primary-brown)] hover:underline text-sm font-medium transition">
                                            Read Blog →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    );
}
