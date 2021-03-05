import "./styles/carousel.scss";
import { WrapFlex } from "./WrapFlex";

export function Carousel({ children, classname }) {
  return (
    <div className={`carousel carousel${classname}`}>
      <WrapFlex classname={classname}>{children}</WrapFlex>
    </div>
  );
}
