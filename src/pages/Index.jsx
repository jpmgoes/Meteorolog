import { Layout } from "../layout/Layout";
import { ForecastCards } from "../components/ForecastCardFolder/ForecastCards";
import { Form } from "../components/Form";
import { CardsCarousel } from "../components/CardsMaxMin/CardsCarousel";
import { MyLocation } from "../components/MyLocation";

const Index = () => {
  return (
    <Layout queryPag={"navbar__dashboard"} pagName="index">
      <div className="main__square__right__search">
        <Form />
        <MyLocation />
      </div>
      <div className="main__square__right__weather-forecast">
        <ForecastCards />
      </div>
      <div className="main__square__right__cards">
        <CardsCarousel />
      </div>
      <div className="main__square__right__weather-graph"></div>
    </Layout>
  );
};
export default Index;
