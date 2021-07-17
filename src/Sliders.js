import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Sliders.css";
const breakPoints = [
  { width: 500, itemsToShow: 5 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 5 },
];

const Slider = () => {
  return (
    <div className="Carousel">
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        showArrows={false}
        outerSpacing={0}
      >
        <Item number="Cường lực" />
        <Item number="Tai nghe" />
        <Item number="Cáp sạc" />
        <Item number="Pin" />
        <Item number="Cường lực" />
        <Item number="Tai nghe" />
        <Item number="Cáp sạc" />
        <Item number="Pin" />
        <Item number="All" />
      </Carousel>
    </div>
  );
};

export default Slider;
