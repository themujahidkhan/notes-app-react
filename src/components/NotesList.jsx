import Notes from "./Notes";
import React from "react";

function NotesList({ notes }) {
  return (
    <div className="block md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-4 lg:gap-6">
      {notes.map((note) => (
        <Notes key={note.id} content={note.content} date={note.date} />
      ))}
    </div>
  );
}

export default NotesList;
