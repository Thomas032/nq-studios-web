"use client";

import Image from "next/image";
import data from "@/data/accordionData.json";
import { CiCircleCheck } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full">
      {/* Timeline Navigation */}
      <div className="relative">
        <div className="hidden sm:block h-1 bg-gray-200 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0"></div>
        <div
          className="hidden sm:block h-1 bg-gradient-to-r from-[#01A7E1] to-[#0152A1] absolute top-1/2 left-0 transform -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeStep + 1) * 25}%` }}
        ></div>

        <div className="flex justify-between relative z-10">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  index <= activeStep
                    ? "bg-gradient-to-r from-[#01A7E1] to-[#0152A1] text-white shadow-lg"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
                }`}
              >
                <span className="text-lg font-semibold">{index + 1}</span>
              </div>
              <span
                className={`hidden sm:block text-center text-sm font-medium whitespace-nowrap px-1 transition-colors duration-300 ${
                  index <= activeStep ? "text-[#01A7E1]" : "text-gray-500"
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="mt-8 bg-gray-50 rounded-lg shadow-sm p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-8"
          >
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[300px] relative rounded-lg overflow-hidden shadow-lg group">
                <div className="absolute inset-0  z-10"></div>
                <Image
                  src={data[activeStep].content.image}
                  alt={data[activeStep].content.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col space-y-5">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-medium text-[#01A7E1] mb-2">
                  {data[activeStep].content.heading}
                </h3>
                <span className="text-sm bg-[#01A7E1]/10 px-3 py-1 rounded-full text-[#01A7E1]">
                  Step {activeStep + 1} of {data.length}
                </span>
              </div>
              <p className="text-gray-700">
                {data[activeStep].content.description}
              </p>
              <ul className="list-none space-y-4 mt-2">
                {data[activeStep].content.items.map((listItem, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-gray-800 pl-2 group/item"
                  >
                    <span className="text-[#01A7E1] flex items-center justify-center w-6 h-6 rounded-full bg-[#01A7E1]/10 group-hover/item:bg-[#01A7E1]/20 transition-colors duration-300">
                      <CiCircleCheck className="text-xl flex-shrink-0" />
                    </span>
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                      {listItem}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-6 pt-4">
                {activeStep > 0 && (
                  <Button
                    variant="outline"
                    className="border-[#01A7E1] text-[#01A7E1] hover:bg-[#01A7E1]/5"
                    onClick={() =>
                      setActiveStep((prev) => Math.max(0, prev - 1))
                    }
                  >
                    Previous Step
                  </Button>
                )}
                {activeStep < data.length - 1 ? (
                  <Button
                    className="bg-gradient-to-r from-[#01A7E1] to-[#0152A1] text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      setActiveStep((prev) =>
                        Math.min(data.length - 1, prev + 1)
                      )
                    }
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    className="bg-gradient-to-r from-[#01A7E1] to-[#0152A1] text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={openContactDialog}
                  >
                    {data[activeStep].content.buttonText}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
