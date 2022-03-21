export const Note = ( {title, body}) => {
  return (
    <li >
      <p><strong>{title}</strong></p>
      <small>
        {body}
      </small>
    </li>
  )
}


//export default permite usar con cualquier nombre
// import Juan from './Note' 
// con el export const se debe utilizar el nombre del componente
// import {Note} from './Note'
// mejor export const porque es más consistente