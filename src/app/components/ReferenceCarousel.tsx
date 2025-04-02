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
    <div className="w-full max-w-6xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="mb-5">
          {referencesData.map((reference, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
            >
              <div className="h-full">
                <ReferenceCard
                  imageSrc={reference.imageSrc}
                  title={reference.title}
                  description={reference.description}
                  link={reference.link}
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

export default ReferenceCarousel;
