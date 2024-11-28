import { Carousel } from "../../_ui/Carousel";
import { CarouselItem } from "../../_ui/Carousel/CarouselItem";
import { CarouselItem1 } from "./ContentCarousel/Item1";
import { CarouselItem2 } from "./ContentCarousel/Item2";
import { CarouselItem3 } from "./ContentCarousel/Item3";
import { CarouselItem4 } from "./ContentCarousel/item4";
import { CarouselItem5 } from "./ContentCarousel/item5";

const carouselItems: React.ReactElement[] = [
  <CarouselItem1 key="item1" />,
  <CarouselItem2 key="item2" />,
  <CarouselItem3 key="item3" />,
  <CarouselItem4 key="item4" />,
  <CarouselItem5 key="item5" />,
];

export const Section3: React.FC = () => {
  return (
    <div className="container mx-auto px-[15px] sm:px-[5px] lg:px-[22px] h-full py-20">
      <div className="text-[42px] font-bold text-gray-800 leading-[52px] text-center">
        O resultado: seu negócio mais {""}
        <span className="text-blue-500">
          organizado,
          <br />
          produtivo
        </span>{" "}
        e com maior potencial de{" "}
        <span className="text-blue-500">crescimento!</span>
      </div>

      <div className="mt-20">
      <Carousel showNavigationArrows={true} itemsPerView={1}>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>{item}</CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
