import { useState } from "react";

function DropdownMenu(props) {
  const { onSelectRegion } = props;
  const [showMenu, setShowMenu] = useState(false);

  const handleSelect = (r) => {
    onSelectRegion(r);
    handleToggle();
  };

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mt-6 mb-6 bg-lightBackground dark:bg-darkBackground md:mt-12 md:mb-2">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="relative inline-flex w-44 items-center justify-between rounded-lg bg-lightElements px-4 py-4 text-center text-sm font-medium text-lightText shadow focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-darkElements dark:text-darkText dark:focus:ring-gray-700"
        type="button"
        onClick={handleToggle}
      >
        Filter by Region{" "}
        <svg
          className="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={
          (showMenu ? "block" : "hidden") +
          " absolute top-[262px] z-10 w-44 cursor-pointer divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700 md:top-[184px]"
        }
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleSelect("Africa")}
          >
            Africa
          </li>
          <li
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleSelect("Americas")}
          >
            Americas
          </li>
          <li
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleSelect("Asia")}
          >
            Asia
          </li>
          <li
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleSelect("Europe")}
          >
            Europe
          </li>
          <li
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleSelect("Oceania")}
          >
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
