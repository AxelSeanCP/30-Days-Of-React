import React from 'react'
import ReactDOM from 'react-dom/client'
import htmlLogo from './assets/html_logo.png'
import cssLogo from './assets/css_logo.png'
import jsLogo from './assets/js_logo.png'
import reactLogo from './assets/react_logo.png'
import profilePicture from './assets/meltryllis.jpg'

// Make a reusable Button component.
// const Button = () => (
//     <button>Click Me!</button>
// )

// Make a reusable InputField component.
// const InputField = () => (
//     <input type='text'></input>
// )

// Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
// const AlertBox = () => (
//     <div style={{ backgroundColor: 'green' }}>
//         <p>Attention</p>
//     </div>
// )

// exercises level 2
const Logo = () => (
    <div className='logo-wrapper'>
        <h3>Front End Technologies</h3>
        <img src={htmlLogo} alt="logo html"  />
        <img src={cssLogo} alt="logo css"  />
        <img src={jsLogo} alt="logo js"  />
        <img src={reactLogo} alt="logo react"  />
    </div>
)

const Footer = () => (
    <div className='subscribe-wrapper'>
        <h3>SUBSCRIBE</h3>
        <p>Sign up with your email address to receive news and updates</p>
        <div className="input-group">
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
            <input type='email' placeholder='Email' />
        </div>
        <button>Subscribe</button>
    </div>
)

// exercises level 3
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const SingleBlock = () => {
    const color = hexaColor();

    const blockStyle = {
        backgroundColor: color,
        color: 'white',
        height: 40
    }

    return (
        <div>
            <div style={blockStyle}>
                {color}
            </div>
        </div>
    )
}

const HexaBlock = () => (
    <div className='hexa-block'>
        <SingleBlock />
        <SingleBlock />
        <SingleBlock />
        <SingleBlock />
        <SingleBlock />
    </div>
)

const badgeStyle = {
    backgroundColor: 'cyan',
    color: 'white',
    width: '50px',
    height: '50px',
    display: 'inline',
    padding: '5px',
    margin: '10px 10px'
}

const Card = () => (
    <div className="card">
        <img src={profilePicture} />
        <h3>Axel Sean Cahyono Putra</h3>
        <p>Machine Learning Engineer, Web Developer</p>
        <h3>SKILLS</h3>
        <div style={badgeStyle}>Pandas</div>
        <div style={badgeStyle}>Numpy</div>
        <div style={badgeStyle}>Python</div>
        <div style={badgeStyle}>Tensorflow</div>
        <div style={badgeStyle}>PyTorch</div>
    </div>
)

const App = () => (
    <div className='App'>
        <Logo />
        <HexaBlock />
        <Card />
        <Footer />
    </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)