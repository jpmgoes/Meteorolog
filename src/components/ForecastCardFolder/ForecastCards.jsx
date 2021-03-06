import { Carousel } from "../../layout/carousel/Carousel";

import { ForecastCardsContent } from "./ForecastCardsContent";
import "./style/style.scss";

export const ForecastCards = ({ setInput }) => {
  return (
    <div>
      <h3> Weather Forecast </h3>
      <Carousel classname="__forecast">
        <ForecastCardsContent setInput={setInput} />
      </Carousel>
    </div>
  );
};
