import React from 'react'
import ReactDOM from 'react-dom/client'
import meltImage from './assets/meltryllis.jpg'

const pfp = (
    <img src={meltImage} width={200} height={200} />
)

const bio = (
    <div>
        <h3>Meltryllis</h3>
        <p>Software Developer, Virus Specialist</p>
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

const skill = (
    <div>
        <h3>SKILLS</h3>
        <div style={badgeStyle}>Pandas</div>
        <div style={badgeStyle}>Numpy</div>
        <div style={badgeStyle}>Python</div>
        <div style={badgeStyle}>Tensorflow</div>
        <div style={badgeStyle}>PyTorch</div>
    </div>
)

const date = new Date().getMonth() + ' ' + new Date().getDay() + '. ' + new Date().getFullYear();

const footer = (
    <footer>
        <h4>Joined on {date}</h4>
    </footer>
)

const card =(
    <div>
        {pfp}
        {bio}
        {skill}
        {footer}
    </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {card}
    </React.StrictMode>
)