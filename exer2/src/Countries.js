import { useEffect, useState } from "react"
import { getCountries } from "./services/getCountries"

export const Countries = () => {

  const [countries, setCountries] = useState([])
  const [term, setTerm] = useState('')

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
      <input onChange={handleChange} />

    <h3>Resultados de la búsqueda:</h3>
    { (!countries[0]) ? <> </>
      : countries.length > 10 ? <SpecificMsg />
      : countries.length > 1 ? <PlusResult />
      : <Results />
    }
  </>
  )
}