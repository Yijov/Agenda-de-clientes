import React, { useRef } from "react";
import ISarchbatProps from "./ISarchbatProps";
import { BsSearch } from "react-icons/bs";

const SearchBar: React.FC<ISarchbatProps> = ({ FilterFunction }) => {
  const htmlElRef = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    htmlElRef.current?.focus();
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="search"
        onChange={FilterFunction}
        placeholder={"Search..."}
        ref={htmlElRef}
      />

      <BsSearch className={"icon"} onClick={setFocus} />
    </div>
  );
};

export default SearchBar;
