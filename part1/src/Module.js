const Mensaje = (props) =>  {
  // console.log(props)
  return <strong style={{color: props.color }}>{props.message}</strong>
}

export default Mensaje