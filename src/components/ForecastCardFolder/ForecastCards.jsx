import { Carousel } from "../../layout/carousel/Carousel";

import { ForecastCardsContent } from "./ForecastCardsContent";
import "./style/style.scss";

export const ForecastCards = () => {
  return (
    <div>
      <Carousel classname="__forecast">
        <ForecastCardsContent />
      </Carousel>
    </div>
  );
};
