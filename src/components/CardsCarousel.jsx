import React from "react";
import { Carousel } from "../layout/carousel/Carousel";
import { CardsCarouselContent } from "./CardsCarouselContent";

export const CardsCarousel = () => {
  return (
    <div>
      <h3>London</h3>
      <Carousel>
        <CardsCarouselContent />
      </Carousel>
    </div>
  );
};
