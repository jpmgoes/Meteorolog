import React from "react";
import { Carousel } from "../../layout/carousel/Carousel";
import { CardsCarouselContent } from "./CardsCarouselContent";

export const CardsCarousel = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Carousel classname={"__cards-carousel"}>
        <CardsCarouselContent />
      </Carousel>
    </div>
  );
};
