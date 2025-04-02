import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroData from "@/data/heroData.json";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const openContactDialog = () => {
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#01A7E1] to-[#0a2447] overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-[#01c7ff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-[#0055a4]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Digital code-like pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzcuNSAzMGgyLjVsMi41IDIuNXYyLjVINDBsLTIuNS0yLjV2LTIuNXpNMjAgMzVoNXYyLjVoLTEwVjMwaDV2NXptMTcuNS01djEyLjVoLTEyLjVWMzBoMTIuNXptLTEwIDBIMjVsLTIuNSAyLjV2Ny41bDIuNSAyLjVoMi41bDIuNS0yLjV2LTcuNUwzMCAzMGgtMi41em0xMC0xMGg1djIuNWgtMTBWMTVoNXY1ek0yMCAxNWgxNXYxNUgyMFYxNXptNSAyLjVoNXY1aC0yLjVWMjBIMjV2LTIuNXptMTAgMGgxMHY1aC01di0yLjVoLTJ2MTVoNXYtMi41aDJ2NWgtMTBWMTcuNXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 ${
              animationComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Empower your business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              digital presence.
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 delay-100 ${
              animationComplete
                ? "translate-y-0 opacity-80"
                : "translate-y-10 opacity-0"
            }`}
          >
            {heroData.description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-5 justify-center lg:justify-start transition-all duration-700 delay-300 ${
              animationComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {heroData.buttons.map((button, index) =>
              button.type === "primary" ? (
                <Button
                  key={index}
                  className="bg-white text-[#01A7E1] hover:bg-blue-50 hover:scale-105 text-lg px-8 py-6 font-medium transition-all duration-300"
                  onClick={
                    button.href === "#contact" ? openContactDialog : undefined
                  }
                >
                  {button.label}
                </Button>
              ) : (
                <Link key={index} href={button.href} className="inline-block">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 text-lg px-8 py-6 font-medium transition-all duration-300">
                    {button.label}
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Enqueue visual concept */}
        <div
          className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-500 ${
            animationComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative h-96 w-full">
            {/* Queue visualization with digital elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Core NQ element */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-[#01A7E1] to-[#0152A1] rounded-xl rotate-45 transform transition-transform hover:rotate-[30deg] duration-1000">
                  <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                    <span className="text-white font-bold text-5xl tracking-wide">
                      NQ
                    </span>
                  </div>
                </div>

                {/* Queue lines visualization */}
                <div className="absolute -right-12 -top-16">
                  <svg width="200" height="100" viewBox="0 0 200 100">
                    <path
                      d="M10,50 Q50,10 90,50 T170,50"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="4"
                      fill="transparent"
                      className="animate-pulse"
                      style={{ animationDuration: "3s" }}
                    />
                    <path
                      d="M10,50 Q50,10 90,50 T170,50"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="8"
                      fill="transparent"
                      className="animate-pulse"
                      style={{
                        animationDuration: "3s",
                        animationDelay: "0.2s",
                      }}
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>

              {/* Queue elements - stylized data nodes */}
              <div className="absolute w-full h-full">
                {/* Digital nodes representing clients being enqueued */}
                <div
                  className="absolute top-12 right-1/4 h-8 w-8 bg-white/70 rounded-md flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  <span className="text-[#01A7E1] font-bold text-xs">01</span>
                </div>
                <div
                  className="absolute bottom-1/3 right-20 h-10 w-10 bg-white/70 rounded-md flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
                >
                  <span className="text-[#01A7E1] font-bold text-xs">10</span>
                </div>

                {/* Processing indicators */}
                <div
                  className="absolute top-1/2 left-24 flex space-x-1 items-center animate-pulse"
                  style={{ animationDuration: "4s" }}
                >
                  <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                </div>
              </div>

              {/* Digital code brackets */}
              <div className="absolute left-10 top-20 text-4xl text-white/40 font-mono">{`{ }`}</div>
              <div className="absolute right-10 bottom-20 text-4xl text-white/40 font-mono">{`[ ]`}</div>

              {/* Active flow lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                {/* Enqueue flow line */}
                <path
                  d="M50,200 C100,120 300,280 350,200"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6,3"
                />
                <circle cx="50" cy="200" r="4" fill="white">
                  <animate
                    attributeName="cx"
                    values="50;350;50"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            {/* Digital particles */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/80 rounded-full animate-ping"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 8 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
