
const Header = ({course}) => {
  return <h1>{course}</h1>
  
}

const Content = ({part}) => {
  const print = part.map(item => <p>{item.name} {item.exercises}</p>)
  return <>{print}</>
}

const Total = ({total}) => {
  const final = total.reduce((acc, part) => part.exercises + acc, 0)
  return <p><strong>Number of exercises: {final}</strong></p>
  
}

export const Courses = ({courses}) => {
  const print = courses.map(course => {
    return (
      <div>
        <Header course={course.name}/> 
        <Content part={course.parts} />
        <Total total={course.parts} />
      </div>
    )
  })
  return <>{print}</>
}