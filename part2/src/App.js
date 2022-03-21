import {Note} from "./Note";
import { useState, useEffect } from "react";

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
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  useEffect(() => {
    console.log('useEffect')
    setLoading(true)
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setNotes(json)
        setLoading(false)
      })
    }, 2000)
  }, [])
  // si no se pasan dependencias [] al efecto se ejecuta cada vez que se actualiza un estado del compoennte
  // si se pasa un [] solo se ejecuta al renderizarse por primera vez.
  // 1º renderiza componente, 2º ejecuta el efecto
  // 3º hace la llamada a la API, 4º parsea las notas,
  // 5º vuelve a renderizar el componente
  // Con newNote como dependencia cada vez que escribes en el teclado se ejecuta el fetch
  
  // fetch dentro de un componente, por defecto, causa un loop infinito

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }
    console.log(noteToState)
    setNotes(notes.concat(noteToState))
    // setNotes([...notes, noteToState])
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      {loading ? 'Espere...' : ''}
      <ul className="App">
        {notes
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
