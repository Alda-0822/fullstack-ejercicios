const App = () => {
  const course = {
    name: 'Half stack aplication development',
    parts: [
      {
        name: 'Fundamentals of React', excercises: 10
      },
  
      {
        name: 'Using props to pass data', excercises: 7
      },
      
      {
        name: 'State of a component', excercises: 14
      }
    ]
  }
  const Header = () =>{
       return(
        <>
             <h1>{course.name}</h1>
        </>
      )
    }

    const Content = () =>{
        
      return(
           <>
           <p>
              {course.parts[0].name} {course.parts[0].excercises}
            </p>
            <p>
              {course.parts[1].name} {course.parts[1].excercises}
            </p>
            <p>
              {course.parts[2].name} {course.parts[2].excercises}
            </p>
            </>
          )
    }

    const Total = () =>{
      
      return(
      <p>Number of excercises {course.parts[0].excercises + course.parts[1].excercises
      + course.parts[2].excercises} 
      </p> 
      ) 
    }

  return(
    <div> 
    <Header />
    <Content />
    <Total />
    </div>
  )
}



export default App