import { Items } from "./Items";
export function verify() {
  const wrapFlex = document.querySelector(".wrap-flex");
  const wrapFlexMax = wrapFlex.scrollWidth;
  const currentlyWidth = wrapFlex.clientWidth;
  const currentlyPosition = wrapFlex.scrollLeft;
  const max = currentlyWidth + currentlyPosition;

  if (currentlyPosition === 0) {
    visible("left", true);
  } else visible("left", false);
  if (max >= wrapFlexMax) {
    visible("right", true);
  } else visible("right", false);
}

function visible(query, bool) {
  const arrow = document.querySelector("." + query);
  if (bool) {
    arrow.style.opacity = 0;
    arrow.style.zIndex = -2;
    return;
  }
  arrow.style.zIndex = 2;
  arrow.style.opacity = 1;
}
function visibleMove(opacity, zIndex) {
  const btn = document.querySelectorAll(".wraperBtn")[0];
  const btn2 = document.querySelectorAll(".wraperBtn")[1];
  btn.style.opacity = opacity;
  btn.style.zIndex = zIndex;
  btn2.style.opacity = opacity;
  btn2.style.zIndex = zIndex;
}
export function WrapFlex({ amount }) {
  return (
    <div
      className="wrap-flex"
      onMouseMove={verify}
      onMouseLeave={() => visibleMove(0, -1)}
    >
      <Items amount={amount} />
    </div>
  );
}
