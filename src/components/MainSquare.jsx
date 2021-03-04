import { useEffect } from "react";
import "./style/index.scss";

import { getLocation } from "../api/getLocation";
import { getWeather } from "../api/getWeather";
import { Form } from "./Form";

export const MainSquare = ({ input, setInput }) => {
  // const [locationValues, setLocationValues] = useState();
  // const [weatherValue, setWeatherValues] = useState();
  useEffect(() => {
    if (input)
      getLocation(input).then((data) => {
        const arrData = data["data"];
        if (arrData.length > 0) {
          const firstResult = arrData[0];
          // setLocationValues(firstResult);
          const lat = firstResult.latitude;
          const lon = firstResult.longitude;
          getWeather(lat, lon, "metric").then((weatherData) => {
            console.log("requeste feita");
            if (weatherData["cod"] === undefined) {
              // setWeatherValues(weatherData);
            }
          });
        }
      });
  }, [input]);
  return (
    <div className="main">
      <div className="main__square">
        <div className="main__square__left"></div>
        <div className="main__square__rigth">
          <div className="main__square__right__search">
            <Form input={input} setInput={setInput} />
          </div>
          <div className="main__square__right__weather-forecast"></div>
          <div className="main__square__right__cards"></div>
          <div className="main__square__right__weather-graph "></div>
        </div>
      </div>
    </div>
  );
};
