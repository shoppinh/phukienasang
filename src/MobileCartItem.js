import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./MobileCartItem.css";
const MobileCartItem = () => {
  return (
    <div className="MobileCartItem">
      <CheckCircleIcon className="MobileCartItem__Icon" />
      <img
        className="MoibleCartItem__Image"
        src="https://phukienasang.com/wp-content/uploads/product-watermark/0/40/20215/cl-kk-3.png"
        alt="fking iphone"
        style={{ width: "80px" }}
      />
      <div className="MobileCartItem__Info">
        <div className="MobileCartItem__Title">Ốp lưng king kong</div>
        <div className="MobileCartItem__Control">
          <div className="MobileCartItem__Price">250VND</div>
          <AddIcon
            style={{
              fontSize: "1.2rem",
              marginRight: "15px",
              backgroundColor: "rgba(211, 217, 227)",
              borderRadius: "25%",
              padding: "3px",
            }}
          />
          <div className="MobileCartItem__Quantity">5</div>
          <RemoveIcon
            style={{
              fontSize: "1.2rem",
              marginLeft: "15px",
              backgroundColor: "rgba(211, 217, 227)",
              borderRadius: "25%",
              padding: "3px",
            }}
          />
        </div>
        <div className="MobileCartItem__Description">
          1 ốp lưng iphone siêu xinh
        </div>
      </div>
    </div>
  );
};

export default MobileCartItem;
