import montreal from "../../img/montreal.jpg";
import amsterdam from "../../img/amsterdam.jpg";
import london from "../../img/london.jpg";
import kyoto from "../../img/kyoto.jpg";
import chengdu from "../../img/chengdu.jpg";
import sun from "../../img/sun.svg";
import Icon from "supercons";

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

export const ForecastCardsContent = ({ setInput }) => {
  const items = new Array(arrTime.length).fill(null).map((_, index) => {
    const time = displayCityTime(arrTime[index]);
    const hour = +displayCityTime(arrTime[index]).split(":")[0];
    const countryName = arrNameTime[index];
    return (
      <div className="forecast-cards" onClick={() => setInput(countryName)}>
        <div className="forecast-cards__item">
          <div
            className="forecast-cards__item__img"
            style={{ backgroundImage: `url(${imgArr[index]})` }}
          >
            <div className="forecast-cards__item__img__icon">
              {6 <= hour && hour <= 18 ? (
                <div
                  style={{
                    backgroundImage: `url(${sun})`,
                    width: "10px",
                    height: "10px",
                    backgroundPosition: "center",
                    position: "absolute;",
                    bottom: "91px;",
                    right: "8px;",
                  }}
                ></div>
              ) : (
                <Icon glyph="moon" size={10} />
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
