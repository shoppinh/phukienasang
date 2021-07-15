import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Sliders.css";
const breakPoints = [
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 5 },
];

const Slider = () => {
  return (
    <div className="Carousel">
      <Carousel breakPoints={breakPoints}>
        <Item number="1" />
        <Item number="2" />
        <Item number="3" />
        <Item number="4" />
        <Item number="5" />
        <Item number="6" />
        <Item number="7" />
        <Item number="8" />
        <Item number="9" />
        <Item number="10" />
      </Carousel>
    </div>
  );
};

export default Slider;
