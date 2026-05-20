import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <input
      type="text"
      value={searchInput}
      placeholder="Search..."
      className="input bg-base-200 focus:bg-base-100 w-full max-w-2xl"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}

export default Search;
