import { Button } from "./Button";

export function Items({ children, contentName }) {
  return (
    <>
      <Button direction={"left"} contentName={contentName} />
      {children}
      <Button direction={"right"} contentName={contentName} />
    </>
  );
}
