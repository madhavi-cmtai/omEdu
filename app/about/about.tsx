"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceSection from "./experience-section";



export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white px-4 sm:px-8 py-16 max-w-6xl mx-auto">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[var(--primary-green)]"
            >
                About OM Educom
            </motion.h1>

            <Separator className="mb-12 bg-[var(--primary-pink)] h-[2px]" />

            {/* Paragraph 1 */}
            <motion.div
                className="text-lg text-gray-700 leading-relaxed mb-10 sm:px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p className="mb-6">
                    <strong>OM Educom</strong> is a leading multidisciplinary engineering and architectural consultancy firm based in Tezpur, Assam. For nearly a decade, we have delivered tailored, reliable, and future-ready solutions to public and private sector clients across the region.
                </p>

                <p>
                    Our firm thrives on transforming complex ideas into sustainable infrastructure. From community housing and urban development to institutional planning and structural redesign—we’re known for our versatility, dedication, and innovation.
                </p>
            </motion.div>

            {/* Image in between */}
            <motion.div
                className="my-12 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/images/about-om.jpg"
                    alt="OM Educom office or project"
                    width={1200}
                    height={500}
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
                className="text-lg text-gray-700 leading-relaxed mb-10 sm:px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p className="mb-6">
                    Our integrated team includes civil engineers, architects, project consultants, and business strategists—each contributing unique expertise to ensure quality delivery and long-term project sustainability.
                </p>

                <p>
                    We bring together traditional values and modern tools like BIM, GIS, and drone surveying to ensure that each design is smart, functional, and built to last. Our strength lies not just in execution, but in collaboration with stakeholders and communities.
                </p>
            </motion.div>

            {/* Mission + Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="shadow-xl" >
                        <CardContent className="p-6 space-y-4">
                            <h2 className="text-2xl font-bold text-[var(--primary-green)]">Our Mission</h2>
                            <p>
                                We strive to empower progress by delivering world-class consulting services in engineering and architecture. Our mission is to guide projects that are efficient, sustainable, and aligned with the evolving needs of people and places.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="shadow-xl" >
                        <CardContent className="p-6 space-y-4">
                            <h2 className="text-2xl font-bold text-[var(--primary-green)]">Our Vision</h2>
                            <p>
                                To be North East India’s most respected consultancy, building spaces and systems that elevate communities, support sustainability, and drive future-focused development for generations to come.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Experience Timeline Section */}
            <div className="mt-24">
                <ExperienceSection />
            </div>

            {/* Extra Image Before Values */}
            <motion.div
                className="my-12 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/images/about-values.jpg" // Replace this with your own image
                    alt="Team collaboration or site supervision"
                    width={1200}
                    height={500}
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Values Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-16"
            >
                <h3 className="text-3xl font-semibold text-[var(--primary-green)] mb-10 text-center">
                    What We Stand For
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "🔍",
                            title: "Precision",
                            desc: "Every plan, drawing, and report is crafted with accuracy and purpose.",
                        },
                        {
                            icon: "♻️",
                            title: "Sustainability",
                            desc: "Our projects follow green principles, ensuring energy and material efficiency.",
                        },
                        {
                            icon: "🤝",
                            title: "Collaboration",
                            desc: "We partner closely with clients and communities to deliver shared success.",
                        },
                        {
                            icon: "📐",
                            title: "Innovation",
                            desc: "Our use of emerging tech sets us apart in the modern consultancy landscape.",
                        },
                        {
                            icon: "🏗️",
                            title: "Turnkey Execution",
                            desc: "We offer end-to-end planning, design, and implementation services.",
                        },
                        {
                            icon: "🚀",
                            title: "Scalability",
                            desc: "We design solutions that grow with you — adaptable, flexible, and future-ready.",
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h4 className="text-xl font-semibold text-[var(--primary-green)] mb-2">
                                {item.title}
                            </h4>
                            <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}
