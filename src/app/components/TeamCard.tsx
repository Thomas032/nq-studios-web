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
    <Card className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]">
      <CardContent className="p-6 relative">
        <Badge className="absolute top-4 left-4 z-10 cursor-default bg-gradient-to-r from-[#01A7E1] to-[#0152A1] hover:from-[#01A7E1] hover:to-[#0152A1]">
          {position}
        </Badge>

        <div className="flex flex-col items-start space-y-4">
          <div className="w-24 h-24 bg-gradient-to-br from-[#01A7E1] to-[#0a2447] rounded-xl rotate-45 flex items-center justify-center text-4xl font-bold text-white self-center shadow-md transform hover:rotate-[30deg] transition-transform duration-500">
            <span className="-rotate-45">{name.charAt(0)}</span>
          </div>

          <div className="text-center w-full mt-4">
            <h4 className="text-xl font-semibold mt-2">{name}</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
