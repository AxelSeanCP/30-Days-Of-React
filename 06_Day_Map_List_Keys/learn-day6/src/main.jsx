import React from 'react'
import ReactDOM from 'react-dom/client'

// MAPPING AND RENDERING ARRAYS

// const App = () => {
//   return (
//     <div className="container">
//       <div>
//         <h1>Numbers List</h1>
//         {[1, 2, 3, 4, 5]}
//       </div>
//     </div>
//   )
// }

// MAPPING ARRAY OF NUMBERS

// const Numbers = ({ numbers }) => {
//   const list = numbers.map((number) => <li>{number}</li>)
//   return list;
// }

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <div className="container">
//       <div>
//         <h1>Numbers List</h1>
//         <ul>
//           <Numbers numbers={numbers} />
//         </ul>
//       </div>
//     </div>
//   )
// }

// MAPPING ARRAY OF ARRAYS

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8]
// ]

// // Skill component
// const Skill = ({ skill: [tech, level]}) => (
//   <li>
//     {tech} {level}
//   </li>
// )

// // Skills component
// const Skills = ({ skills }) => {
//   const skillslist = skills.map((skill) => <Skill skill={skill} />)
//   console.log(skillslist)
//   return <ul>{skillslist}</ul>
// }

// const App = () => {
//   return (
//     <div className="container">
//       <div>
//         <h1>Skills Level</h1>
//         <Skills skills={skills} />
//       </div>
//     </div>
//   )
// }

// MAPPING ARRAY OF OBJECTS

// const countries = [
//   { name: 'Finland', city: 'Helsinki' },
//   { name: 'Sweden', city: 'Stockholm' },
//   { name: 'Denmark', city: 'Copenhagen' },
//   { name: 'Norway', city: 'Oslo' },
//   { name: 'Iceland', city: 'Reykjavík' },
// ]

// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   )
// }

// const Countries = ({ countries }) => {
//   const countriesList = countries.map((country) => <Country country={country} />)
//   return <div>{countriesList}</div>
// }

// const App = () => {
//   return (
//     <div className="container">
//       <div>
//         <h1>Country with cities</h1>
//         <Countries countries={countries} />
//       </div>
//     </div>
//   )
// }

// KEY IN MAPPING ARRAYS

const Numbers = ({ numbers }) => {
  const list = numbers.map((num) => <li key={num}>{num}</li>)
  return list;
}

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({ countries }) => {
  const countriesList = countries.map((country) => (
    <Country key={country} country={country} />
  ))
  return <div>{countriesList}</div>
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
