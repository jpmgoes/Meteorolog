import { Button } from "./Button";
function displayCityTime(offset) {
  const aDate = new Date();
  const utc = aDate.getTime() + aDate.getTimezoneOffset() * 60000;
  const newdate = new Date(utc + 3600000 * offset);
  const hour = newdate.toLocaleString().split(" ")[1].split(":")[0];
  const minutes = newdate.toLocaleString().split(" ")[1].split(":")[1];
  return hour + ":" + minutes;
}
const arrTime = [-5, 1, 0, 9, 8];
const arrNameTime = ["Montreal", "Amsterdam", "London", "Kyoto", "Chengdu"];
export function Items({ amount }) {
  const items = new Array(amount).fill(null).map((_, index) => {
    return (
      <div className="item" key={index}>
        {arrNameTime[index]} <br />
        {displayCityTime(arrTime[index])}
      </div>
    );
  });

  return (
    <>
      <Button direction={"left"} />
      {items}
      <Button direction={"right"} />
    </>
  );
}
