import React, { useEffect, useState } from "react";

import { getLocation, formatLocation } from "../api/getLocation";
import { getWeather } from "../api/getWeather";
import { Layout } from "../layout/Layout";
import { ForecastCards } from "../components/ForecastCardFolder/ForecastCards";
import { Form } from "../components/Form";
import { CardsCarousel } from "../components/CardsMaxMin/CardsCarousel";

const Index = () => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (input)
      getLocation(input).then((data) => {
        if (data) {
          const firstResult = data["results"][0];
          const latitude = firstResult["annotations"]["DMS"]["lat"];
          const longitude = firstResult["annotations"]["DMS"]["lng"];
          const localName = firstResult["formatted"].split(",")[0];
          setName(`${localName}`);
          const lat = formatLocation(latitude, "S");
          const lon = formatLocation(longitude, "W");
          getWeather(lat, lon, "metric").then((weatherData) => {
            console.log("requeste feita", weatherData);
            if (weatherData["cod"] === undefined) {
            }
          });
        }
      });
  }, [input]);
  useEffect(() => {
    if (location.length > 0)
      getWeather(location[0], location[1], "metric").then((weatherData) => {
        console.log("requeste feita 2", weatherData);
        if (weatherData["cod"] === undefined) {
        }
      });
  }, [location]);
  return (
    <Layout queryPag={"navbar__dashboard"}>
      <div className="main__square__right__search">
        <Form input={input} setInput={setInput} />
      </div>
      <div className="main__square__right__weather-forecast">
        <ForecastCards
          setName={setName}
          setLocation={setLocation}
          location={location}
        />
      </div>
      <div className="main__square__right__cards">
        <CardsCarousel name={name} />
      </div>
      <div className="main__square__right__weather-graph"></div>
    </Layout>
  );
};
export default Index;
