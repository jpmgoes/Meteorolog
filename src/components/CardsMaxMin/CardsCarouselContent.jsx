import "./style/index.scss";

export const CardsCarouselContent = ({ data }) => {
  const arr = new Array(8).fill(null);
  console.log(data);
  return (
    <>
      {arr.map((_, index) => {
        return <div className={`card-square`}>{index}</div>;
      })}
    </>
  );
};
