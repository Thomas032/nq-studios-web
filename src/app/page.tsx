"use client";
import ProcessDropdown from "./components/ProcessDropdown";
import ReferenceCarousel from "./components/ReferenceCarousel";
import PriceList from "./components/PriceList";
import TeamCarousel from "./components/TeamCarousel";
import ContactCard from "./components/ContactCard";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import Image from "next/image";

export default function Home() {
  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  return (
    <div className="flex flex-col">
      {/* Contact box */}
      <ContactCard />

      {/* Hero Section */}
      <HeroSection />

      {/* Our process section */}
      <section
        className="bg-white py-20 px-6 lg:px-20 flex flex-col"
        id="processes"
      >
        <SectionHeader
          title="Our process"
          description="Four steps to your digital future"
          onContactClick={openContactDialog}
          headerTextColor="text-black"
        />

        {/* CARD dropdown component */}
        <ProcessDropdown />
      </section>

      {/* References section */}
      <section
        className="bg-gray-50 flex flex-col px-6 lg:px-20 py-20 items-center"
        id="references"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6 relative inline-flex flex-col">
            References
            <span className="w-24 h-1 bg-gradient-to-r from-[#01A7E1] to-[#0152A1] mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            See how we've helped businesses transform their digital presence
          </p>
          <ReferenceCarousel />
        </div>
      </section>

      {/* PriceList section */}
      <section
        className="bg-gradient-to-br from-black to-[#0a2447] py-24 px-6 lg:px-20 flex flex-col relative overflow-hidden"
        id="pricelist"
      >
        <Image
          src="/images/smudge.svg"
          alt="footer smudge"
          className="absolute -left-10 -bottom-32 z-0"
          width={300}
          height={300}
          loading="lazy"
          quality={80}
        />
        <div className="relative z-10 mb-4">
          <SectionHeader
            title="Pricelist"
            description="Transparent pricing with flexible options"
            onContactClick={openContactDialog}
            headerTextColor="text-white"
          />
        </div>
        <PriceList />
      </section>

      {/* Our Team section */}
      <section
        className="bg-white flex flex-col px-6 lg:px-20 py-20 items-center"
        id="team"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6 relative inline-flex flex-col">
            Our Team
            <span className="w-24 h-1 bg-gradient-to-r from-[#01A7E1] to-[#0152A1] mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Meet the experts who will enqueue your business for digital success
          </p>
          <TeamCarousel />
        </div>
      </section>
    </div>
  );
}
