"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
    return (
        <section className="bg-[var(--primary-green)] py-16 px-6 md:px-12 lg:px-20 mt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="flex-1 text-white text-center lg:text-left">
                    {/* Badge */}
                    <Badge className="bg-white text-[var(--primary-green)] text-sm font-semibold px-4 py-1 rounded-full mb-4 mx-auto lg:mx-0">
                        9 Years of Excellence
                    </Badge>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-[1.2] max-w-xl mx-auto lg:mx-0">
                        <div>Multidisciplinary</div>
                        <div className="text-[var(--primary-gold)]">Engineering</div>
                        <div>Solutions</div>
                    </h1>

                    {/* Subtext */}
                    <p className="text-white text-sm sm:text-base mt-6 max-w-md mx-auto lg:mx-0">
                        From EdTech to Construction, we deliver innovative solutions across 22 specialized domains in Tezpur, Assam.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="px-6 py-3 font-semibold rounded-md bg-white text-[var(--primary-green)] hover:bg-[var(--primary-red)] hover:text-white transition-colors duration-300">
                            Explore Services
                        </button>
                        <button className="px-6 py-3 font-semibold rounded-md border border-white text-white hover:bg-white hover:text-[var(--primary-red)] transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg h-60 sm:h-72 md:h-96 bg-white rounded-xl shadow-lg overflow-hidden">
                        <Image
                            src="/images/hero/banner.jpeg"
                            alt="Hero Illustration"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
