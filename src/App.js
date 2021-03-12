import { useEffect, useState, createContext } from "react";
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

export const LocationInfoContext = createContext();

function App() {
  const [name, setName] = useState("London");
  const [country, setCountry] = useState("England");
  const [dataToSideCard, setDataToSideCard] = useState({});
  const [input, setInput] = useState("");
  // const [location, setLocation] = useState([]);
  const [location, setLocation] = useState([51.5073219, 0.1276474]);
  const [systemPattern, setSystemPattern] = useState(
    window.localStorage.getItem("systemPattern") || "metric"
  );
  const [dataToCardsCarousel, setDataToCardsCarousel] = useState("");
  const [offset, setOffset] = useState("");

  useEffect(() => {
    if (input && input.toLowerCase() !== name.toLowerCase())
      getLocation(input).then((data) => {
        if (data) {
          const firstResult = data["results"][0];
          const latitude = firstResult["annotations"]["DMS"]["lat"];
          const longitude = firstResult["annotations"]["DMS"]["lng"];
          const localName = firstResult["formatted"].split(",")[0];
          const localCountry = firstResult["components"]["country"];
          const lat = formatLocation(latitude, "S");
          const lon = formatLocation(longitude, "W");
          setName(`${localName}`);
          setCountry(`${localCountry}`);
          setLocation([lat, lon]);
        }
      });
  }, [input, name, systemPattern]);
  useEffect(() => {
    if (location.length > 0)
      getWeather(location[0], location[1], systemPattern).then(
        (weatherData) => {
          console.log("requeste feita", weatherData);
          if (weatherData["cod"] === undefined) {
            setDataToCardsCarousel(handleDataToCardsCarousel(weatherData));
            setDataToSideCard(handleDataToSideCard(weatherData));
            setOffset(weatherData["current"]["dt"]);
          }
        }
      );
  }, [location, systemPattern]);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LocationInfoContext.Provider
              value={{
                setName,
                name,
                setCountry,
                country,
                setDataToSideCard,
                dataToSideCard,
                setInput,
                setLocation,
                dataToCardsCarousel,
                systemPattern,
                offset,
              }}
            >
              <Index {...props} />
            </LocationInfoContext.Provider>
          )}
        />
        <Route
          exact
          path="/settings"
          render={(props) => (
            <LocationInfoContext.Provider
              value={{
                name,
                country,
                dataToSideCard,
                systemPattern,
                setSystemPattern,
              }}
            >
              <Settings {...props} />
            </LocationInfoContext.Provider>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
