import React from "react";
import MobileCartForm from "./MobileCartForm";
import MobileCartItem from "./MobileCartItem";
const MobileCart = () => {
  return (
    <div className="MobileCartContainer">
      <MobileCartItem />
      <MobileCartItem />
      <MobileCartForm />
    </div>
  );
};

export default MobileCart;
