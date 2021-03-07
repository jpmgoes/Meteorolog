import { verify } from "./WrapFlex";
import arrowLeft from "../../img/icons/arrowLeft.svg";
import arrowRight from "../../img/icons/arrowRight.svg";

function toMove(direction, contentName) {
  const arrow = document.querySelector(`.wrap-flex__${contentName}`);
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

export function Button({ direction, contentName }) {
  const style = {
    width: "50px",
    height: "50px",
    backgroundPosition: "center",
    cursor: "pointer",
  };
  if (direction === "left") {
    return (
      <>
        <button
          className={`left__${contentName} wraperBtn__${contentName}`}
          onClick={() => toMove("left", contentName)}
          onMouseMove={() => verify(contentName)}
          style={{
            backgroundImage: `url(${arrowLeft})`,
            left: "6vw",

            ...style,
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className={`right__${contentName} wraperBtn__${contentName}`}
        onClick={() => toMove("right", contentName)}
        onMouseMove={() => verify(contentName)}
        style={{
          backgroundImage: `url(${arrowRight})`,
          right: "6vw",
          ...style,
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
    </>
  );
}
