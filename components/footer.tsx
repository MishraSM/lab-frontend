"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { name: "News", href: "/news" },
    { name: "Research Areas", href: "/research" },
    { name: "Publications", href: "/publication" },
    { name: "Summaries", href: "/summary" },
    { name: "Team", href: "/team" },
    { name: "Opportunities", href: "/opportunity" },
];

export default function Footer() {
  return (
    <footer className="w-full font-jura bg-[#1282A2] text-[#FEFCFB] py-5 px-6 -mb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col space-y-4">
          {/* Lab logo + text */}
          <div className="flex items-start space-x-4">
            <Image
              src="/images/logo-mishra-lab.png"
              alt="Lab Logo"
              width={64}
              height={64}
              className="object-contain"
            />
            <div className="text-sm leading-tight">
              <p className="font-semibold text-lg">Research Group</p>
              <p>in Mathematical Modeling</p>
              <p>and Program Science</p>
            </div>
          </div>

          {/* Affiliation logos */}
          <div className="flex items-center gap-2 ml-2 opacity-90">
            <Image
              src="/images/logo_collab/UofTwhite.png"
              alt="University of Toronto"
              width={70}
              height={32}
              className="object-contain"
            />
            <Image
              src="/images/logo_collab/MAPwhite.png"
              alt="MAP Centre for Urban Health Solutions"
              width={70}
              height={32}
              className="object-contain"
            />
            <Image
              src="/images/logo_collab/unityhealthwhite.png"
              alt="Unity Health Toronto"
              width={80}
              height={32}
              className="object-contain"
            />
            <Image
              src="/images/logo_collab/iceswhite.png"
              alt="ICES"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact or Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p>Email: <a href="mailto:modelscience@unityhealth.to" className="hover:underline">modelscience@unityhealth.to</a></p>
          <p>Location: Toronto, Canada</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            Website designed and developed by <a href="https://www.aastha-sharma.com/" className="underline hover:text-blue-200">Aastha Sharma</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
