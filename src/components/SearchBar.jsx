import { useState } from "react";

import DropdownMenu from "./DropdownMenu";

function Search(props) {
  const { onSearch, onSelectRegion } = props;

  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  // @todo bug, search with 'a' causes internal server error

  return (
    <div className="flex flex-col justify-between bg-lightBackground px-5 text-lightText dark:bg-darkBackground dark:text-darkText md:flex-row xl:px-[80px]">
      <form className="my-5" onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          className="w-full rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-darkElements dark:focus:ring-gray-700 md:w-[480px]"
          id="search"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <DropdownMenu onSelectRegion={onSelectRegion} />
    </div>
  );
}

export default Search;
