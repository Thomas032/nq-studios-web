// components/VacancyCard.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface VacancyCardProps {
  title: string;
  description: string;
  tags: string[];
  location: string;
  type: string;
  onClick: () => void;
}

export default function VacancyCard({
  title,
  description,
  tags,
  location,
  type,
  onClick,
}: VacancyCardProps) {
  return (
    <div className="group relative border border-gray-200 rounded-lg p-6  transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col justify-between">
        {/* Header with location and type */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{location}</span>
          <span>{type}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium  transition-colors">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Apply button */}
        <div className="pt-4">
          <Button
            onClick={onClick}
            className="w-full bg-black text-white transition-colors group"
          >
            View details
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
