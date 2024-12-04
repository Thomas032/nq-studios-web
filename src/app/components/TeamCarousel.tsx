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
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {teamData.map((member, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
            <TeamCard
              id={member.id}
              name={member.name}
              description={member.description}
              position={member.position}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TeamCarousel;
