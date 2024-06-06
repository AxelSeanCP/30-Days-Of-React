import React from 'react'
import ReactDOM from 'react-dom/client'
import cssLogo from './assets/css_logo.png'
import reactLogo from './assets/react_logo.png'
import htmlLogo from './assets/html_logo.png'
//import meltImage from './assets/meltryllis.jpg'

const logo = (
    <div>
        <h3>Front End Technologies</h3>
        <img src={htmlLogo} alt='logo html' />
        <img src={cssLogo} alt='logo css' />
        <img src={reactLogo} alt='logo react' />
    </div>
)

const footer = (
    <footer>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates</p>
        <input type='text' placeholder='First name' />
        <input type='text' placeholder='Last name' />
        <input type='email' placeholder='Email' />
        <button>Subscribe</button>
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