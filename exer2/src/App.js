// import { Courses } from './Courses'
// import { PhoneBook } from './Phonebook'
import { useEffect, useState } from "react"
import { getCountries } from "./services/getCountries"


const App = () => {
  // const courses = [
  //   {
  //     name: 'Half Stack application development',
  //     id: 1,
  //     parts: [
  //       {
  //         name: 'Fundamentals of React',
  //         exercises: 10,
  //         id: 1
  //       },
  //       {
  //         name: 'Using props to pass data',
  //         exercises: 7,
  //         id: 2
  //       },
  //       {
  //         name: 'State of a component',
  //         exercises: 14,
  //         id: 3
  //       },
  //       {
  //         name: 'Redux',
  //         exercises: 11,
  //         id: 4
  //       }
  //     ]
  //   }, 
  //   {
  //     name: 'Node.js',
  //     id: 2,
  //     parts: [
  //       {
  //         name: 'Routing',
  //         exercises: 3,
  //         id: 1
  //       },
  //       {
  //         name: 'Middlewares',
  //         exercises: 7,
  //         id: 2
  //       }
  //     ]
  //   }
  // ]

  const [countries, setCountries] = useState([])
  const [term, setTerm] = useState('')
  const [view, setView] = useState(false)

  useEffect(() => {
    if(term)
    getCountries(term)
      .then(data => setCountries(data))
  }, [term])

  const handleChange = (event) => {
    const value = event.target.value
    setTerm(value)
  }

  const SpecificMsg = () => {
    return <p>Be more specific, please</p>
  } 



  const PlusResult = () => {
    return countries.map(country => {
      return (
        <ul>
          <li>
            {country.name.common}
              <button style={{display: "inline"}} onClick={() => setCountries([country])} >show</button>
          </li>
        </ul>
        )
      })
  }

  const Results = () => {
    return (
    <div>
      <p>Capital: {countries[0].capital}</p>
      <p>area: {countries[0].area}</p>
      <p>languages:</p>
      <ul>
        {countries.map(country => 
          {
            return Object.values(country.languages).map(language => {
              return <li>{language}</li>
            })
          })
        }
      </ul>
      <img src={countries[0].flags.png} alt={countries[0].name.common} />
    </div>
    )
  }

  return (
  <>
    {/* <Courses courses={courses}></Courses> */}
    {/* <PhoneBook /> */}

      <input onChange={handleChange} />

    <h3>Resultados de la búsqueda:</h3>
    { (!countries[0]) ? <> </>
      : countries.length > 10 ? <SpecificMsg />
      : countries.length > 1 ? <PlusResult />
      : <Results />
    }
    {/* {console.log(countries.map(country => country.name.common))}
    {console.log(term)} */}
  </>
  )
}

export default App
