import "./style/index.scss";
import { LocationInfoContext } from "../../App";
import { useContext } from "react";

export const CardsCarouselContent = () => {
  const arr = new Array(8).fill(null);
  const { dataToCardsCarousel } = useContext(LocationInfoContext);
  const data = dataToCardsCarousel;
  return (
    <>
      {arr.map((_, index) => {
        let minMax = "-2/+5";
        let day = "Mon 12";
        let icon = "01d";
        if (data) {
          minMax = data["minMax"][index];
          day = data["day"][index];
          icon = data["icon"][index];
        }
        return (
          <div className={`card-square`}>
            <img
              src={`./img/icons/weather/${icon}.svg`}
              className="card-square__icon"
              alt=""
            />
            <div className="card-square__temp">{minMax}</div>
            <div className="card-square__day">{day}</div>
          </div>
        );
      })}
    </>
  );
};
