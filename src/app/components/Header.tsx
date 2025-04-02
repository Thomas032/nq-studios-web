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
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${
        isScrolled
          ? "bg-gradient-to-r from-[#01A7E1]/90 to-[#0a2447]/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      } px-6 lg:px-20`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 group">
          <div className="flex items-center">
            <div className="relative overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt="NQ Studios"
                width={64}
                height={64}
                priority
              />
              {/* Animated queue line underneath logo on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl hover:text-blue-200 transition-colors p-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <nav className="hidden lg:flex items-center space-x-10 text-white">
          {links.map((link, index) =>
            link.href === "#contact" ? (
              <span
                key={link.href}
                onClick={openContactDialog}
                className="font-medium cursor-pointer relative group transition-colors duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-white to-blue-200 group-hover:w-full transition-all duration-300"></span>
              </span>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="font-medium relative group transition-colors duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-white to-blue-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu with Improved Transition */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#01A7E1]/98 to-[#0a2447]/98 backdrop-blur-md z-40 transition-all duration-500 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <nav className="text-white text-center space-y-6 px-6">
            {/* Digital pattern for visual interest */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 text-4xl font-mono">{`{ }`}</div>
              <div className="absolute bottom-1/4 right-1/4 text-4xl font-mono">{`[ ]`}</div>
              <div className="absolute top-3/4 right-1/3 text-2xl font-mono">{`( )`}</div>
              <div className="absolute bottom-1/3 left-1/3 text-2xl font-mono">{`< >`}</div>
            </div>

            {links.map((link, index) =>
              link.href === "#contact" ? (
                <div key={link.href} className="overflow-hidden">
                  <span
                    onClick={openContactDialog}
                    className="block text-2xl font-medium hover:text-blue-200 cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </span>
                </div>
              ) : (
                <div key={link.href} className="overflow-hidden">
                  <a
                    href={link.href}
                    className="block text-2xl font-medium hover:text-blue-200 transition-all duration-300 hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </div>
              )
            )}
          </nav>

          {/* Animated flow element */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <svg width="200" height="30" viewBox="0 0 200 30">
              <path
                d="M0,15 Q50,0 100,15 T200,15"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="transparent"
              />
              <circle cx="0" cy="15" r="3" fill="white">
                <animate
                  attributeName="cx"
                  values="0;200;0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
