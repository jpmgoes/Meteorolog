import { Items } from "./Items";
export function verify(contentName) {
  const wrapFlex = document.querySelector(`.wrap-flex__${contentName}`);
  const wrapFlexMax = wrapFlex.scrollWidth;
  const currentlyWidth = wrapFlex.clientWidth;
  const currentlyPosition = wrapFlex.scrollLeft;
  const max = currentlyWidth + currentlyPosition;

  if (currentlyPosition === 0) {
    visible(`left__${contentName}`, true);
  } else visible(`left__${contentName}`, false);
  if (max >= wrapFlexMax) {
    visible(`right__${contentName}`, true);
  } else visible(`right__${contentName}`, false);
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
function visibleMove(opacity, zIndex, contentName) {
  const btn = document.querySelectorAll(`.wraperBtn__${contentName}`)[0];
  const btn2 = document.querySelectorAll(`.wraperBtn__${contentName}`)[1];
  btn.style.opacity = opacity;
  btn.style.zIndex = zIndex;
  btn2.style.opacity = opacity;
  btn2.style.zIndex = zIndex;
}
export function WrapFlex({ children, contentName }) {
  return (
    <div
      className={`wrap-flex__${contentName}`}
      onMouseMove={() => verify(contentName)}
      onMouseLeave={() => visibleMove(0, -1, contentName)}
    >
      <Items contentName={contentName} children={children} />
    </div>
  );
}
