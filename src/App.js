import "./App.css";
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import Modal from "./Modal";
import MobileNavBar from "./MobileNavBar";
import MobileCartForm from "./MobileCartForm";
import MobileCartItem from "./MobileCartItem";
function App() {
  return (
    <div className="App">
      <TopPanel />
      <div className="container">
        <MobileNavBar />
        <div className="MobileCartContainer">
          <MobileCartItem />
          <MobileCartItem />
        </div>
        <MobileCartForm />
      </div>
      {/* <Modal /> */}
      <BottomPanel />
    </div>
  );
}

export default App;
