import "./App.css";
import Slider from "./Slider";
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import Modal from "./Modal";
function App() {
  return (
    <div className="App">
      <TopPanel />
      <div className="container">
        <Slider />
      </div>
      <Modal />
      <BottomPanel />
    </div>
  );
}

export default App;
