import montreal from "../../img/montreal.jpg";
import amsterdam from "../../img/amsterdam.jpg";
import london from "../../img/london.jpg";
import kyoto from "../../img/kyoto.jpg";
import chengdu from "../../img/chengdu.jpg";

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

export const ForecastCardsContent = () => {
  const items = new Array(arrTime.length).fill(null).map((_, index) => {
    return (
      <div className="forecast-cards">
        <div className="forecast-cards__item">
          <div
            className="forecast-cards__item__img"
            style={{ backgroundImage: `url(${imgArr[index]})` }}
          >
            <div className="forecast-cards__item__img__time" key={index}>
              {displayCityTime(arrTime[index])}
            </div>
          </div>
          {arrNameTime[index]}
        </div>
      </div>
    );
  });
  return <>{items}</>;
};
