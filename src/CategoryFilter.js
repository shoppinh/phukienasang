import React from "react";
import "./CategoryFilter.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import FilterListIcon from "@material-ui/icons/FilterList";
import ViewListIcon from "@material-ui/icons/ViewList";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontSize: 13,
    fontWeight: "bold",
  },
}));
const CategoryFilter = ({ handleToggle }) => {
  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState("Phổ biến nhất");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="CategoryFilter">
      <FormControl className={classes.formControl}>
        <Select
          value={sortBy}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="Phổ biến nhất">Phổ biến nhất</MenuItem>
          <MenuItem value="Mua nhiều">Mua nhiều</MenuItem>
          <MenuItem value="Giảm giá mạnh">Giảm giá mạnh</MenuItem>
        </Select>
      </FormControl>
      <div className="CategoryFilter__PriceSort">
        Giá bán
        <div className="CategoryFilter__Control">
          <ArrowDropUpIcon />
          <ArrowDropDownIcon />
        </div>
      </div>

      <ViewListIcon onClick={handleToggle} />
      <div style={{ display: "flex", alignItems: "center", fontSize: 12 }}>
        <FilterListIcon />
        <span>Bộ lọc</span>
      </div>
    </div>
  );
};

export default CategoryFilter;
