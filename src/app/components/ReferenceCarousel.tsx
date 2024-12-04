import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReferenceCard from "./ReferenceCard";
import referencesData from "@/data/referenceData.json";

const ReferenceCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        {referencesData.map((reference, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 relative"
          >
            <ReferenceCard
              imageSrc={reference.imageSrc}
              title={reference.title}
              description={reference.description}
              link={reference.link}
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
