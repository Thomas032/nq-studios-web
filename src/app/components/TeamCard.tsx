"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MdKeyboardArrowRight } from "react-icons/md";

interface TeamCardProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
  link?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  imageSrc,
  name,
  position,
  description,
  link,
}) => {
  return (
    <Card className="border-none shadow-none p-0">
      <CardContent className="flex flex-col items-start justify-center gap-3 relative p-0">
        <Badge className="absolute top-2 left-2 cursor-default hover:bg-black">
          {position}
        </Badge>
        <Image
          src={imageSrc}
          alt={name}
          style={{ objectFit: "contain" }}
          width={500}
          height={500}
          className="w-full"
        />
        <h4 className="text-xl font-medium">{name}</h4>
        <p className="text-sm">{description}</p>
        {/* check if linked in profile link exists */}
        {link && (
          <a
            href={link}
            className="text-sm text-[#01A7E1] underline flex flex-row justify-start items-center"
          >
            LinkedIn profile <MdKeyboardArrowRight />
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamCard;
