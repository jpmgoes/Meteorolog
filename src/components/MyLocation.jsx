import { useContext } from "react";
import { getNameByLatAndLon } from "../api/getLocation";
import { LocationInfoContext } from "../App";

export const MyLocation = () => {
  const { setLocation, setName, setCountry } = useContext(LocationInfoContext);
  function getCurrentlyLocation() {
    const successCallback = (location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      console.log(lat, lon);
      setLocation([lat, lon]);
      getNameByLatAndLon(lat, lon).then((data) => {
        const name = data["results"][0]["components"]["city"];
        const country = data["results"][0]["components"]["country"];
        setCountry(country);
        setName(name);
      });
    };
    const errorCallback = (errou) => {
      console.log(errou);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 1000,
    });
  }
  return (
    <button className="my-location" onClick={getCurrentlyLocation}>
      My location
    </button>
  );
};
