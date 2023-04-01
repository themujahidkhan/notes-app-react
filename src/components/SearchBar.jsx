import React, { useState } from "react";

import { HiSearch } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ handleNoteSearch }) => {
  const { theme } = useTheme();
  return (
    <div className="mt-8 flex justify-between items-center relative">
      <input
        className={`${
          theme === "dark"
            ? "bg-[#292827] text-white transition-all duration-500 ease-in-out"
            : "bg-[#ddd] transition-all duration-500 ease-in-out"
        } w-full border-2 p-2 rounded-none active:rounded-none focus:rounded-none`}
        type="text"
        placeholder="Search notes"
        onChange={(e) => handleNoteSearch(e.target.value)}
      />
      <span className="absolute right-4 top-2">
        <HiSearch
          size={24}
          className={`${theme === "dark" ? "text-white" : "text-black"}`}
        />
      </span>
    </div>
  );
};

export default SearchBar;
