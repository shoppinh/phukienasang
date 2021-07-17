import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./TopPanel.css";
import Sliders from "./Sliders";
const TopPanel = () => {
  return (
    <>
      <div className="TopPanel">
        <div className="TopPanel__items">
          <img src="" alt="" />
          <span>Phukienasang.com</span>
        </div>
        <div className="TopPanel__items">
          <input
            type="text"
            className="TopPanel__search"
            placeholder="Tìm kiếm sản phẩm"
          />
          <SearchIcon className="TopPanel__search--icon"></SearchIcon>
        </div>
      </div>
      <Sliders />
    </>
  );
};

export default TopPanel;
