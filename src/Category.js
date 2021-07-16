import React from "react";
import CategoryItem from "./CategoryItem";
import "./Category.css";
import CategoryFilter from "./CategoryFilter";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CategoryGridItem from "./CategoryGridItem";
const Category = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  return (
    <div className="Category">
      <CategoryFilter handleToggle={handleToggle} />
      {!toggle ? (
        <div className="Category__Container">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          this is list view
        </div>
      ) : (
        <div className="Category__Container">
          <Grid container spacing={2}>
            <Grid container item xs={6} spacing={0}>
              <CategoryGridItem />
            </Grid>
            <Grid container item xs={6} spacing={0}>
              <CategoryGridItem />
            </Grid>
            <Grid container item xs={6} spacing={0}>
              <CategoryGridItem />
            </Grid>
            <Grid container item xs={6} spacing={0}>
              <CategoryGridItem />
            </Grid>
            <Grid container item xs={6} spacing={0}>
              <CategoryGridItem />
            </Grid>
            <Grid container item xs={6} spacing={0}>
              <CategoryGridItem />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Category;
