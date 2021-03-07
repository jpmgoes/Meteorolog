import { getNameByLatAndLon } from "../api/getLocation";

export const MyLocation = ({ setLocation, setName }) => {
  function getCurrentlyLocation() {
    navigator.geolocation.getCurrentPosition((location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      setLocation([lat, lon]);
      getNameByLatAndLon(lat, lon).then((data) => {
        const name = data["results"][0]["components"]["city"];
        setName(name);
      });
    });
  }
  return (
    <button className="my-location" onClick={getCurrentlyLocation}>
      My location
    </button>
  );
};
