const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} - {part.units} units</p>
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part = {part1}/>
      <Part part = {part2}/>
      <Part part = {part3}/>
    </div>
  )
}

const Total = ({ part1, part2, part3})  => {
  return (
    <p>Total units: {part1.units + part2.units + part3.units}</p>
  )
}

const Footer = ({ fullname, courseCode, section}) => {
  return ( 
    <footer>
      <p>{fullname} - {courseCode} - {section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'INFORMATION TECHNOLOGY'

  const part1 = {
    name: 'CSIT321 - APP DEVELOPMENT',
    units: 3,
  }

  const part2 = {
    name: 'CSIT340 - INDUSTRY ELECTIVE',
    units: 3,
  }

  const part3 = {
    name: 'CSIT327 - INFORMATION MANAGEMENT',
    units: 3,
  }

  const fullName = 'Gian Joebert B. Caparas'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header  course={course}/>

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Footer
        fullname={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App