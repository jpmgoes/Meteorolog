import { verify } from "./WrapFlex";
import arrowLeft from "../../img/arrowLeft.svg";
import arrowRight from "../../img/arrowRight.svg";

function toMove(direction) {
  const arrow = document.querySelector(".wrap-flex");
  const distance = arrow.clientWidth;
  let value = 1;
  if (direction === "left") value = -1;
  const motion = arrow.scrollLeft + (distance / 2) * value;
  arrow.scrollTo({
    top: 0,
    left: motion,
    behavior: "smooth",
  });
}

export function Button({ direction }) {
  const style = {
    width: "50px",
    height: "50px",
    left: "10px",
    backgroundPosition: "center",
  };
  if (direction === "left") {
    return (
      <button
        className="left wraperBtn"
        onClick={() => toMove("left")}
        onMouseMove={verify}
        style={{ backgroundImage: `url(${arrowLeft})`, left: "30px", ...style }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
    );
  }
  return (
    <button
      className="right wraperBtn"
      onClick={() => toMove("right")}
      onMouseMove={verify}
      style={{ backgroundImage: `url(${arrowRight})`, right: "30px", ...style }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </button>
  );
}
