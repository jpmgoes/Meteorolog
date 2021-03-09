import { Bar } from "./Bar";
import { Speedometer } from "./Speedometer";

export const SideBarCard = ({
  dataToSideCard,
  country,
  name,
  systemPattern,
}) => {
  console.log(dataToSideCard);
  if (!dataToSideCard) return <></>;
  const icon = dataToSideCard["icon"];
  const hour = dataToSideCard["time"];
  const date = dataToSideCard["dt"];
  const temp = dataToSideCard["temp"];
  let precip = dataToSideCard["precipitation"];
  const wind = dataToSideCard["wind_speed"];
  const humidity = dataToSideCard["humidity"];
  return (
    <div className="side-bar-card">
      <div className="side-bar-card__square">
        <div className="side-bar-card__square__top">
          <img src={`./img/icons/weather/${icon}.svg`} alt="" />
          <div className="side-bar-card__square__top__date">
            <div className="side-bar-card__square__top__date__today">Today</div>
            <div className="side-bar-card__square__top__date__hour">
              <h5>{hour}</h5>
              <p>{date}</p>
            </div>
          </div>
        </div>
        <div className="side-bar-card__square__middle">
          <div className="side-bar-card__square__middle__temp">
            {temp}
            {systemPattern === "metric" ? "°C" : "°F"}
          </div>
          <div className="side-bar-card__square__middle__location">
            <div className="side-bar-card__square__middle__location__city">
              <h2>{name}</h2>
            </div>
            <div className="side-bar-card__square__middle__location__country">
              {country}
            </div>
          </div>
        </div>
        <div className="side-bar-card__square__foot">
          <div className="side-bar-card__square__foot__percent">
            <div className="side-bar-card__square__foot__percent__humi">
              Humidity:
              <div className="side-bar-card__square__foot__percent__humi__txt">
                {humidity}%
              </div>
            </div>
            <Bar porc={humidity} />
            <div className="side-bar-card__square__foot__percent__preci">
              Precipitation:
              <div className="side-bar-card__square__foot__percent__preci__txt">
                {precip > 1 && precip !== null ? (precip = 1) : ""}
                {precip ?? "0"}mm
              </div>
            </div>
            <Bar porc={precip * 100} />
          </div>
          <div className="side-bar-card__square__foot__wind">
            Wind:
            <Speedometer vel={wind} />
            <div className="side-bar-card__square__foot__wind__txt">
              {wind + " "}
              {systemPattern === "metric" ? "Km/h" : "Mph"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
