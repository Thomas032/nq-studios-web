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
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 relative"
          >
            <ReferenceCard
              imageSrc="/images/reference_placeholder.png"
              title="ExpoBoats app"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus sodales."
              link="#web_link"
            ></ReferenceCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5" />
      <CarouselNext className="absolute right-5" />
    </Carousel>
  );
};

export default ReferenceCarousel;
