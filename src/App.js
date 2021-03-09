import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  handleDataToCardsCarousel,
  handleDataToSideCard,
} from "./api/dataManipulation";
import { formatLocation, getLocation } from "./api/getLocation";
import { getWeather } from "./api/getWeather";
// pages
import Index from "./pages/Index";
import Settings from "./pages/Settings";

function App() {
  const [name, setName] = useState("London");
  const [country, setCountry] = useState("England");
  const [dataToSideCard, setDataToSideCard] = useState({});
  const [input, setInput] = useState("");
  const [location, setLocation] = useState([]);
  // const [location, setLocation] = useState([51.5073219, 0.1276474]);
  const [systemPattern, setSystemPattern] = useState("metric");
  const [dataToCardsCarousel, setDataToCardsCarousel] = useState("");
  useEffect(() => {
    if (input && input.toLowerCase() !== name.toLowerCase())
      getLocation(input).then((data) => {
        if (data) {
          const firstResult = data["results"][0];
          const latitude = firstResult["annotations"]["DMS"]["lat"];
          const longitude = firstResult["annotations"]["DMS"]["lng"];
          const localName = firstResult["formatted"].split(",")[0];
          const localCountry = firstResult["components"]["country"];
          setName(`${localName}`);
          setCountry(`${localCountry}`);
          const lat = formatLocation(latitude, "S");
          const lon = formatLocation(longitude, "W");
          getWeather(lat, lon, "metric").then((weatherData) => {
            console.log("requeste feita", weatherData);
            if (weatherData["cod"] === undefined) {
              setDataToCardsCarousel(handleDataToCardsCarousel(weatherData));
              setDataToSideCard(handleDataToSideCard(weatherData));
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
          setDataToSideCard(handleDataToSideCard(weatherData));
        }
      });
  }, [location]);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Index
              {...props}
              setName={setName}
              name={name}
              country={country}
              setCountry={setCountry}
              dataToSideCard={dataToSideCard}
              setDataToSideCard={setDataToSideCard}
              setInput={setInput}
              setLocation={setLocation}
              dataToCardsCarousel={dataToCardsCarousel}
              systemPattern={systemPattern}
            />
          )}
        />
        <Route
          exact
          path="/settings"
          render={(props) => (
            <Settings
              {...props}
              name={name}
              country={country}
              dataToSideCard={dataToSideCard}
              systemPattern={systemPattern}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
