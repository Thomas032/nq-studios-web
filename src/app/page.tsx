import { Button } from "@/components/ui/button"; // Import the Button from Shadcn
import Image from "next/image";
import ProcessDropdown from "./components/ProcessDropdown";
import ReferenceCarousel from "./components/ReferenceCarousel";
import LinkStrip from "./components/LinkStrip";
import PriceList from "./components/PriceList";
import Link from "next/link";
import TeamCarousel from "./components/TeamCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-row bg-black min-h-screen text-white">
        <div className="w-2/3 px-20 space-y-5 flex flex-col justify-center">
          <h1 className="font-medium text-5xl">
            Empower your business <br /> with{" "}
            <span className="relative">
              <span className="z-10 text-white relative">bold</span>
              <span className="absolute left-0 top-2 text-red-600 z-0 blur-md font-bold">
                bold
              </span>
            </span>{" "}
            digital presence.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar rutrum hendrerit. Maecenas eu ligula at velit ullamcorper
            suscipit. Mauris eu condimentum sapien.
          </p>
          <div className="flex flex-row space-x-4">
            <Link href="/contact">
              <Button className="bg-[#01A7E1] text-white border border-black hover:bg-[#018DBF] w-1/2 lg:w-auto">
                Contact us
              </Button>
            </Link>
            <Link href="#references">
              <Button className="bg-black text-white border border-white hover:bg-white hover:text-black w-1/2 lg:w-auto">
                References
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-1/3 bg-black">
          <Image
            src="/images/hero.png"
            alt="hero"
            width={500}
            height={500}
            className=" mix-blend-hard-light w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Our process section */}
      <section className="bg-white py-10 px-20 flex flex-col" id="processes">
        <div className="flex flex-row justify-between text-black mb-5">
          <h3 className="text-3xl">Our process</h3>
          <span className="text-right">
            4 easy steps to take your business to the next level <br /> Any
            questions?{" "}
            <a href="" className="text-[#01A7E1] underline">
              Give us a call
            </a>
          </span>
        </div>

        {/* CARD dropdown component */}
        <ProcessDropdown />
      </section>

      {/* References section */}
      <section
        className="bg-white flex flex-col mx-20 my-10 items-center justify-center"
        id="references"
      >
        <h3 className="text-3xl mb-10">References</h3>
        <ReferenceCarousel />
      </section>
      <LinkStrip
        message="Do you want to see more?"
        buttonText="Discover our portfolio"
        link="/porfolio"
      />
      {/* PriceList section */}
      <section
        className="bg-black py-20 px-20 flex flex-col relative overflow-hidden"
        id="pricelist"
      >
        <Image
          src="/images/smudge.svg"
          alt="footer smudge"
          className={"absolute -left-10 -bottom-32 z-0"}
          width={300}
          height={300}
        />
        <div className="flex flex-row justify-between text-white mb-10">
          <h3 className="text-3xl">Pricelist</h3>
          <span className="text-right">
            Excelent value for a great price! <br />
            Individual price?{" "}
            <a href="" className="text-[#01A7E1] underline">
              Contact us
            </a>
          </span>
        </div>
        <PriceList />
      </section>
      {/* Our Team section */}
      <section
        className="bg-white flex flex-col mx-20 my-10 items-center justify-center"
        id="references"
      >
        <h3 className="text-3xl mb-10">Our Team</h3>
        <TeamCarousel />
      </section>
      <LinkStrip
        message="Do you want to join us?"
        buttonText="Check our job offers"
        link="/careers"
      />
    </div>
  );
}
