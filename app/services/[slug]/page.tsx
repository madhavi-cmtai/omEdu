"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { services } from "@/lib/data/service";
import ServiceShowcase from "@/components/home/services-section";

export default function ServiceSlugPage() {
    const { slug } = useParams() as { slug: string };
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const service = services.find((s) => s.slug.toLowerCase() === slug?.toLowerCase());

    if (!slug) return <div className="p-10">No slug provided in the URL.</div>;
    if (!service) return <div className="p-10">Service not found: <strong>{slug}</strong></div>;

    return (
        <div className="py-16 px-6 sm:px-10 w-full mx-auto text-gray-800 bg-white mt-16">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-brown)] hover:text-[var(--primary-red)] font-semibold transition"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-screen left-1/2 -translate-x-1/2 mb-12 overflow-hidden shadow-2xl"
            >
                <Image
                    src={service.banner}
                    alt={service.title}
                    width={1920}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />

                {/* Centered Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-red)]/80 to-transparent flex items-center justify-center p-6">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg">
                        {service.title}
                    </h1>
                </div>
            </motion.div>


            <div className="w-full bg-white mt-16">
                <div className="max-w-7xl mx-auto py-16 px-6 sm:px-10 text-gray-800">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-10 items-center mb-16"
                    >
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed ml-4">{service.intro}</p>
                            <ul className="space-y-3">
                                {service.points.map((p, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[var(--primary-red)] mt-1 font-bold">✓</span>
                                        <span>
                                            <strong>{p.title}:</strong> {p.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    href="/contact"
                                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-red)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                                >
                                    Get Consultation
                                </Link>
                            </motion.div>
                        </div>

                        {service.detailImage && (
                            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src={service.detailImage}
                                    alt={service.title + " details"}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 max-w-7xl mx-auto w-full"
                    >
                        <h2 className=" text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-10">
                            Key Features
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {service.features.map((f, i) => (
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
                                        <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">
                                            {f.title}
                                        </h3>
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
                            Use Cases
                        </h2>

                        <div className="max-w-5xl mx-auto space-y-4">
                            {service.useCases.map((uc, i) => {
                                const isExpanded = expandedIndex === i;
                                const toggleExpand = () => setExpandedIndex(isExpanded ? null : i);

                                return (
                                    <div
                                        key={i}
                                        onClick={toggleExpand}
                                        className="bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer transition hover:shadow-lg"
                                    >
                                        <div className="flex items-start justify-between">
                                            <p className="text-base sm:text-lg text-red-800 font-semibold">
                                                {uc.title}
                                            </p>
                                            <div className="text-[var(--primary-red)] mt-1">
                                                {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                                            </div>
                                        </div>
                                        {isExpanded && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-m text-gray-700 mt-3"
                                            >
                                                {uc.desc}
                                            </motion.p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>


                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                            Want to know how we can help you?
                        </h3>
                        <Link
                            href="/contact"
                            className="inline-block mt-4 px-8 py-3 bg-[var(--primary-red)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                        >
                            Request a Demo
                        </Link>
                    </motion.div>

                    
                </div>
                <ServiceShowcase />
            </div>



            {/* Intro with Image on the Right */}
           
        </div>


    );
}
