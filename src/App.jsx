import { useState } from "react"; 
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./CreateArea";
import "./App.css"

const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNote => {
      return [...prevNote, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea 
      onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </>
  );
};

export default App;
