import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CategoryCard from './CategoryCard';

const CarouselCategory = ({ categories }) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-[70%] md:w-[80%] max-w-7xl mx-auto bg-black"
    >
      <CarouselContent className="">
        {categories.map((category, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <CategoryCard key={index} category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCategory;
