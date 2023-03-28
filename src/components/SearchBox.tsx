import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface ISearchBoxProps {
  query: (str: string) => void;
}

export const SearchBox: React.FC<ISearchBoxProps> = ({ query }) => {
  return (
    <div className="searchbar">
      <input
        id="postSearch"
        placeholder="Bloğumda Ara ..."
        type="text"
        onChange={(v) => query(v.target.value)}
      />
      <span className="searchbar-icon-container">
        <SearchIcon className="search-icon" />
      </span>
    </div>
  );
};
