import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";

export default function Carrossel() {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              src={`igreja/image-${index+1}.png`}
              alt={`Figura ${index+1}`}
              className="object-center rounded-lg h-70 w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
