import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [notesText, setNotesText] = useState("");
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
    <div className="h-64 w-84 bg-yellow-300 ease-in-out mt-8 p-2 rounded-lg flex flex-col justify-between">
      <textarea
        value={notesText}
        onChange={handleChange}
        className="px-2 resize-none border-none bg-transparent focus:outline-none"
        rows="8"
        cols="10"
        placeholder="Type to add note"
      ></textarea>
      <div className="flex justify-between items-center">
        <small>{characterLimit - notesText.length} Characters remaining</small>
        <button className="bg-white px-2 rounded" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
