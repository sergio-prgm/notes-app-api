import axios from "axios";

export const getCountries = (term = 'spain') => {
  return axios.get(`https://restcountries.com/v3.1/name/${term}`)
    .then(response => {
      const {data} = response
      return data})
}