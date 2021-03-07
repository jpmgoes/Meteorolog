import React, { useEffect, useState } from "react";

import { getLocation, formatLocation } from "../api/getLocation";
import { getWeather } from "../api/getWeather";
import { Layout } from "../layout/Layout";
import { ForecastCards } from "../components/ForecastCardFolder/ForecastCards";
import { Form } from "../components/Form";
import { CardsCarousel } from "../components/CardsMaxMin/CardsCarousel";
import { handleDataToCardsCarousel } from "../api/dataManipulation";
import { MyLocation } from "../components/MyLocation";

const Index = () => {
  const [input, setInput] = useState("");
  // const [location, setLocation] = useState([51.5073219, 0.1276474]);
  const [location, setLocation] = useState([]);
  const [name, setName] = useState("London");
  const [dataToCardsCarousel, setDataToCardsCarousel] = useState("");
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
              setDataToCardsCarousel(handleDataToCardsCarousel(weatherData));
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
          setDataToCardsCarousel(handleDataToCardsCarousel(weatherData));
        }
      });
  }, [location]);
  return (
    <Layout queryPag={"navbar__dashboard"}>
      <div className="main__square__right__search">
        <Form
          input={input}
          setInput={setInput}
          setLocation={setLocation}
          setName={setName}
        />
        <MyLocation setName={setName} setLocation={setLocation} />
      </div>
      <div className="main__square__right__weather-forecast">
        <ForecastCards
          setName={setName}
          setLocation={setLocation}
          location={location}
        />
      </div>
      <div className="main__square__right__cards">
        <CardsCarousel name={name} data={dataToCardsCarousel} />
      </div>
      <div className="main__square__right__weather-graph"></div>
    </Layout>
  );
};
export default Index;
