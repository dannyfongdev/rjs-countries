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
    <div className="flex flex-col justify-between bg-lightBackground px-5 text-lightText dark:bg-darkBackground dark:text-darkText md:flex-row xl:px-[80px]">
      <form
        className="relative mt-6 mb-6 text-sm md:mt-12 md:mb-2 md:text-base"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search"></label>
        <input
          className="w-full rounded-md p-4 pl-10 shadow focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-darkElements dark:focus:ring-gray-700 md:w-[480px]"
          id="search"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
        />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.0}
          stroke="currentColor"
          className="absolute top-5 left-4 h-4 w-4 stroke-gray-500 dark:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
      <DropdownMenu onSelectRegion={onSelectRegion} />
    </div>
  );
}

export default Search;
