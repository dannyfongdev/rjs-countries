import { useState } from "react";

import DropdownMenu from "./DropdownMenu";

function Search(props) {
  const { onSearch, onSelectRegion } = props;

  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          className="p-4 rounded-md dark:bg-darkElements md:w-[480px]"
          id="search"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <DropdownMenu onSelectRegion={onSelectRegion}/>
    </div>
  );
}

export default Search;
