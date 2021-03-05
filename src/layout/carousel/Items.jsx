import { Button } from "./Button";

export function Items({ children }) {
  return (
    <>
      <Button direction={"left"} />
      {children}
      <Button direction={"right"} />
    </>
  );
}
