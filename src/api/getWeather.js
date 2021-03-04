export async function getWeather(lat, lon, unit) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ffd84af29d33bcf2c00bafbaeaf85b46&units=${unit}`
  );
  return response.json();
}
export function getWeatherTrated() {}
