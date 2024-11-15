/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  useParams,
  Navigate,
} from "react-router-dom";

const Home = () => <h1>Welcome Home</h1>;

const About = () => <h1>About Us</h1>;

const Contact = () => <h1>Contact Us</h1>;

const challenges = [
  {
    name: "30 Days Of Python",
    description:
      "30 Days of Python challenge is a step by step guide to learn python in 30 days.",
    status: "completed",
    days: 30,
    level: "Begginers to Advanced",
    duration: "20 Nov 2024 - 20 Dec 2024",
    slug: "python",
    url: "https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Days Of JavaScript",
    description:
      "30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.",
    status: "completed",
    days: 30,
    level: "Beginners to Advanced",
    duration: "1 Jan 2020 - 30 Jan 2020",
    slug: "javascript",
    url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Days Of React",
    description:
      "30 Days of React challenge is a step by step guide to learn React in 30 days.",
    status: "ongoing",
    days: 30,
    level: "Beginners to Advanced",
    duration: "1 Oct 2020- 30 Oct 2020",
    slug: "react",
    url: "https://github.com/Asabeneh/30-Days-Of-React",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 HTML and CSS",
    description:
      "30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.",

    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "html-and-css",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 ReactNative",
    description:
      "30 Days of ReactNative challenge is a step by step guide to learn ReactNative in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "reactnative",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Data Analysis",
    description:
      "30 Days of Data Analysis challenge  is a step by step guide to learn about data, data visualization and data analysis in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "data-analysis",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Machine Learning",
    description:
      "30 Days of Machine learning challenge  is a step by step guide to learn data cleaning, machine learning models and predictions in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "machine-learning",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
];

const Challenge = ({
  challenge: {
    name,
    description,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{level}</p>
    <p>
      Author: {firstName} {lastName}
    </p>
    {duration && (
      <>
        {" "}
        <small>{duration}</small> <br />
      </>
    )}
    <small>Number of days: {days}</small>

    <p>{description}</p>
  </div>
);

const Challenges = () => {
  const { slug } = useParams();

  const challenge = challenges.find((challenge) => challenge.slug === slug);

  return (
    <div>
      <h1>30 Days Of React Challenge</h1>
      <ul>
        {challenges.map(({ name, slug }) => (
          <li key={slug}>
            <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      {challenge ? (
        <Challenge challenge={challenge} />
      ) : (
        <h2>Choose a challenge to see its details.</h2>
      )}
    </div>
  );
};

const NotFound = () => <h1>The page your looking for is not found</h1>;

const NavBar = ({ username }) => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to={`/user/${username}`}>User</NavLink>
    </li>
    <li>
      <NavLink to="/challenges">Challenges</NavLink>
    </li>
  </ul>
);

const User = ({ isLoggedIn, handleLogin }) => {
  const { username } = useParams();
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome {username} to the challenge</h1>
          <small>Now, you can navigate through all the challenges</small> <br />
        </>
      ) : (
        <p>Please login in to access the challenges</p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

const Welcome = ({ handleLogin, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? "Welcome to the challenge" : <p>Please login in</p>}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: "Axel",
  };
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar username={this.state.firstName} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/user/:username"
              element={
                <User
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Welcome
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              }
            />
            <Route
              path="/challenges"
              element={
                this.state.isLoggedIn ? (
                  <Challenges />
                ) : (
                  <Navigate to={`/user/${this.state.firstName}`} />
                )
              }
            />
            <Route path="/challenges/:slug" element={<Challenges />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// next: Prompt
