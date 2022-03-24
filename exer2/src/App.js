import { useState } from 'react'
import {Courses} from './Courses'

const Persons = ({persons}) => {
  const print = persons.map(person => <p key={person.number}>{person.name} {person.number}</p>)
  return <>{print}</>
}

const Filter = (props) => {
  const {persons, setFilterPersons} = props

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase()
    const len = value.length
    const filteredPersons = persons.filter(person => {
      const name = person.name.toLowerCase()
      return value === name.slice(0, len) 
    })
    setFilterPersons(filteredPersons)
  }
  return ( <input onChange={handleFilter} /> )
}

const PersonForm = (props) => {
  
  const {
    persons,
    setPersons,
    newPerson,
    setNewPerson
  } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    let personToState = {
      name: newPerson.name,
      number: newPerson.number
    }

    if (checkName(newPerson.name)) {
      alert(`${newPerson.name} is already added to the phonebook`)
    } else if (checkNumber(newPerson.number)) {
      alert(`${newPerson.number} is already added to the phonebook`)
    }
    else {
      setPersons(prevPersons => prevPersons.concat(personToState))
      setNewPerson({name: '', number: ''})
    }
  }

  const checkName = (name) => {
    return persons.some(person => person.name === name)
  }
  const checkNumber = (number) => {
    return persons.some(person => person.number === number)
  }
  const handleNameChange = (event) => {
    const value = event.target.value
    setNewPerson((person) => ({...person, name: value}) )
  }
  const handleNumberChange = (event) => {
    const value = event.target.value
    setNewPerson((person) => ({...person, number: value}) )
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleNameChange} value={newPerson.name} required/>
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newPerson.number} required/>
      </div> 
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '33-44-5656' },
    { name: 'Arturito Fantástico',
      number: '35-88-7434' },
    { name: 'Dan Abramov',
      number: '12-43-234345'},
    { name: 'Mary Poppendieck',
      number: '39-23-6423122' }
  ]) 

  const [filterPersons, setFilterPersons] = useState([])
  const [newPerson, setNewPerson] = useState({})

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Filter names: </h3>
      <Filter persons={persons} setFilterPersons={setFilterPersons}/>
      <PersonForm persons={persons} setPersons={setPersons} newPerson={newPerson} setNewPerson={setNewPerson} />
      <h2>Numbers</h2>
      { filterPersons.length > 0
        ? <Persons persons={filterPersons} />
        : <Persons persons={persons} /> 
      }
      <div>debug = {newPerson.name} {newPerson.number} 
      </div>
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
  <>
    <Courses courses={courses}></Courses>
    <PhoneBook />
  </>
  )
}

export default App
