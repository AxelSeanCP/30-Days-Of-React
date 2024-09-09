/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

// getDerivedStateFromProps
// const User = ({ firstName }) => {
//   <div>
//     <h1>{firstName}</h1>
//   </div>;
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("I am the constructor and I will be the first to run");
//     this.state = {
//       firstName: "John",
//     };
//   }

//   static getDerivedStateFromProps(props) {
//     console.log(
//       "I am getDerivedStateFromProps and I will be the second to run."
//     );
//     return { firstName: props.firstName };
//   }

//   render() {
//     return (
//       <div className="app">
//         <h1>React Component Life Cycle</h1>
//         <h3>getDerivedStateFromProps</h3>
//         <User firstName={this.state.firstName} />
//       </div>
//     );
//   }
// }

// componentDidMount
// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("I am the constructor and I will be the first to run");
//     this.state = {
//       firstName: "John",
//       data: [],
//     };
//   }

//   componentDidMount() {
//     console.log("I am componentDidMount and I will be the last to run");
//     const API_URL = "https://restcountries.eu/rest/v2/all";
//     fetch(API_URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   renderCountries = () => {
//     return this.state.data.map((country) => {
//       return (
//         <div>
//           <div>
//             {" "}
//             <img src={country.flag} alt={country.name} />{" "}
//           </div>
//           <div>
//             <h1>{country.name}</h1>
//             <p>Population: {country.population}</p>
//           </div>
//         </div>
//       );
//     });
//   };

//   render() {
//     return (
//       <div className="app">
//         <h1>React Component Life Cycles</h1>
//         <h1>Calling API</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className="countries-wrapper">{this.renderCountries()}</div>
//         </div>
//       </div>
//     );
//   }
// }

// shouldComponentUpdate && componentDidUpdate
class App extends Component {
  constructor(props) {
    super(props);
    console.log("I am the constructor and I will be the first to run");
    this.state = {
      firstName: "John",
      day: 1,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(nextState.day);
    if (nextState.day > 31) {
      return false;
    } else {
      return true;
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: "Congratulations, Challenge has been completed",
      });
    }
    console.log(prevState, prevProps);
  }

  render() {
    return (
      <div className="app">
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
