import { useContext } from "react";
import montreal from "../../img/jpg/montreal.jpg";
import amsterdam from "../../img/jpg/amsterdam.jpg";
import london from "../../img/jpg/london.jpg";
import kyoto from "../../img/jpg/kyoto.jpg";
import chengdu from "../../img/jpg/chengdu.jpg";
import { displayCityTime } from "../../api/dataManipulation";
import { LocationInfoContext } from "../../App";
const sun = "./img/icons/weather/01d.svg";
const moon = "./img/icons/weather/01n.svg";

const imgArr = [montreal, amsterdam, london, kyoto, chengdu];
const arrTime = [-5, 1, 0, 9, 8];
const arrNameTime = [
  "Montreal",
  "Amsterdam",
  "London",
  "Kyoto",
  "Chengdu",
  "China",
];
const arrLocation = [
  [45.4972159, -73.6103642],
  [51.4371483, 5.9799001],
  [51.5073219, 0.1276474],
  [35.021041, 135.7556075],
  [30.6598628, 104.0633717],
];
const arrCountry = ["Canada", "Netherlands", "England", "Japan"];

export const ForecastCardsContent = () => {
  const { setName, setLocation, setCountry, offset } = useContext(
    LocationInfoContext
  );

  const items = new Array(arrTime.length).fill(null).map((_, index) => {
    let time = displayCityTime(arrTime[index], offset);
    const hour = +displayCityTime(arrTime[index]).split(":")[0];
    const cityName = arrNameTime[index];
    return (
      <div
        className="forecast-cards"
        onClick={() => {
          setName(cityName);
          setLocation(arrLocation[index]);
          setCountry(arrCountry[index]);
        }}
      >
        <div className="forecast-cards__item">
          <div
            className="forecast-cards__item__img"
            style={{ backgroundImage: `url(${imgArr[index]})` }}
          >
            <div className="forecast-cards__item__img__icon">
              {6 <= hour && hour <= 18 ? (
                <img src={sun} alt="" />
              ) : (
                <img src={moon} alt="" />
              )}
            </div>
            <div className="forecast-cards__item__img__time" key={index}>
              <div className="forecast-cards__item__img__time__now">{time}</div>
            </div>
          </div>
          {cityName}
        </div>
      </div>
    );
  });
  return <>{items}</>;
};
