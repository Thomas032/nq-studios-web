import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReferenceCard from "./ReferenceCard";

const ReferenceCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <ReferenceCard
              imageSrc="/images/reference_placeholder.png"
              title="ExpoBoats app"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus sodales."
              link="#web_link"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReferenceCarousel;
