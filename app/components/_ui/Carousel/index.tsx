"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CarouselProps {
  children: React.ReactNode;
  showNavigationArrows?: boolean;
  itemsPerView?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  showNavigationArrows,
  itemsPerView = 5,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-out ${
            itemsPerView > 1 ? "gap-10" : ""
          }`}
          style={{
            transform: `translateX(${-activeIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0`}
              style={{
                width: `${
                  itemsPerView > 1
                    ? `calc(${100 / itemsPerView}% - ${39}px)`
                    : `calc(${100 / itemsPerView}%)`
                }`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 space-x-2 flex">
        {itemsPerView === 1
          ? childrenArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-[10px] h-[10px] rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-blue-500"
                    : "bg-transparent border-[1px] border-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))
          : childrenArray
              .slice(0, childrenArray.length - itemsPerView + 1)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-[10px] h-[10px] rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-blue-500"
                      : "bg-transparent border-[1px] border-gray-300"
                  }`}
                />
              ))}
      </div>

      {showNavigationArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute -left-16 top-1/2 -translate-y-1/2 transition-all hidden xl:block"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-8 h-8 text-gray-400" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 transition-all hidden xl:block"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-8 h-8 text-gray-400" />
          </button>
        </>
      )}
    </div>
  );
};
