"use client";
import Image from "next/image";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <nav className="relative w-full bg-transparent">
      <ul className="flex items-center justify-center gap-4 pt-8 text-white opacity-75">
        {/* Logo */}
        <li className="absolute ml-5 left-20">
          <Image
            src="/logo.png"
            alt="My Logo"
            width={100}
            height={100}
            className="mt-2"
          />
        </li>

        {/* Centered Buttons */}
        <li className="lg:ml-20">
          <button
            className="text-sm cursor-pointer font-spartan md:text-lg hover:text-red-500"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="text-sm cursor-pointer font-spartan md:text-lg hover:text-red-500"
            onClick={() => scrollToSection("technologies")}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className="text-sm cursor-pointer font-spartan md:text-lg hover:text-red-500"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="text-sm cursor-pointer font-spartan md:text-lg hover:text-red-500"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
