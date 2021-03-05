import { verify } from "./WrapFlex";
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
  if (direction === "left") {
    return (
      <button
        className="left wraperBtn"
        onClick={() => toMove("left")}
        onMouseMove={verify}
      >
        {"<"}
      </button>
    );
  }
  return (
    <button
      className="right wraperBtn"
      onClick={() => toMove("right")}
      onMouseMove={verify}
    >
      {">"}
    </button>
  );
}
