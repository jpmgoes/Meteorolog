import { Carousel } from "../../layout/carousel/Carousel";

import { ForecastCardsContent } from "./ForecastCardsContent";
import "./style/style.scss";

export const ForecastCards = ({ setInput }) => {
  return (
    <div>
      <Carousel classname="__forecast">
        <ForecastCardsContent setInput={setInput} />
      </Carousel>
    </div>
  );
};
