import "./style/index.scss";

export const CardsCarouselContent = () => {
  const arr = new Array(8).fill(null);
  return (
    <>
      {arr.map((_, index) => {
        return <div className={`card-square`}>{index}</div>;
      })}
    </>
  );
};
