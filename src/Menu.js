import React from "react";
import Slider from "react-touch-drag-slider";

const Menu = () => {
  return (
    <Slider
      activeIndex={0}
      threshHold={20}
      transition={0.1}
      scaleOnDrag={false}
    >
      <div style={{ width: "20px" }}>Hello</div>
      <div>hi</div>
      <div>bye</div>
    </Slider>
  );
};

export default Menu;
