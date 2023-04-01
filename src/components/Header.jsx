import { HiMoon, HiSun } from "react-icons/hi";

import React from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className={`flex pt-6 justify-between items-center `}>
      <h1
        className={` ${
          theme === "dark"
            ? "text-white transition-all duration-500 ease-in-out"
            : "text-black transition-all duration-500 ease-in-out"
        } text-3xl font-bold`}
      >
        Silly Notes
      </h1>
      <span className="cursor-pointer" onClick={handleToggle}>
        {theme === "dark" ? (
          <HiSun color="orange" size={24} />
        ) : (
          <HiMoon size={24} />
        )}
      </span>
    </div>
  );
};

export default Header;
