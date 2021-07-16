import React from "react";
import "./CategoryItem.css";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const CategoryItem = () => {
  return (
    <div className="CategoryItem">
      <img
        src="https://phukienasang.com/wp-content/uploads/product-watermark/0/40/20215/cl-kk-3.png"
        alt=""
        className="CategoryItem__Image"
        style={{ width: "120px" }}
      />
      <div className="CategoryItem__Info">
        <h5 className="CategoryItem__Title">
          Kính cường lực siêu to khổng lồ của bà tân vlog
        </h5>
        <div className="CategoryItem__Control">
          <div className="CategoryItem__Price">203 VND</div>
          <AddShoppingCartIcon style={{ fontSize: "2rem" }} />
          <Button
            variant="contained"
            style={{
              borderRadius: "20px",
              padding: "5px 25px",
              backgroundColor: "grey",
              color: "rgb(173, 169, 169)",
            }}
          >
            Mua
          </Button>
        </div>
        <div className="CategoryItem__Shipping">COD</div>
      </div>
    </div>
  );
};

export default CategoryItem;
