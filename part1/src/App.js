import { useState } from 'react'
import './App.css'
import Mensaje from './Module.js'


const Description = () => {
  return <h2>La página web</h2>
}

const Number = ({number}) => {
  return (
    <>
    <p>Valor del contador:</p>
    <h4>{number}</h4>
    </>
  )
}

const WarningMsg = () => {
  return <h3>Todavía no se ha utilizado el contador</h3>
}

const ListOfClicks = ({clicks}) => {
  // debugger
  // para el flow de la aplicación para poder examinar el elemento en cuestión
  return <p>{clicks.join(', ')}</p>
}

const NewContador = () => {
  // const [left, setLeft] = useState(10)
  // const [right, setRight] = useState(20)

  // const [counters, setCounters] = useState({
  //   left: 0,
  //   right: 0,
  //   clicks: 0,
  //   mensaje: 'Mensaje en el estado'
  // })

  const [clicks, setClicks] = useState([])

  const handleClickLeft = (event) => {
    // console.log(event)
    // recupera el evento (como en un eventListener)

    // setCounters({
    //   ...counters,
    //   left: counters.left + 1
    // })
    setClicks((prevClicks) => [...prevClicks, 'L'])
  }
  
  const handleClickRight = () => {
    // setCounters({
    //   ...counters,
    //   right: counters.right + 1
    // })
    setClicks((prevClicks) => [...prevClicks, 'R'])
  }

  const handleReset = () => {
    setClicks([])
  }

  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')
   
  return (
    <div>
      {left.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right.length}
      <p>Clicks totales: {clicks.length}</p>
      {
        clicks.length === 0 
          ? (<WarningMsg />)
          : (<ListOfClicks clicks={clicks} />)
      }
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

//  Del curso 'React.js ⚛️ desde cero-Crea una aplicación...'
const Contador = () => {
  const [contadorValue, setContador] = useState(5)
  
  const handleClick = (params) => {
    return () => {
      console.log(params)
      params 
        ? setContador(contadorValue + 1)
        : setContador(contadorValue - 1)
    }
  }


  const handleClickReset = () => {
    setContador(5)
  }
  
  const isEven = contadorValue % 2 === 0
  const IsEvenMsg = isEven ? 'Es par' : 'Es impar => no es par'

  return (
    <>
      <button onClick={handleClick(true)} > 
        +
      </button>
        {/* No llamar {handleClick()}. Provoca un loop infinito. */}
        {/* Se pueden ejecutar funciones, pero solo si devuelven funciones y no 
        mdifican directamente el estado */}
      <span> · </span>
      <button onClick={handleClick(false)} >
          {/* 
          () => {
        setContador(contadorValue - 1)
        // setContador(prevContador => {
          //   return prevContador - 1
          // })
          // Alternativa más segura de actualizar el estado. Usa seguro el valor anterior
          // Innecesario en este contexto
        }
           */}
        -
      </button>
      <span> · </span>
      <button onClick={handleClickReset} >
        Reset
      </button>
      <Number number={contadorValue} ></Number>
      <small>{IsEvenMsg}</small>
      <NewContador></NewContador>
      {/* Renderizado condicional */}
    </>
  )
}

 
//  Esto en el curso lo explica al principio con:
/*
const Contador = (props) => {
  const [contadorValue, updateContador] = useState(0)

  // setInterval(() => {
  //   updateContador(contadorValue + 1)
  // }, 1500)
  // Mala idea ejecutar el setInterval de esta forma.
  // Se vuelve tarumba
  // Se vuelve a ejecutar el cada ve que se renderiza el componente,
  // por lo pueden entrar en conflicto las 'actualizaciones' 

  return (
    <div>
      <p>El valor del contador es:</p>
      <strong>{contadorValue}</strong>
      <h3>UseState React</h3>
    </div>
  )
}
*/

const StatisticLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <th>{text}</th>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, bad, neutral}) => {
  console.log(good, neutral, bad)
  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={good + neutral + bad} />
      <StatisticLine text='average' value={good + bad + neutral } />
      <StatisticLine text='positive' value={(good / (good + bad + neutral )) * 100} />
    </table>
  )
}

const PButton = ({text, onClick}) => {
  return <button onClick={onClick} >{text}</button>
}

const Papp = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = (event) => {
    console.log('good')
    setGood(good + 1)
  }

  const handleClickNeutral = (event) => {
    console.log('neutral')
    setNeutral(neutral + 1)
  }

  const handleClickBad = (event) => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <PButton onClick={handleClickGood} text='good'/>
      <PButton onClick={handleClickNeutral} text='neutral' />
      <PButton onClick={handleClickBad} text='bad' />
      <h2>statistics</h2>
      {
        (good + bad + neutral) === 0
          ? <p>No feedback given</p>
          : <Statistics good={good} neutral={neutral} bad={bad} />
      }
    </div>
  )
}

const AApp = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const randomize = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7))

  const handleVote = () => {
    let copy = [...votes]
    const selectedCopy = copy[selected]
    !!selectedCopy || selectedCopy === 0
    ? copy[selected] = copy[selected] + 1
    : copy[selected] = 1
    setVotes(copy)
  }

  const AltMsg = () => {return <p>Not enough data</p>}

  const MostVoted = () => {
    const filtered = votes.filter(item => typeof(item) === 'number')
    return <p>{anecdotes[votes.indexOf(Math.max(...filtered))]  }</p>
  }

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <button onClick={randomize} >Random quote</button>
      <button onClick={handleVote} >Vote quote</button>
      <strong>Anecdote with most votes:</strong>
      {votes.some(item => typeof(item) === 'number')
        ? <MostVoted />
        : <AltMsg />
      }
    </>
  )
}

function App() {
  

  return (
    <div className="App">
      <Mensaje color='red' message="Estamos trabajando"/>
      <Mensaje color='green' message=' en algo chulo...'/>
      <Description />
      <Mensaje color='blue' message='...pero no te preocupes'/>
      <br />
      <Contador />
      <AApp />
      <Papp />
    </div>
  )
}

export default App
