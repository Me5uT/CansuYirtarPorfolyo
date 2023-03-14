import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface ISearchBoxProps {
  query: (str: string) => void;
}

export const SearchBox: React.FC<ISearchBoxProps> = ({ query }) => {
  return (
    <div className="searchbar">
      <label htmlFor="postSearch" className="visually-hidden">
        Search for post
      </label>
      <input
        id="postSearch"
        placeholder="Search for posts"
        type="text"
        onChange={(v) => query(v.target.value)}
      />
      <span className="searchbar-icon-container">
        <SearchIcon className="search-icon" />
      </span>
    </div>
  );
};
