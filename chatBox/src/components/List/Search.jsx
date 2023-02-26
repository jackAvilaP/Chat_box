import React from "react";

const Search = () => {
  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="iconSearch ml-3"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="pr-3 pl-20 w-[537px] h-[79px] rounded-[25px] text-4xl focus:outline-none focus:ring focus:ring-violet-300 "
      />
    </div>
  );
};

export default Search;
