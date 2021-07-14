import React from "react";
import "./BottomPanel.css";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiFillAppstore,
  AiFillInfoCircle,
} from "react-icons/ai";
const BottomPanel = () => {
  return (
    <div className="bottomPanel">
      <div className="bottomPanel__items">
        <AiFillHome className="bottomPanel__icons" style={{ color: "red" }} />
        <span>Home</span>
      </div>
      <div className="bottomPanel__items">
        <AiFillAppstore className="bottomPanel__icons" />
        <span>Home</span>
      </div>
      <div className="bottomPanel__items">
        <AiFillInfoCircle className="bottomPanel__icons" />
        <span>Home</span>
      </div>
      <div className="bottomPanel__items">
        <AiOutlineShoppingCart className="bottomPanel__icons" />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default BottomPanel;
