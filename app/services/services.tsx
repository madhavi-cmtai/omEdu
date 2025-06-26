"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        slug: "edTech",
        category: "EdTech",
        image: "/images/services/edtech.jpeg",
        desc: "Empowering institutions and learners with modern digital platforms, virtual classrooms, LMS integrations, and interactive content delivery.",
    },
    {
        slug: "finTech",
        category: "FinTech",
        image: "/images/services/fintech.jpg",
        desc: "Building smart financial tools, secure payment gateways, loan management systems, and scalable digital banking experiences.",
    },
    {
        slug: "bizTech",
        category: "BizTech",
        image: "/images/services/biztech.jpg",
        desc: "Innovative tech strategies for businesses — from workflow automation and CRM to custom dashboards and data analytics.",
    },
    {
        slug: "businessManagement",
        category: "Business Management",
        image: "/images/services/business-management.jpg",
        desc: "Comprehensive consulting services for HR, operations, marketing, and organizational strategy aligned to growth goals.",
    },
    {
        slug: "businessAutomation",
        category: "Business Automation",
        image: "/images/services/business-automation.png",
        desc: "Transforming enterprises with automation tools including ERP, AI bots, inventory tracking, and automated reporting systems.",
    },
    {
        slug: "engineeringAndArchitectureConsultancy",
        category: "Engineering and Architectural Consultancy",
        image: "/images/services/engineering.jpg",
        desc: "Structural, civil, and architectural planning with sustainable design and end-to-end project documentation and delivery.",
    },
    {
        slug: "construction",
        category: "Construction",
        image: "/images/services/construction.jpg",
        desc: "Infrastructure and building projects including turnkey execution of public and private sector construction developments.",
    },
    {
        slug: "generalOrderSupply",
        category: "General Order Supply",
        image: "/images/services/general-supply.jpeg",
        desc: "Pan-India supply of quality goods to institutions, government, and private entities with efficient procurement workflows.",
    },
    {
        slug: "itSupplyAndServices",
        category: "IT Supply and Services",
        image: "/images/services/it-supply.jpeg",
        desc: "Hardware procurement, software development, AMC services, and network solutions for digital transformation.",
    },
    {
        slug: "hospitality",
        category: "Hospitality",
        image: "/images/services/hospitality.png",
        desc: "Comprehensive support for hotels, restaurants, and event setups including design, staffing, and tech solutions.",
    },
    {
        slug: "foodAndConfectionery",
        category: "Foods and Confectionery",
        image: "/images/services/foods.jpeg",
        desc: "Manufacture and supply of packaged food, bakery items, and institutional catering solutions at scale.",
    },
    {
        slug: "fireSafety",
        category: "Fire Safety",
        image: "/images/services/fire-safety.jpeg",
        desc: "Fire extinguishers, suppression systems, alarms, training, and audits to ensure complete safety compliance.",
    },
    {
        slug: "waterAndLandManagement",
        category: "Water and Land Management",
        image: "/images/services/water-land.jpeg",
        desc: "Irrigation projects, watershed development, land restoration, and sustainable resource planning for communities.",
    },
    {
        slug: "emergencyServices",
        category: "Emergency Services",
        image: "/images/services/emergency.jpeg",
        desc: "Emergency medical response, equipment supply, and disaster relief logistics tailored for rapid deployment.",
    },
    {
        slug: "telecommunication",
        category: "Telecommunication",
        image: "/images/services/telecom.jpeg",
        desc: "Telecom infrastructure projects, tower erection, broadband rollouts, and IoT device networks at scale.",
    },
    {
        slug: "realEstate",
        category: "Real Estate",
        image: "/images/services/real-estate.jpeg",
        desc: "Residential, commercial, and institutional real estate solutions including land procurement and development.",
    },
    {
        slug: "mining",
        category: "Mining",
        image: "/images/services/mining.jpeg",
        desc: "Mining operations, geological surveys, resource extraction, and environmental compliance services.",
    },
    {
        slug: "trading",
        category: "Trading",
        image: "/images/services/trading.jpeg",
        desc: "Domestic and international trade of essential goods, commodities, and industrial products with compliance support.",
    },
    {
        slug: "coalFields",
        category: "Coal Fields",
        image: "/images/services/coal.jpg",
        desc: "Coal sourcing, quality management, logistics, and government tender support for thermal energy operations.",
    },
    {
        slug: "liquorTrade",
        category: "Liquor Trade",
        image: "/images/services/liquor.avif",
        desc: "Excise license setup, retail distribution, and compliance management for liquor trading businesses.",
    },
    {
        slug: "agriculture",
        category: "Agriculture",
        image: "/images/services/agri.jpeg",
        desc: "Agri-tech solutions, modern inputs, farmer training, and end-to-end advisory for sustainable agriculture.",
    },
    {
        slug: "greenFuelsAndEnergy",
        category: "Green Fuels and Energy",
        image: "/images/services/green-energy.jpeg",
        desc: "Solar, wind, and biofuel infrastructure projects that support India’s clean energy and carbon neutrality goals.",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-white py-16 px-4 sm:px-10 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[var(--primary-green)]"
            >
                Our Services
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service) => (
                    <motion.div
                        key={service.slug}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all"
                    >
                        <Link href={`/services/${service.slug}`}>
                            <div className="relative w-full h-60">
                                <Image
                                    src={service.image}
                                    alt={service.category}
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2 text-center">
                                    {service.category}
                                </h3>
                                <p className="text-[var(--primary-grey)] text-sm mb-3 text-center">{service.desc}</p>
                                <div className="flex justify-end">
                                    <span className="text-[var(--primary-pink)] hover:text-[var(--primary-red)] hover:underline text-sm font-medium transition">
                                        Read More →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
