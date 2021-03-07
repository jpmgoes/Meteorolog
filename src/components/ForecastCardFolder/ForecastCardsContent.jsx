import montreal from "../../img/montreal.jpg";
import amsterdam from "../../img/amsterdam.jpg";
import london from "../../img/london.jpg";
import kyoto from "../../img/kyoto.jpg";
import chengdu from "../../img/chengdu.jpg";
import sun from "../../img/sun.svg";
import moon from "../../img/moon.svg";

function displayCityTime(offset) {
  const aDate = new Date();
  const utc = aDate.getTime() + aDate.getTimezoneOffset() * 60000;
  const newdate = new Date(utc + 3600000 * offset);
  const hour = newdate.toLocaleString().split(" ")[1].split(":")[0];
  const minutes = newdate.toLocaleString().split(" ")[1].split(":")[1];
  return hour + ":" + minutes;
}

const imgArr = [montreal, amsterdam, london, kyoto, chengdu];
const arrTime = [-5, 1, 0, 9, 8];
const arrNameTime = ["Montreal", "Amsterdam", "London", "Kyoto", "Chengdu"];
const arrLocation = [
  [45.4972159, -73.6103642],
  [51.4371483, 5.9799001],
  [51.5073219, 0.1276474],
  [35.021041, 135.7556075],
  [30.6598628, 104.0633717],
];

export const ForecastCardsContent = ({ setName, setLocation, location }) => {
  const items = new Array(arrTime.length).fill(null).map((_, index) => {
    let time = displayCityTime(arrTime[index]);
    const hour = +displayCityTime(arrTime[index]).split(":")[0];
    if (hour < 10) time = "0" + time;
    const countryName = arrNameTime[index];
    return (
      <div
        className="forecast-cards"
        onClick={() => {
          setName(countryName);
          setLocation(arrLocation[index]);
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
          {countryName}
        </div>
      </div>
    );
  });
  return <>{items}</>;
};
