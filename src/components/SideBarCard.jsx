export const SideBarCard = ({
  dataToSideCard,
  country,
  name,
  systemPattern,
}) => {
  if (!dataToSideCard) return <></>;
  const icon = dataToSideCard["icon"];
  const hour = dataToSideCard["time"];
  const date = dataToSideCard["dt"];
  const temp = dataToSideCard["temp"];
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
      </div>
    </div>
  );
};
