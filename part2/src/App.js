import {Note} from "./Note";
import { useState } from "react";

// Buena práctica => evitar que las props puedan tener tipos de datos distintos

// Al renderizar a partir de map se le tiene que dar una prop de key con un identificador único
// lo hace para saber cuándo volver a renderizar los elementos
// NO utilizar INDEX ni MATH.RANDOM
// Lo mejor es utlizar un id único pero se puede utilizar un href, etc.
// Se debe poner donde se itera (donde está el .map), no en el componente iterado

// Mejor mandar solo las props necesarias al componente
// {notes.map(note => <Note key={note.id} {...note} />)} está bien pero no es la mejor opción
// ofrece poco control y puede causar problemas


function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToState)
    setNotes(notes.concat(noteToState))
    // setNotes([...notes, noteToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll 
        ? 'Show important'
        : 'Show All'}</button>
      <ul className="App">
        {notes
          .filter(note => {
            if (showAll) return true
            return note.important === true
          })
          .map(note => <Note key={note.id} {...note} />)}
      </ul>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={newNote}></input>
        <button>Crear nota</button>
      </form>
    </div>
  )
}

export default App;
