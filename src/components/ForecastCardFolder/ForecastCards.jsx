import { Carousel } from "../../layout/carousel/Carousel";

import { ForecastCardsContent } from "./ForecastCardsContent";
import "./style/style.scss";

export const ForecastCards = ({ setName, setLocation, location }) => {
  return (
    <div>
      <h3> Weather Forecast </h3>
      <Carousel classname="__forecast">
        <ForecastCardsContent
          setName={setName}
          setLocation={setLocation}
          location={location}
        />
      </Carousel>
    </div>
  );
};
