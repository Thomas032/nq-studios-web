"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ReferenceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({
  imageSrc,
  title,
  description,
  link,
}) => {
  return (
    <Card className="border-none shadow-md overflow-hidden rounded-lg h-full flex flex-col">
      <CardContent className="flex flex-col items-start gap-4 p-0 h-full">
        <div className="w-full h-64 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#01A7E1]/10 to-[#0a2447]/10 opacity-0 transition-opacity duration-500 z-10"></div>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-5 py-4 space-y-3 w-full flex-grow flex flex-col">
          <h4 className="text-xl font-medium text-gray-800">{title}</h4>
          <p className="text-gray-600 text-sm flex-grow">{description}</p>
          <a
            href={link}
            className="inline-block text-[#01A7E1] hover:text-[#0152A1] font-medium transition-colors duration-300 group mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">
              →
            </span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferenceCard;
