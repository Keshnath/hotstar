import "./searchBar.css";
import React from "react";
const SearchBar = (props : {search : (search :string) => void}) => {
  const handleChange = (event: string) => {
    props.search(event);
  };
  return (
    <>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only  dark:text-whit"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              className="w-6 h-6 text-white  filter inherit ml-4  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block  w-full  pl-20 text-xl h-16 text-white border-transparent focus:border-none placeholder-blue-100 bg-gray-700 rounded-lg bg-zinc-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Movies, shows and more"
            onChange={(e) => handleChange(e.target.value)}
            required
          />
        </div>
      </form>
    </>
  );
};
export default SearchBar;
