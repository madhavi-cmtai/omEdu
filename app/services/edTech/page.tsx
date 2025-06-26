"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EdTechPage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-gray-800">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Section with Full-Width Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/edtech/edtech-banner.avif"
                    alt="EdTech Banner"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Empowering Education with Tech
                    </h1>
                </div>
            </motion.div>

            {/* Overview Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 mb-12"
            >
                <p className="text-lg leading-relaxed">
                    At <span className="font-semibold">OM Educom</span>, our EdTech solutions harness state-of-the‑art technology to revolutionize learning experiences. Our interactive platforms and custom-built LMS empower institutions and trainers to provide engaging, adaptive, and scalable education.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Custom LMS:</strong> White‑label platforms built for your brand and pedagogical style.</li>
                    <li><strong>Interactive Modules:</strong> Videos, quizzes, gamification, and VR/AR-ready content.</li>
                    <li><strong>Multi-platform Apps:</strong> Seamlessly accessible via web, mobile, and tablets.</li>
                    <li><strong>NEP-aligned Courses:</strong> Curricula mapped to NEP 2020 and global benchmarks.</li>
                    <li><strong>Analytics Dashboard:</strong> Real-time performance tracking for students & trainers.</li>
                </ul>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Core Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/edtech/gamifiedLearning.avif",
                            title: "Gamified Learning",
                            desc: "Boost engagement with points, badges, leaderboards & interactive storytelling.",
                        },
                        {
                            icon: "/images/services/edtech/cloud.jpeg",
                            title: "Cloud-Native & Secure",
                            desc: "Scalable, secure & reliable hosting backed by regular backups and SSL-enabled sessions.",
                        },
                        {
                            icon: "/images/services/edtech/skills.jpeg",
                            title: "NEP 2020 Compliant",
                            desc: "Courses structured to meet modern pedagogy, critical thinking, and skill-building practices.",
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                        >
                            <div className="relative h-48">
                                <Image src={f.icon} alt={f.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">{f.title}</h3>
                                <p className="text-gray-700">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Real-world Applications
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Digitize classrooms with interactive live sessions, automated assessments & attendance tracking.",
                        "Empower corporate L&D with certifications, progress insights & compliance training.",
                        "Support NGOs and remote learners via offline & multilingual content.",
                        "Collaborate with governments for scalable solutions in e-learning initiatives."
                    ].map((u, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{u}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">Ready to transform learning?</h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Schedule a Demo
                </Link>
            </motion.div>
        </div>
    );
}
