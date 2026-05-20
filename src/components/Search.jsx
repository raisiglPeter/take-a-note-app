import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <input
      type="text"
      value={searchInput}
      placeholder="Type here"
      className="input"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}

export default Search;
