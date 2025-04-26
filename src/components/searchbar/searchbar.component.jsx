import React from "react";
import "./searchbar.style.scss";

const SearchBar = ({ handleChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search for items..."
      onChange={handleChange}
    />
  </div>
);

export default SearchBar;
