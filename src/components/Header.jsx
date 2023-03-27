function Header() {

  return (
    <div className="flex h-[80px] cursor-pointer items-center justify-between border-b-4 border-b-gray-100 bg-lightElements px-5 dark:border-0 dark:bg-darkElements dark:text-darkText xl:px-[80px]">
      <h1 className="text-sm font-extrabold md:text-xl lg:text-2xl">
        Where in the World?
      </h1>
      <div className="flex items-center gap-2 text-sm" onClick={toggleDarkMode}>
        <svg
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>

        <div className="font-semibold">Dark Mode</div>
      </div>
    </div>
  );
}

export default Header;

// function to change dark mode
const el = document.querySelector("html");
const toggleDarkMode = () => {
  el.classList.toggle("dark");
};
