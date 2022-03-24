import axios from "axios";

export const createPerson = ({name, number}) => {
  axios.post('http://localhost:3001/persons', {name, number})
    .then(response => {
      const {data} = response 
      return data
    })
}