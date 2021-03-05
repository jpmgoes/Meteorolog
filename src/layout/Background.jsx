import { DottedSquare } from "./DottedSquare";
export const Background = () => {
  return (
    <div className="background">
      <div className="background__left"></div>
      <div className="background__right">
        <DottedSquare />
      </div>
    </div>
  );
};
