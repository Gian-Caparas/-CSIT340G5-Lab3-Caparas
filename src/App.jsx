const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, units }) => {
  return <p>{name} — {units} units</p>
}

const Content = ({
  part1,
  units1,
  part2,
  units2,
  part3,
  units3,
}) => {
  return (
    <div>
      <Part name={part1} units={units1} />
      <Part name={part2} units={units2} />
      <Part name={part3} units={units3} />
    </div>
  )
}

const Total = ({ units1, units2, units3 }) => {
  return <p>Total units: {units1 + units2 + units3}</p>
}

const Footer = ({ fullName, courseCode, section }) => {
  return (
    <footer>
      <p>{fullName} - {courseCode} - {section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'INFORMATION TECHNOLOGY'

  const part1 = 'CSIT321 - APP DEVELOPMENT'
  const units1 = 3

  const part2 = 'CSIT340 - INDUSTRY ELECTIVE'
  const units2 = 3

  const part3 = 'CSIT327 - INFORMATION MANAGEMENT'
  const units3 = 3

  const fullName = 'Gian Joebert B. Caparas'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />

      <Total
        units1={units1}
        units2={units2}
        units3={units3}
      />

      <Footer
        fullName={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App