import React, { useContext } from "react";
import { Carousel } from "../../layout/carousel/Carousel";
import { CardsCarouselContent } from "./CardsCarouselContent";
import { LocationInfoContext } from "../../App";

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
