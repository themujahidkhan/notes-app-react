import React, { useState } from "react";

import { useTheme } from "../context/ThemeContext";

const AddNote = ({ handleAddNote }) => {
  const [notesText, setNotesText] = useState("");
  const { theme } = useTheme();
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0)
      setNotesText(e.target.value);
  };

  const handleSaveClick = () => {
    if (notesText.trim().length > 0) {
      handleAddNote(notesText);
      setNotesText("");
    }
  };

  return (
    <div
      className={`h-80 w-96 ${
        theme === "dark" ? "bg-[#777] text-white" : "bg-yellow-300 "
      } ease-in-out mt-8 p-4 rounded-lg flex flex-col justify-between`}
    >
      <textarea
        value={notesText}
        onChange={handleChange}
        className={` px-2 resize-none border-none bg-transparent focus:outline-none ${
          theme === "dark"
            ? "placeholder:text-gray-300"
            : " placeholder:text-slate-500"
        }`}
        rows="8"
        cols="10"
        placeholder="Type to add note"
      ></textarea>
      <div className="flex justify-between items-center">
        <small className="text-sm">
          {characterLimit - notesText.length} Characters remaining
        </small>
        <button
          className={
            theme === "dark"
              ? "bg-white text-black px-2 rounded"
              : "bg-black text-white px-2 rounded"
          }
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
