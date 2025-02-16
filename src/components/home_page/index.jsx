import CardPage2 from "../component_home_page/card2";
import CarouselPage from "../component_home_page/carousel";
import Kardlar from "../component_home_page/kardlar";

function HomePage() {
  return (
    <div className="container mx-auto">
      <CarouselPage />
      <Kardlar />
    </div>
  );
}

export default HomePage;
