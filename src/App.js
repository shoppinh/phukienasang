import "./App.css";
import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import Modal from "./Modal";
import MobileCart from "./MobileCart";
import Category from "./Category";
import MobileNavBar from "./MobileNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <TopPanel />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <div className="container">
            <MobileNavBar />
            <MobileCart />
          </div>
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </Switch>
      <BottomPanel />
    </div>
  );
}

export default App;
