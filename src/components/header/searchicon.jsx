import React, { useState } from "react";
import "./searchicon.css";
import Searcher from "./searcher/Searcher";

const SearchIcon = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="search-icon">
      <svg
      className="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      onClick={toggleSearch}
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" fill="none" strokeWidth="2" />
      <line x1="20" y1="20" x2="14.65" y2="14.65" stroke="currentColor" strokeWidth="2" />
    </svg>
      {isSearchVisible &&
        <div className="overlay" onClick={toggleSearch}>
        </div>}
      {isSearchVisible && (
        <Searcher />
      )}
    </div>
  );
};


export default SearchIcon;
