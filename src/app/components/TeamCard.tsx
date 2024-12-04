"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  id: string;
  name: string;
  description: string;
  position: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, description, position }) => {
  return (
    <Card className="border rounded-xl overflow-hidden transition-all duration-300">
      <CardContent className="p-6 relative">
        <Badge className="absolute top-4 left-4 z-10 cursor-default">
          {position}
        </Badge>

        <div className="flex flex-col items-start space-y-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl font-bold text-gray-500 self-center">
            {name.charAt(0)}
          </div>

          <div className="text-center w-full">
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
