/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'

// Exercises level 2
// number generator

// function isPrime(n, i = 2) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % i === 0) return false;
//     if (i * i > n) return true;
//     return isPrime(n, i + 1);
// }

// const Number = ({ number }) => {
//     let numberStyle = {
//         width: 50,
//         height: 50,
//         backgroundColor: 'yellow',
//         color: 'white',
//         textAlign: 'center',
//         lineHeight: '50px',
//         display: 'inline-block'
//     };

//     if (isPrime(number)){
//         numberStyle.backgroundColor = 'red';
//     } else if (number % 2 == 0) {
//         numberStyle.backgroundColor = 'green';
//     }

//     return <div style={numberStyle}>{number}</div>
// }

// const Numbers = ({ numbers }) => {
//     const numberList = numbers.map((num) => (
//         <Number key={num} number={num} />
//     ))
//     return <div>{numberList}</div>
// }

// const App = () => {
//     const numbers = [
//         0,1,2,3,4,5,6,7,8,9,10,
//         11,12,13,14,15,16,17,18,19,
//         20,21,22,23,24,25,26,27,28,29,30,31
//     ]

//     return (
//         <div>
//             <Numbers numbers={numbers}/>
//         </div>
//     )
// }

// hexadecimal color

// const hexaColors = [
//     '#3A9D23',
//     '#7B5E99',
//     '#D21F4B',
//     '#44B7D4',
//     '#E27A3F',
//     '#2F48A3',
//     '#C6B134',
//     '#8921E1',
//     '#56D18F',
//     '#FA5E75'
// ];

// const HexaColor = ({ color }) => {
//     const hexaStyle = {
//         width: 50,
//         height: 50,
//         color: 'white',
//         backgroundColor: color
//     }

//     return <div style={hexaStyle}>{color}</div>
// }

// const HexaColors = ({ hexaColors }) => {
//     const hexaList = hexaColors.map((hcol) => (
//         <HexaColor key={hcol} color={hcol}/>
//     ));
//     return <div>{hexaList}</div>
// }

// const App = () => {
//     return (
//         <div>
//             <HexaColors hexaColors={hexaColors} />
//         </div>
//     )
// }

// Exercises level 3
// bar group
import { tenHighestPopulation } from './ten_most_highest_populations'

const Country = ({ country: { country, population }, maxPopulation}) => {
    const barWidth = (population / maxPopulation) * 100;

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
            <div style={{ width: '150px' }}>
                <h3 style={{ margin: 0 }}>{country}</h3>
            </div>
            <div style={{ width: '70%', margin: '0 10px' }}>
                <div style={{ width: `${barWidth}%`, backgroundColor: 'orange', height: '20px' }}></div>
            </div>
            <div>
                <p style={{ margin: 0 }}>{population.toLocaleString()}</p>
            </div>
        </div>
    )
}

const Countries = ({ countries }) => {
    const maxPopulation = Math.max(...countries.map(c => c.population))
    const countryList = countries.map((country) => (
        <Country key={country} country={country} maxPopulation={maxPopulation} />
    ))
    return <div>{countryList}</div>
}

const App = () => {
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <h1>Ten Most Populated Countries</h1>
            <Countries countries={tenHighestPopulation} />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )