import React from 'react'
import ReactDOM from 'react-dom/client'
import profilePicture from './assets/meltryllis.jpg'

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Axel Sean',
  lastName: 'Cahyono Putra',
}
const date = 'Jun 11, 2024'

// Header Component
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {author.firstName} {author.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  )
}

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2003
const currentYear = 2024
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={profilePicture} alt='profile image' />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
)

const techs = ["HTML", "CSS", "JavaScript"]
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)


// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        {techsFormatted}
      </ul>
      {result}
      {personAge}
      <UserCard />
    </div>
  </main>
)

const copyRight = '2024'

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

// The App, container component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <HexaColor />
    <Footer />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
