import { Layout } from "../layout/Layout";
import { ForecastCards } from "../components/ForecastCardFolder/ForecastCards";
import { Form } from "../components/Form";
import { CardsCarousel } from "../components/CardsMaxMin/CardsCarousel";
import { MyLocation } from "../components/MyLocation";

const Index = ({
  setName,
  name,
  country,
  setCountry,
  dataToSideCard,
  setInput,
  setLocation,
  dataToCardsCarousel,
}) => {
  return (
    <Layout
      queryPag={"navbar__dashboard"}
      dataToSideCard={dataToSideCard}
      country={country}
      name={name}
    >
      <div className="main__square__right__search">
        <Form setInput={setInput} />
        <MyLocation
          setName={setName}
          setLocation={setLocation}
          setCountry={setCountry}
        />
      </div>
      <div className="main__square__right__weather-forecast">
        <ForecastCards
          setName={setName}
          setLocation={setLocation}
          setCountry={setCountry}
        />
      </div>
      <div className="main__square__right__cards">
        <CardsCarousel name={name} data={dataToCardsCarousel} />
      </div>
      <div className="main__square__right__weather-graph"></div>
    </Layout>
  );
};
export default Index;
