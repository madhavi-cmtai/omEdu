"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";
import BlogShowcase from "@/components/home/blogs-section";

export default function BlogSlugPage() {
    const { slug } = useParams() as { slug: string };
    const blog = blogs.find((b) => b.slug.toLowerCase() === slug?.toLowerCase());

    if (!slug) return <div className="p-10">No slug provided in the URL.</div>;
    if (!blog) return <div className="p-10">Blog not found: <strong>{slug}</strong></div>;

    // Inject arrow icon before <h3> tags
    const processedContent = blog.content.replace(
        /<h3>(.*?)<\/h3>/g,
        (_, title) => `
      <h3 class="flex items-center gap-2 text-[var(--primary-brown)] text-2xl font-semibold mt-6 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[var(--primary-brown)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        ${title}
      </h3>
    `
    );

    return (
        <div className="pt-28 pb-16 px-6 sm:px-10 w-full mx-auto text-gray-800 bg-white">
            {/* Back Button */}
            <div className="mb-10">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-[var(--primary-brown)] hover:text-[var(--primary-red)] font-semibold transition"
                >
                    ← Back to All Blogs
                </Link>
            </div>

            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full mb-16"
            >
                <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1920}
                        height={500}
                        className="w-full h-64 sm:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-red)]/80 to-transparent flex items-center justify-center">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-xl">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* Summary + Detail Image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-10 items-center mb-20 px-6 sm:px-10"
            >
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">{blog.summary}</p>
                    <ul className="space-y-4">
                        {blog.points?.map((p, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-[var(--primary-red)] mt-1 font-bold">✓</span>
                                <span className="text-gray-800">
                                    <strong>{p.title}:</strong> {p.desc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {blog.detailImage && (
                    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={blog.detailImage}
                            alt={blog.title + " image"}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </motion.div>

            {/* Main Blog Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full px-6 sm:px-10 text-gray-800 mb-24 leading-relaxed space-y-6"
            >
                <div
                    className="[&_p]:mb-7 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_li]:text-base"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-24"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                    Want to explore more insights?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-red)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    Contact Us
                </Link>
            </motion.div>

            {/* Related Blogs */}
            <BlogShowcase />
        </div>
    );
}
