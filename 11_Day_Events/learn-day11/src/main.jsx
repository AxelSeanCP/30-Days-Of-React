import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };
  handleClick = () => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: "Welcome to the world of events",
    });
  };
  // triggered whenever the mouse moves
  handleMouseMove = () => {
    this.setState({ message: "mouse is moving" });
  };
  // to get value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  };

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is ` + e.charCode,
    });
  };
  // Blurring happens when a mouse leave an input field
  handleBlur = () => {
    this.setState({ message: "Input field has been blurred" });
  };
  // this event triggers during a text copy
  handleCopy = () => {
    this.setState({
      message: "Using 30 Days Of React for commercial purpose is prohibited",
    });
  };
  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copyright permission by copying this text
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=""> Test for onKeyPress Event: </label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=""> Test for onBlur Event: </label>
        <input type="text" onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.value}
            />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
