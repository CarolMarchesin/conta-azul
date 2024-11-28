import React, { useState, useEffect } from "react";
import { Carousel } from "../../_ui/Carousel";
import { CarouselItem } from "../../_ui/Carousel/CarouselItem";
import Image from "next/image";
import { carouselItems } from "@/constants/listCarouselSection4";

export const Section4: React.FC = () => {
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 976) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(4);
      }
      else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-lightbluegray h-full">
    <div className="container mx-auto px-[15px] sm:px-[5px] lg:px-[22px] h-full py-20">
    <div className="text-[42px] font-bold text-gray-800 leading-[52px] mb-5">
          <span className="text-blue-500">Segmentos </span> Variados
        </div>

        <div className="mb-7 font-medium text-darksilver">
          Atuamos em muitos segmentos. Deixa a Conta Azul te ajudar! Qual o seu
          perfil de negócio?
        </div>

        <Carousel itemsPerView={itemsPerView}>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative inline-block">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="rounded-md"
                  width={300}
                  height={300}
                />
                <div className="rounded-md absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500 to-transparent flex items-end justify-center">
                  <span className="text-white font-semibold text-center p-4 text-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
