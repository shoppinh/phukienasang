import "./App.css";
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import Modal from "./Modal";
import MobileCart from "./MobileCart";
import Category from "./Category";
import MobileNavBar from "./MobileNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cart">
          <TopPanel />
          <div className="container">
            <MobileNavBar />
            <MobileCart />
          </div>
          <BottomPanel />
        </Route>
        <Route path="/category">
          <TopPanel />
          <Category />
          <BottomPanel />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
