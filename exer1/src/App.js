const Header = ({course}) => {
  return <h1>{course}</h1>

}

const Content = ({part}) => {
  const print = part.map(item => <p>{item.name} {item.exercises}</p>)
  return <>{print}</>
}

const Total = ({total}) => {
  const final = total.reduce((acc, part) => part.exercises + acc, 0)
  return <p>Number of exercises: {final}</p>

}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/> 
      <Content part={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App
