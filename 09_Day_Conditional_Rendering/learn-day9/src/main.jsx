/* eslint-disable react/prop-types */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
);

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);

const Welcome = () => (
  <div>
    <h1>Welcome to My World</h1>
  </div>
);

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

class Main extends React.Component {
  render() {
    const { techs, greetPeople, handleTime, loggedIn, handleLogin, message } =
      this.props;
    console.log(message);

    const status = loggedIn ? <Welcome /> : <Login />;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text="Show Time"
              onClick={handleTime}
              style={buttonStyles}
            />{" "}
            <Button
              text="Greet People"
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? "Logout" : "Login"}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    );
  }
}

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };
  handleTime = () => {
    let message = this.showDate(new Date());
    this.setState({ message });
  };
  greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2024";
    this.setState({ message });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    // CONDITIONAL RENDERING using If Else
    // let status;
    // let text;

    // if (this.state.loggedIn) {
    //   status = <h3>Welcome to 30-Days-Of-React</h3>;
    //   text = "Logout";
    // } else {
    //   status = <h3>Please Login</h3>;
    //   text = "Login";
    // }

    // return (
    //   <div className="app">
    //     <Header data={data} />
    //     {status}
    //     <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
    //   </div>
    // );

    // CONDITIONAL RENDERING using Ternary Operator
    // let status = this.state.loggedIn ? (
    //   <h1>Welcome to 30 Days-Of-React</h1>
    // ) : (
    //   <h3>Please Login</h3>
    // );

    // CONDITIONAL RENDERING using Component
    // const status = this.state.loggedIn ? <Welcome /> : <Login />;

    // CONDITIONAL RENDERING using && operator
    // const { loggedIn, techs } = this.state;

    // const status = loggedIn ? <Welcome /> : <Login />;

    // return (
    //   <div className="app">
    //     <Header data={data} />
    //     {status}
    //     <Button
    //       text={this.state.loggedIn ? "Logout" : "Login"}
    //       style={buttonStyles}
    //       onClick={this.handleLogin}
    //     />
    //     {techs.length === 3 && (
    //       <p>You have all the prerequisite courses to get started React</p>
    //     )}
    //     {!loggedIn && (
    //       <p>
    //         Please login to access more information about 30 Days Of React
    //         challenge
    //       </p>
    //     )}
    //   </div>
    // );

    return (
      <div className="app">
        <Header data={data} />

        <Main
          techs={this.state.techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
