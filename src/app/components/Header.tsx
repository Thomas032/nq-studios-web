"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ links }: { links: { href: string; label: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black px-6 py-4 lg:px-20">
      <div className="flex items-center justify-between lg:justify-start lg:space-x-16">
        {/* Logo */}
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <nav className="hidden lg:flex space-x-8 text-white font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-zinc-300 duration-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu with Transition */}
      <nav
        className={`lg:hidden text-white text-center space-y-2 ${
          isOpen ? "mt-8" : ""
        } text-xl transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
