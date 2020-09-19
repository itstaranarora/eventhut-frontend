import React from "react";
import "./Filter.css";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Filter() {
  return (
    <div className="filter container">
      <div className="filter__items">
        <div className="filter__item">
          <p>Looking for</p>
          <input type="text" placeholder="Music Concert" />
        </div>
        <div className="filter__item">
          <p>In</p>
          <input type="text" placeholder="Ludhiana" />
        </div>
        <div className="filter__item">
          <p>When</p>
          <input type="text" placeholder="Weekend" />
        </div>
      </div>
      <div className="filter__button">
        <IconButton className="filter__iconBtn">
          <SearchIcon className="filter__btn" />
        </IconButton>
      </div>
    </div>
  );
}

export default Filter;
