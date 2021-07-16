import React from "react";
import "./BottomPanel.css";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiFillAppstore,
  AiFillInfoCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const BottomPanel = () => {
  return (
    <div className="bottomPanel">
      <div className="bottomPanel__items">
        <AiFillHome className="bottomPanel__icons" style={{ color: "red" }} />
        <span>Home</span>
      </div>
      <Link to="/category">
        <div className="bottomPanel__items">
          <AiFillAppstore
            className="bottomPanel__icons "
            style={{ color: "red" }}
          />
          <span>Category</span>
        </div>
      </Link>

      <div className="bottomPanel__items">
        <AiFillInfoCircle className="bottomPanel__icons" />
        <span>Home</span>
      </div>
      <Link to="/cart">
        <div className="bottomPanel__items">
          <AiOutlineShoppingCart
            className="bottomPanel__icons"
            style={{ color: "red" }}
          />
          <span>Cart</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomPanel;
