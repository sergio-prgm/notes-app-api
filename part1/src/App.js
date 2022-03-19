import { useState } from 'react'
import './App.css'
import Mensaje from './Module.js'


const Description = () => {
  return <h2>La página web</h2>
}

//  Del curso 'React.js ⚛️ desde cero-Crea una aplicación...'

/*  const Contador = () => {
    const [contadorValue, actualizador] = useState(50)

    return (
    <>
      <button onClick={() => {
        actualizador(contadorValue + 1)
      }}>
        Incrementar
      </button>
      <span> </span>
      <span> | </span>
      <span> </span>
      <button onClick={() => {
        actualizador(contadorValue - 1)
      }}>
        Disminuir 
      </button>
      <span>{contadorValue}</span>
    </>
    )
  }
*/

function App() {
  

  return (
    <div className="App">
      <Mensaje color='red' message="Estamos trabajando"/>
      <Mensaje color='green' message=' en algo chulo...'/>
      <Description />
      <Mensaje color='blue' message='...pero no te preocupes'/>
      <br />
      {/* <Contador /> */}
    </div>
  )
}

export default App
