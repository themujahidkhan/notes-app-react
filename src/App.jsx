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
  return (
    <div className="container mx-auto">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
