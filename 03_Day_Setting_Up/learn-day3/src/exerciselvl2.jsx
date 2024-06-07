import React from 'react'
import ReactDOM from 'react-dom/client'
import cssLogo from './assets/css_logo.png'
import reactLogo from './assets/react_logo.png'
import htmlLogo from './assets/html_logo.png'
//import meltImage from './assets/meltryllis.jpg'

const logo = (
    <div>
        <h3>Front End Technologies</h3>
        <img src={htmlLogo} alt='logo html' width={200} height={200} />
        <img src={cssLogo} alt='logo css' width={200} height={200} />
        <img src={reactLogo} alt='logo react' width={200} height={200} />
    </div>
)

const footerStyle = {
    backgroundColor: '#61DBFB',
    textAlign: 'center',
    padding:  '50px',
    borderRadius: '10px'
}

const inputStyle = {
    margin: '10px',
    padding: '10px'
}

const buttonStyle = {
    backgroundColor: 'red',
    width: '200px',
    color: 'white',
    padding: '10px',
    margin: '20px 0',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px'
}

const footer = (
    <footer style={footerStyle}>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates</p>
        <input type='text' placeholder='First name' style={inputStyle} />
        <input type='text' placeholder='Last name' style={inputStyle} />
        <input type='email' placeholder='Email' style={inputStyle} />
        <br></br>
        <button style={buttonStyle}>Subscribe</button>
    </footer>
)

const app = (
    <div>
        {logo}
        {footer}
    </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {app}
    </React.StrictMode>
)