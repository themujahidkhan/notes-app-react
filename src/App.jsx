import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      content: "Hello this is notes 1",
      date: "30/3/23",
    },
    {
      id: nanoid(),
      content: "Hello this is second notes",
      date: "31/3/23",
    },
    {
      id: nanoid(),
      content: "Hello this is my third notes",
      date: "1/4/23",
    },
  ]);

  const addNote = (content) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      content: content,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container mx-auto">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
