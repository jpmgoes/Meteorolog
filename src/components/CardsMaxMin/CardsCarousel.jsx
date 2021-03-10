import React, { useContext } from "react";
import { LocationInfoContext } from "../../App";
import { Carousel } from "../../layout/carousel/Carousel";
import { CardsCarouselContent } from "./CardsCarouselContent";

export const CardsCarousel = () => {
  const { name } = useContext(LocationInfoContext);
  return (
    <div>
      <h3>{name}</h3>
      <Carousel
        contentName="cards-carousel"
        styleName="carousel carousel__cards-carousel__style"
      >
        <CardsCarouselContent />
      </Carousel>
    </div>
  );
};
