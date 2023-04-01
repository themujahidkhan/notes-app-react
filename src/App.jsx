import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useContext, useEffect, useState } from "react";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import { nanoid } from "nanoid";

function App() {
  const date = new Date();

  const { theme, toggleTheme } = useTheme();

  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      return storedNotes;
    } else {
      return [
        {
          id: nanoid(),
          content: `Hello!
          This is an example notes, feel free to create your own by writing on the next empty notes and you can delete this one.
          `,
          date: date.toLocaleDateString("en-us", { dateStyle: "medium" }),
        },
      ];
    }
  });
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (notes.length === 0) {
      document.title = `Notes App 🗒️`;
    } else {
      document.title = `Total notes ${notes.length}`;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (content) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      content: content,
      date: date.toLocaleDateString("en-US", { dateStyle: "medium" }),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#333] " : "bg-white"
      } px-4 lg:px-24  mx-auto h-screen font-body transition-all duration-500 ease-in-out `}
    >
      <Header toggleTheme={toggleTheme} />
      <SearchBar handleNoteSearch={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.content.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWrapper;
