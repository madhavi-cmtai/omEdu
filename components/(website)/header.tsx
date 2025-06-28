"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";



const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
];


export default function Header() {
    const pathname = usePathname();
    const isPadded = pathname === "/" || pathname === "/about";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </Link>

                {/* Center: Desktop Navigation */}
                <nav className="hidden md:flex gap-15 ml-52">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-base font-bold transition-colors duration-300 ${isActive
                                    ? "text-[#790F1B] font-extrabold underline underline-offset-4"
                                    : "text-black hover:text-[#AC0214] hover:underline underline-offset-4"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: CTA and Toggle */}
                <div className="flex items-center gap-4">
                    {/* CTA: Always visible */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-white font-bold text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#9b1c2f] to-[#ff6b6b] hover:from-[#b6203a] hover:to-[#ff4c4c] transition-shadow shadow-lg"
                    >
                        <Image
                            src="/images/vector.png"
                            alt="Call Icon"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span >Contact Us</span>
                    </Link>

                    {/* Toggle Button: Mobile only */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`text-[#AC0214] ${isPadded ? "mr-10" : ""}`}
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>




                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white shadow-md">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`text-base font-bold transition-colors duration-300 ${isActive
                                    ? "text-[#790F1B] underline underline-offset-4"
                                    : "text-black hover:text-[#AC0214] hover:underline underline-offset-4"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
