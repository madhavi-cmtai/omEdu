"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        slug: "yoga-benefits",
        title: "5 Benefits of Daily Yoga Practice",
        image: "/images/blog-yoga.jpg",
        desc: "Discover how yoga improves your body and mind every day.",
    },
    {
        slug: "wellness-rituals",
        title: "Ancient Wellness Rituals That Still Work",
        image: "/images/blog-rituals.jpg",
        desc: "Timeless health practices passed down through generations.",
    },
    {
        slug: "ayurveda-guide",
        title: "Beginner’s Guide to Ayurveda",
        image: "/images/blog-ayurveda.jpg",
        desc: "Explore the basics of Ayurveda for better balance.",
    },
    // Add more blogs...
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
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/bg-blue.jpg"
                    alt="Blog Background"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
            </div>

            <div className="relative w-full">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[var(--primary-green)]">
                    From Our Blogs
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {currentChunk.map((blog) => (
                            <motion.div
                                key={blog.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-2xl overflow-hidden transition-all bg-white"
                                style={{
                                    boxShadow: "0 10px 40px rgba(250, 2, 20, 0.3)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 48px rgba(172, 2, 20, 0.4)")}
                                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 40px rgba(172, 2, 20, 0.3)")}
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

                {/* Pagination */}
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
        </section>
    );
}
