import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderSecTwo } from "./components/SliderSecTwo";
import Project3d from "./components/Project3d";
function App() {
  return (
    <div className="App">
      <SliderSecTwo />
      <Project3d />
    </div>
  );
}

export default App;
