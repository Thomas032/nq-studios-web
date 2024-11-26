"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = ({ links }: { links: { href: string; label: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContactDialog = () => {
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-black"
      } px-6 py-4 lg:px-20`}
    >
      <div className="flex items-center justify-between lg:justify-start lg:space-x-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={75}
            height={75}
            quality={100}
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl hover:text-zinc-300 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <nav className="hidden lg:flex space-x-8 text-white font-medium">
          {links.map((link) =>
            link.href === "#contact" ? (
              <span
                key={link.href}
                onClick={openContactDialog}
                className=" duration-500 cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-zinc-300 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.label}
              </span>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className=" duration-500 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-zinc-300 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu with Transition */}
      <nav
        className={`lg:hidden text-white text-center space-y-2 
          ${isOpen ? "mt-8" : ""} 
          text-xl transition-all duration-500 ease-in-out transform 
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          overflow-hidden`}
      >
        {links.map((link) =>
          link.href === "#contact" ? (
            <span
              key={link.href}
              onClick={openContactDialog}
              className="block hover:text-zinc-300 cursor-pointer py-2 transition-colors"
            >
              {link.label}
            </span>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-zinc-300 py-2 transition-colors"
            >
              {link.label}
            </a>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
