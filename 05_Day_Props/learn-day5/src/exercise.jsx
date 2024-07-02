/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'
import profilePicture from './images/meltryllis.jpg'

// exercises level 2
const logoStyles = {
    textAlign: 'center'
}
const imgStyles = {
    width: '5%',
    margin: '10px 20px'
}

const Logo = ({
    imageData: { html, css, js, react }
}) => (
    <div style={logoStyles}>
        <h3>Front End Technologies</h3>
        <img src={html} alt="logo html" style={imgStyles} />
        <img src={css} alt="logo css" style={imgStyles} />
        <img src={js} alt="logo js" style={imgStyles} />
        <img src={react} alt="logo react" style={imgStyles} />
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

// Exercises level 3
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

const TechList = ({ techs }) => {
    const techList = techs.map((tech) => <li style={badgeStyle} key={tech}>{tech}</li>)
    return techList
}

const Card = ({
    data: {
        image,
        name,
        jobTitle,
        skills
    }
}) => (
    <div className="card">
        <img src={image} />
        <h3>{name}</h3>
        <p>{jobTitle}</p>
        <h3>SKILLS</h3>
        <ul>
            <TechList techs={skills} />
        </ul>
    </div>
)

const App = () => {
    const imageData = {
        html: htmlLogo,
        css: cssLogo,
        js: jsLogo,
        react: reactLogo
    }

    const data = {
        image: profilePicture,
        name: 'Axel Sean Cahyono Putra',
        jobTitle: 'Machine Learning Engineer, Web Developer',
        skills: ['Pandas', 'Numpy', 'Tensorflow', 'Python']
    }

    return (
        <div className="app">
            <Logo imageData={imageData}/>
            <Footer />
            <HexaBlock />
            <Card data={data} />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)