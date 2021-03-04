import { useEffect, useState } from "react";
import { getLocation, getLocationTrated } from "../api/getLocation";
import { getWeather } from "../api/getWeather";
import { Chart } from "./Chart";

export function Card({ input }) {
  const [locationValues, setLocationValues] = useState();
  const [weatherValue, setWeatherValues] = useState();

  useEffect(() => {
    if (input)
      getLocation(input).then((data) => {
        const arrData = data["data"];
        if (arrData.length > 0) {
          const firstResult = arrData[0];
          setLocationValues(firstResult);
          const lat = firstResult.latitude;
          const lon = firstResult.longitude;
          getWeather(lat, lon, "metric").then((weatherData) => {
            console.log("requeste feita");
            if (weatherData["cod"] === undefined) setWeatherValues(weatherData);
          });
        }
      });
  }, [input]);
  let arrData = new Array(4).fill(null);
  if (locationValues) arrData = getLocationTrated(locationValues);
  return (
    <div>
      <hr />
      <ul>
        <li>{arrData[0] ? <p>latitude: {arrData[0]}</p> : <></>}</li>
        <li>{arrData[1] ? <p>longitude: {arrData[1]}</p> : <></>}</li>
        <li>{arrData[2] ? <p>region: {arrData[2]}</p> : <></>}</li>
        <li>{arrData[3] ? <p>label: {arrData[3]}</p> : <></>}</li>
      </ul>
      <Chart weatherValue={weatherValue} />
    </div>
  );
}
