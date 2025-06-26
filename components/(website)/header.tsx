"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full px-6 md:px-12 py-2 flex items-center justify-between shadow-sm bg-white">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </Link>

            {/* Center: Navigation */}
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

            {/* Right: CTA Button */}
            <div>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white font-bold text-base px-7 py-4 rounded-full bg-gradient-to-r from-[#9b1c2f] to-[#ff6b6b] hover:from-[#b6203a] hover:to-[#ff4c4c] transition-shadow shadow-lg mr-2"
                >
                    <Image
                        src="/images/vector.png"
                        alt="Call Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    Contact Us
                </Link>
            </div>
        </header>

    );
}
