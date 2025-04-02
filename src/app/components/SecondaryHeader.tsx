"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import headerData from "@/data/vacancyHeaderData.json";

export default function SecondaryHeader() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    // Create an observer for the processes section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If processes section is visible, hide the scroll indicator
        setShowScrollIndicator(!entry.isIntersecting);
      },
      {
        // Start observing when even 1px of the element is visible
        threshold: 0,
        // Use viewport as root
        root: null,
      }
    );

    // Start observing the processes section
    const processesSection = document.getElementById("processes");
    if (processesSection) {
      observer.observe(processesSection);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const scrollToPositions = () => {
    document.getElementById("processes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero section with responsive layout */}
      <section className="relative w-full bg-black">
        {/* Container for text and image */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-center min-h-[600px]">
          {/* Text content - left side on desktop */}
          <div className="flex-1 px-6 lg:px-20 py-14 lg:py-20 space-y-8 relative z-20">
            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {headerData.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-xl">
              {headerData.description}
            </p>
          </div>

          {/* Image - right side on desktop, full width */}
          <div className="lg:w-1/2 h-[400px] lg:h-[600px] relative">
            <Image
              src={headerData.imageSrc}
              className="object-cover"
              alt={headerData.imageAlt}
              fill
            />
          </div>
        </div>

        {/* Scroll indicator - only shown when processes section is not visible */}
        {showScrollIndicator && (
          <button
            onClick={scrollToPositions}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer transition-opacity duration-300"
            aria-label="Scroll to vacant positions"
          >
            <span className="text-white/80 text-sm mb-2 group-hover:text-white transition-colors">
              Discover positions
            </span>
            <ChevronDown
              className="text-white/80 animate-bounce group-hover:text-white transition-colors"
              size={24}
            />
          </button>
        )}
      </section>
    </>
  );
}
