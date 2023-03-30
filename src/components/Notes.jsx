import React from "react";

function Notes({ id, content, date }) {
  return (
    <div className="h-64 w-84 bg-blue-300 hover:bg-blue-500 hover:transition hover:duration-700 ease-in-out hover:text-white mt-8 p-2 rounded-lg flex flex-col justify-between">
      <span className="">{content}</span>
      <div className="flex justify-between">
        <p>{date}</p>
        <span>🗑️</span>
      </div>
    </div>
  );
}

export default Notes;
