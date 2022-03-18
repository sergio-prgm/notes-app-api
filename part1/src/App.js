import './App.css'
import Mensaje from './Module.js'


const Description = () => {
  return <h2>La página web</h2>
}

function App() {
  // const mensaje = 'qué tal'

  return (
    <div className="App">
      <Mensaje color='red' message="Estamos trabajando"/>
      <Mensaje color='green' message=' en algo chulo'/>
      <Description />
      <Mensaje color='blue' message='pero no te preocupes'/>

    </div>
  )
}

export default App
