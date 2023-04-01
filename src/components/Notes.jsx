import { HiTrash } from "react-icons/hi";
import React from "react";
import { useTheme } from "../context/ThemeContext";

function Notes({ id, content, date, handleDeleteNote }) {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#777]" : "bg-[#fec7d7]"
      } h-80 w-96  border-2 ease-in-out mt-8 p-4 rounded-lg flex flex-col justify-between`}
    >
      <span
        className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {content}
      </span>
      <div className="flex justify-between">
        <p className="text-sm">Created on - {date}</p>
        <button onClick={() => handleDeleteNote(id)}>
          <HiTrash size={24} />
        </button>
      </div>
    </div>
  );
}

export default Notes;
