import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderSecTwo } from "./components/SliderSecTwo";
import Project3d from "./components/Project3d";
import Bce from "./components/Bce";
import Functional from "./components/Functional";
import Materials from "./components/Materials";
import Accessories from "./components/Accessories";
import Factory from "./components/Factory";
import Footer from "./components/Footer";
import { Footer_up_slider } from "./components/Footer_up_slider";
import { BetweenSection } from "./components/BetweenSection";
import { TwoSlider } from "./components/TwoSlider";
import { CountSlider } from "./components/CountSlider";
function App() {
  return (
    <div className="App overflow-hidden">
      <SliderSecTwo />
      <Project3d />
      <Functional />
      <Bce />
      <Materials />
      <Accessories />
      <Factory />
      <CountSlider />
      <BetweenSection />
      <Footer_up_slider />
      <Footer />
    </div>
  );
}

export default App;
