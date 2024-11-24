"use client";
import Image from "next/image";
import ProcessDropdown from "./components/ProcessDropdown";
import ReferenceCarousel from "./components/ReferenceCarousel";
import LinkStrip from "./components/LinkStrip";
import PriceList from "./components/PriceList";
import TeamCarousel from "./components/TeamCarousel";
import ContactCard from "./components/ContactCard";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";

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
        className="bg-white py-10 px-6 lg:px-20 flex flex-col"
        id="processes"
      >
        <SectionHeader
          title="Our process"
          description="4 easy steps to take your business to the next level"
          contactText="Any questions?"
          onContactClick={openContactDialog}
          headerTextColor="text-black"
        />

        {/* CARD dropdown component */}
        <ProcessDropdown />
      </section>

      {/* References section */}
      <section
        className="bg-white flex flex-col px-6 lg:px-20 py-10 items-center justify-center"
        id="references"
      >
        <h3 className="text-3xl mb-10">References</h3>
        <ReferenceCarousel />
      </section>
      {/* LinkStrip component */}
      <LinkStrip
        message="Do you want to see more?"
        buttonText="Discover our portfolio"
        link="/porfolio"
      />
      {/* PriceList section */}
      <section
        className="bg-black py-20 px-6 lg:px-20 flex flex-col relative overflow-hidden"
        id="pricelist"
      >
        <Image
          src="/images/smudge.svg"
          alt="footer smudge"
          className={"absolute -left-10 -bottom-32 z-0"}
          width={300}
          height={300}
        />
        <SectionHeader
          title="Pricelist"
          description="Individual price?"
          onContactClick={openContactDialog}
          headerTextColor="text-white"
        />
        <PriceList />
      </section>
      {/* Our Team section */}
      <section
        className="bg-white flex flex-col mx-20 my-10 items-center justify-center"
        id="team"
      >
        <h3 className="text-3xl mb-10">Our Team</h3>
        <TeamCarousel />
      </section>
      <LinkStrip
        message="Do you want to join us?"
        buttonText="Check our job offers"
        link="/vacancies"
      />
    </div>
  );
}
