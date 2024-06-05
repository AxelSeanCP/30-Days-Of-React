// JSX Syntax
// const jsxElement = <h1>I am a JSX element</h1>
// const welcome = <h1>Welcome to 30 Days of React Challenge</h1>
// const data = <small>Oct 2, 2020</small>

//const title = <h2>Getting Started React</h2>

/*const header = (
    <header>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>Javascript Library</h3>
        <p>Axel Sean Cahyono Putra</p>
        <small>Jun 6, 2024</small>
    </header>
)*/

// class names
// const title = <h1 className='title'>Getting Started React</h1>
// const inputField = (
//     <div>
//         <label htmlFor='firstname'>First Name</label>
//         <input type='text' id='firstname' placeholder='First Name' />
//     </div>
// )

// injecting data to jsx element
// const welcome = 'welcome to 30 Days Of React';
// const title = 'Getting Started React';
// const subtitle = 'Javascript Library';
// const authorFirstName = 'Axel';
// const authorLastName = 'Sean';
// const date = 'Jun 6, 2024';

// const header = (
//     <header>
//         <div className='header-wrapper'>
//             <h1>{welcome}</h1>
//             <h2>{title}</h2>
//             <h3>{subtitle}</h3>
//             <p>
//                 Instructor: {authorFirstName} {authorLastName}
//             </p>
//             <small>Date: {date}</small>
//         </div>
//     </header>
// )

// injecting a string to jsx element
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const firstName = 'Asabeneh'
// const lastName = 'Yetayeh'
// const date = 'Oct 2, 2020'

// // JSX element, header
// const header = (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         Instructor: {firstName} {lastName}
//       </p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// )

// injecting a number to a jsx element
// const numOne = 3;
// const numTwo = 2;

// const result = (
//     <p>
//         {numOne} + {numTwo} = {numOne + numTwo}
//     </p>
// )

// const yearBorn = 2003;
// const currentYear = new Date().getFullYear();
// const age = currentYear - yearBorn;
// const personAge = <p> {age} </p>

// injecting an array to jsx element
const techs = ['HTML', 'CSS', 'JavaScript'];

const main = (
    <main>
        <div className='main-wrapper'>
            <p>
                Prequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techs}</ul>
        </div>
    </main>
)