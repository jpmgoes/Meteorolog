import "./styles/carousel.scss";
import { WrapFlex } from "./WrapFlex";

export function Carousel({ styleName, contentName, children }) {
  return (
    <div className={styleName}>
      <WrapFlex contentName={contentName} children={children} />
    </div>
  );
}
