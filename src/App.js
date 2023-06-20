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
      <Footer />
    </div>
  );
}

export default App;
