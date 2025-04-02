import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TeamCard from "./TeamCard";
import teamData from "@/data/teamData.json";

const TeamCarousel = () => {
  return (
    <div className="w-full max-w-6xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="mb-5">
          {teamData.map((member, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full">
                <TeamCard
                  id={member.id}
                  name={member.name}
                  description={member.description}
                  position={member.position}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static bg-gray-100 hover:bg-gray-200 transform-none" />
          <CarouselNext className="static bg-gray-100 hover:bg-gray-200 transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default TeamCarousel;
