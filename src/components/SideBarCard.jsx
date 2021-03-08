export const SideBarCard = ({ dataToSideCard }) => {
  if (!dataToSideCard) return <></>;
  const icon = dataToSideCard["icon"];
  console.log(dataToSideCard);
  return (
    <div className="side-bar-card">
      <div className="side-bar-card__square">
        <div className="side-bar-card__square__top">
          <img src={`./img/icons/weather/${icon}.svg`} alt="" />
          Today
        </div>
      </div>
    </div>
  );
};
