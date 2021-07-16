import React from "react";
import CategoryItem from "./CategoryItem";
import "./Category.css";
import CategoryFilter from "./CategoryFilter";
const Category = () => {
  return (
    <div className="Category">
      <CategoryFilter />
      <div className="Category__Container">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default Category;
