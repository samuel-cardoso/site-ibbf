import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //CarouselNext,
  //CarouselPrevious
} from "@/components/ui/carousel";

export default function Carrossel() {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              src={`/image-${index}.png`}
              alt={`Figura ${index+1}`}
              className="object-center rounded-lg h-70 w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
