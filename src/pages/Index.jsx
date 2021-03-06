import React, { useEffect, useState } from "react";

import { getLocation } from "../api/getLocation";
import { getWeather } from "../api/getWeather";
import { Layout } from "../layout/Layout";
import { ForecastCards } from "../components/ForecastCardFolder/ForecastCards";
import { Form } from "../components/Form";
import { CardsCarousel } from "../components/CardsCarousel";

const Index = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (input)
      getLocation(input).then((data) => {
        console.log(data);
        const arrData = data["data"];
        if (arrData.length > 0) {
          const firstResult = arrData[0];
          const lat = firstResult.latitude;
          const lon = firstResult.longitude;
          getWeather(lat, lon, "metric").then((weatherData) => {
            console.log("requeste feita");
            if (weatherData["cod"] === undefined) {
            }
          });
        }
      });
  }, [input]);
  return (
    <>
      <Layout queryPag={"navbar__dashboard"}>
        <div className="main__square__right__search">
          <Form input={input} setInput={setInput} />
        </div>
        <div className="main__square__right__weather-forecast">
          <ForecastCards setInput={setInput} />
        </div>
        <div className="main__square__right__cards">
          <CardsCarousel />
        </div>
        <div className="main__square__right__weather-graph"></div>
      </Layout>
    </>
  );
};
export default Index;
