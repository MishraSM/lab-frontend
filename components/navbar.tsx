"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "News", href: "/news" },
    { name: "Research Areas", href: "/research" },
    { name: "Publications", href: "/publication" },
    { name: "Summaries", href: "/summary" },
    { name: "Team", href: "/team" },
    { name: "Opportunities", href: "/opportunity" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full font-jura px-6 py-4 flex justify-between items-center bg-[#1282A2] fixed top-0 z-50 text-[#FEFCFB]">
            {/* Left Section: Logo + Title */}
            <Link href="/" className="flex items-center space-x-4 ml-8">
                <Image
                    src="/images/logo-mishra-lab.png"
                    alt="Lab Logo"
                    width={70}
                    height={70}
                    className="object-contain"
                />
                <div className="leading-tight text-sm">
                    <div className="text-xl font-semibold">Research Group</div>
                    <div>in Mathematical Modeling<br />and Program Science</div>
                </div>
            </Link>

            {/* Right Section: Nav Links */}
            <div className="hidden md:flex space-x-8 mr-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="relative px-4 py-2 rounded-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#FEFCFB] after:transition-all after:duration-400 hover:after:w-full"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-full bg-[#FEFCFB] text-[#1282A2] focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)} 
                aria-label="Toggle Menu"
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-28 right-0 w-full bg-[#1282A2] text-[#FEFCFB] flex flex-col items-center space-y-4 py-4 md:hidden -mt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-6 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#FEFCFB] after:transition-all after:duration-400 hover:after:w-full"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
