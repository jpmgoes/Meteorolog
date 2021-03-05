import "./styles/carousel.scss";
import { WrapFlex } from "./WrapFlex";

export function Carousel() {
  return (
    <div className="carousel">
      <WrapFlex amount={5} />
    </div>
  );
}
