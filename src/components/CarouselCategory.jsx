import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CategoryCard from './CategoryCard';

import { categoriesExamples } from '@/mockData/categories';

const CarouselCategory = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-[70%] md:w-[80%] max-w-7xl mx-auto bg-black"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {categoriesExamples.map((category) => (
          <CarouselItem
            key={category.name}
            className="basis-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
          >
            <CategoryCard category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCategory;
