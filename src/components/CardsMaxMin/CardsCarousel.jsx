import React from "react";
import { Carousel } from "../../layout/carousel/Carousel";
import { CardsCarouselContent } from "./CardsCarouselContent";

export const CardsCarousel = ({ name, data }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Carousel
        contentName="cards-carousel"
        styleName="carousel carousel__cards-carousel__style"
      >
        <CardsCarouselContent data={data} />
      </Carousel>
    </div>
  );
};
