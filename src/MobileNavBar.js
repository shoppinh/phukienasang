import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./MobileNavBar.css";
const MobileNavBar = () => {
  return (
    <div className="MobileNavBar">
      <ArrowBackIcon className="MobileNavBar__icon" />
      <ReorderIcon className="MobileNavBar__icon" />
      <div className="MobileNavBar__title">
        <span>Giỏ hàng</span>
      </div>
      <DeleteIcon className="MobileNavBar__icon" />
    </div>
  );
};

export default MobileNavBar;
