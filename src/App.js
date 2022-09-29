import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";


const App = () => {

  const [notes, setNotes] = useState([
    
  {
    id: nanoid(),
    text: "This is my first note !",
    date: "28/09/2022"
  },

  {
    id: nanoid(),
    text: "This is my second note !",
    date: "29/092022"
  },

  {
    id: nanoid(),
    text: "This is my third note !",
    date: "30/09/2022"
  },

  {
    id: nanoid(),
    text: "This is my new note !",
    date: "01/10/2022"
  },

]);

  // Fonction de recherche
  const [searchText, setSearchText] = useState("");

  // Toggle Mode
  const [darkMode, setDarkMode] = useState(false);

  // Local Storage

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
      );

      if (savedNotes) {
        setNotes(savedNotes);
      }
  },[])


  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  // Ajout d'une nouvelle note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString() // Convertit la date dans le format local du pays
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  } 

  // Suppression d'une note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  }

  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
    <Header handleToggleDarkMode={setDarkMode} />
    <Search handleSearchNote={setSearchText} /> 
    <NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
  </div>
    </div>
  
  )
}

export default App;