import { useContext } from "react";
import { LocationInfoContext } from "../../App";
import { Carousel } from "../../layout/carousel/Carousel";

import { ForecastCardsContent } from "./ForecastCardsContent";
import "./style/style.scss";

export const ForecastCards = () => {
  const { setName, setLocation, setCountry } = useContext(LocationInfoContext);
  return (
    <div>
      <h3> Weather Forecast </h3>
      <Carousel contentName="forecast" styleName="carousel">
        <ForecastCardsContent
          setName={setName}
          setLocation={setLocation}
          setCountry={setCountry}
        />
      </Carousel>
    </div>
  );
};
