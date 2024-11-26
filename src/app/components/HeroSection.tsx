import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroData from "@/data/heroData.json";

export default function HeroSection() {
  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  return (
    <section className="flex flex-col-reverse justify-end bg-black min-h-screen text-white lg:flex-row">
      <div className="w-full px-6 space-y-10 lg:space-y-5 flex flex-col justify-center pb-10 lg:w-2/3 lg:px-20">
        <h1 className="font-medium text-5xl">
          {heroData.title.split(" ").map((word, index) =>
            word === "bold" ? (
              <span key={index} className="relative">
                <span className="z-10 text-white relative">bold </span>
                <span className="absolute left-0 top-2 text-red-600 z-0 blur-md font-bold">
                  bold
                </span>
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h1>
        <p className="hidden lg:block">{heroData.description}</p>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 w-full max-w-md">
          {heroData.buttons.map((button, index) =>
            button.type === "primary" ? (
              <Button
                key={index}
                className="w-full sm:w-auto bg-[#01A7E1] text-white border border-black hover:bg-[#018DBF] text-lg font-normal lg:text-base px-8 py-6 lg:py-4 transition-all duration-300 hover:scale-105"
                onClick={
                  button.href === "#contact" ? openContactDialog : undefined
                }
              >
                {button.label}
              </Button>
            ) : (
              <Link key={index} href={button.href} className="w-full sm:w-auto">
                <Button className="w-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-black text-lg font-normal lg:text-base px-8 py-6 lg:py-4 transition-all duration-300 hover:scale-105">
                  {button.label}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-black">
        <Image
          src={heroData.imageSrc}
          alt="hero"
          width={500}
          height={500}
          className="mix-blend-hard-light w-full h-full object-cover"
          quality={100}
        />
      </div>
    </section>
  );
}
