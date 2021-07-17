import React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./CategoryGridItem.css";
const CategoryGridItem = () => {
  return (
    <div className="CategoryGridItem">
      <img
        src="https://phukienasang.com/wp-content/uploads/product-watermark/0/40/20215/cl-kk-3.png"
        alt=""
        className="CategoryGridItem__Image"
        style={{ width: "45vw" }}
      />
      <h5 className="CategoryGridItem__Title">Kính cường lực kingg kongg</h5>
      <div className="CategoryGridItem__PriceAndShipping">
        <span>203VND</span>
        <span style={{ color: "red" }}>COD</span>
      </div>
      <div className="CategoryGridItem__Control">
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
    </div>
  );
};

export default CategoryGridItem;
