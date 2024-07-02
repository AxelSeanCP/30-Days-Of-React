/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'

// STRING PROP TYPES
// const Header = (props) => {
//   console.log(props) 
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstName} {props.lastName}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => {
//   const welcome = 'Welcome to 30 Days Of React'
//   const title = 'Getting Started React'
//   const subtitle = 'JavaScript Library'
//   const firstName = 'Asabeneh'
//   const lastName = 'Yetayeh'
//   const date = 'Oct 4, 2020'

//   return (
//     <div className='app'>
//       <Header
//         welcome={welcome}
//         title={title}
//         subtitle={subtitle}
//         firstName={firstName}
//         lastName={lastName}
//         date={date}
//       />
//     </div>
//   )
// }

// NUMBER PROP TYPES
// const Age = (props) => <div>The person is {props.age} years old</div>
// const Weight = (props) => (
//   <p>The weight of the object on earth is {props.weight} N</p>
// )

// const App = () => {
//   let currentYear = 2020
//   let birthYear = 1820
//   const age = currentYear - birthYear
//   const gravity = 9.81
//   const mass = 75

//   return (
//     <div className='app'>
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   )
// }

// boolean props type
// const Status = (props) => {
//   let status = props.status ? 'Old enough to drive' : 'Too young for driving'
//   return <p>{status}</p>
// }

// const App = () => {
//   let currentYear = 2020
//   let birthYear = 2015
//   const age = currentYear - birthYear // 15 years

//   let status = age >= 18

//   return (
//     <div className='app'>
//       <Status status={status} />
//     </div>
//   )
// }

// array props type
// const Skills = (props) => {
//   const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>)
//   return <ul>{skillList}</ul>
// }

// const App = () => {
//   return (
//     <div className="app">
//       <Skills skills={['Tensorflow', 'Pandas', 'Numpy']} />  
//     </div>
//   )
// }

// OBJECT PROP TYPES
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]
//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// const Header = (props) => {
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//         <p>
//           {props.data.author.firstName} {props.data.author.lastName}
//         </p>
//         <small>{showDate(props.data.date)}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => {
//   const data = {
//     welcome: 'Welcome to my world',
//     title: 'Hope is the thing with feathers',
//     subtitle: 'This is hsr songs',
//     author: {
//       firstName: 'Axel Sean',
//       lastName: 'Cahyono Putra'
//     },
//     date: new Date(),
//   }

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   )
// }

// FUNCTION PROP TYPES
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// const App = () => {
//   const sayHi = () => {
//     alert('Hi')
//   }
  
//   const greetPeople = () => {
//     alert('Welcome to my world, renew your definition')
//   }

//   const handleTime = () => {
//     alert(showDate(new Date()))
//   }

//   return (
//     <div className='app'>
//       <Button text='Say Hi' onClick={sayHi} />
//       <Button text='Greet People' onClick={greetPeople} />
//       <Button text='Show Time' onClick={handleTime} />
//       {/* <Button text='Say Hi' onClick={() => {alert('Hi')}} /> */}
//     </div>
//   )
// }

// DESTRUCTURING PROPS
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]
//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }

// Destructuring in the parenthesis
// const Header = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// })

// const Header = (props) => {
//   const data = props.data
//   //const { welcome, title, subtitle, author, date} = data
//   //const { firstName, lastName } = author
  
//   // Destructuring in one line
//   const {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   } = data

//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => {
//   const data = {
//     welcome: 'Welcome to my world',
//     title: 'Hope is the thing with feathers',
//     subtitle: 'This is hsr songs',
//     author: {
//       firstName: 'Axel Sean',
//       lastName: 'Cahyono Putra'
//     },
//     date: new Date(),
//   }

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   )
// }

// DESTRUCTURE ALL COMPONENTS
import asabenehImage from './images/asabeneh.jpg'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => {
  return(
    <div className="user-card">
      <img src={image} alt={firstName} />
      <h2>
        {firstName}
        {lastName}
      </h2>
    </div>
  )
}

const Button = ({ text, onClick, style }) => {
  return(
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white'
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => {
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
        <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
      </div>
    </main>
  )
}

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['Pandas', 'Numpy', 'TensorFlow']
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2024')
  }

  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
