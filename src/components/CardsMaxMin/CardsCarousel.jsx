import React from "react";
import { Carousel } from "../../layout/carousel/Carousel";
import { CardsCarouselContent } from "./CardsCarouselContent";

export const CardsCarousel = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Carousel contentName="cards-carousel" styleName="carousel">
        <CardsCarouselContent />
      </Carousel>
    </div>
  );
};
