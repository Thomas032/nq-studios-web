"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import data from "@/data/accordionData.json";
import { CiCircleCheck } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function AccordionDemo() {
  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full p-4 bg-zinc-100 rounded-lg"
      defaultValue={data[0]?.id}
    >
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-xl flex justify-between items-center py-4 hover:no-underline">
            <span className="w-full flex flex-row gap-5 items-center lg:text-base">
              <span className="ring-1 ring-black w-5 h-5 text-sm rounded-full items-center justify-center">
                {data.indexOf(item) + 1}
              </span>
              {item.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="py-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <img
                  src={item.content.image}
                  alt={item.content.alt}
                  className="rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="lg:w-1/2 flex flex-col space-y-6">
                <h3 className="text-3xl font-medium">{item.content.heading}</h3>
                <p className="text-lg lg:text-base">
                  {item.content.description}
                </p>
                <ul className="list-none space-y-2 font-medium">
                  {item.content.items.map((listItem, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2 text-lg lg:text-base"
                    >
                      <CiCircleCheck />
                      {listItem}
                    </li>
                  ))}
                </ul>
                {/* display if last index */}
                {data.indexOf(item) === data.length - 1 ? (
                  <Button
                    className="bg-[#01A7E1] text-white hover:bg-[#018DBF] w-fit"
                    onClick={openContactDialog}
                  >
                    {item.content.buttonText}
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
