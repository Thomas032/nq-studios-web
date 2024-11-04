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
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col items-start justify-center gap-3 p-0">
        <Image
          src={imageSrc}
          alt={title}
          style={{ objectFit: "contain" }}
          width={500}
          height={500}
          className="w-full"
        />
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-sm">{description}</p>
        <a href={link} className="text-sm text-[#01A7E1] underline">
          Visit website
        </a>
      </CardContent>
    </Card>
  );
};

export default ReferenceCard;
