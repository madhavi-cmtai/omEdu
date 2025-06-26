"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FoodAndConfectioneryPage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-gray-800 bg-white">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold transition"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/foods/food-bannner.jpeg"
                    alt="Foods and Confectionery"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Foods & Confectionery Solutions
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
                    We empower food businesses—from startups to established brands—with tailored solutions in product innovation, packaging design, and regulatory compliance. Our approach combines creativity with food safety expertise to help clients deliver delicious, market-ready products.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Product Development:</strong> End-to-end recipe formulation, flavor enhancement, and shelf-life testing.</li>
                    <li><strong>Packaging Design:</strong> Custom eco-friendly packaging with brand identity and food-grade materials.</li>
                    <li><strong>Regulatory Compliance:</strong> FSSAI approval, labeling audits, and export-ready certifications.</li>
                    <li><strong>Cold Chain Logistics:</strong> Safe storage, transport, and inventory control for perishable items.</li>
                    <li><strong>Retail Readiness:</strong> Barcoding, POS integration, and branding for online/offline distribution.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Book a Consultation
                    </Link>
                </motion.div>
            </motion.div>

            {/* Key Features */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-10">
                    Our Specialties
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/foods/recipes.jpeg",
                            title: "Innovative Recipes",
                            desc: "From fusion sweets to healthy snacks we create taste-driven, health conscious food lines.",
                        },
                        {
                            icon: "/images/services/foods/packaging.jpeg",
                            title: "Custom Packaging",
                            desc: "Brand-consistent, safe, and sustainable packaging with eye catching designs.",
                        },
                        {
                            icon: "/images/services/foods/FSSAI.png",
                            title: "FSSAI & Global Compliance",
                            desc: "Advisory and documentation for domestic and international food safety regulations.",
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

            {/* Use Cases (One-Line EdTech Style) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Use Cases
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Artisan Confectionery Brands: We help local bakers and sweet makers build a national presence with scalable recipes and packaging design.",
                        "Packaged Food Startups: From nutrition bars to instant mixes, we offer end-to-end development from ideation to market launch.",
                        "Export-Ready Producers: Advisory on compliance, labeling, and certification for international food markets.",
                        "Cold Chain Retailers: Custom solutions for preserving freshness during transit using temperature-controlled logistics.",
                    ].map((line, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{line}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                    Ready to launch or scale your food brand?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Schedule a Free Call
                </Link>
            </motion.div>
        </div>
    );
}
