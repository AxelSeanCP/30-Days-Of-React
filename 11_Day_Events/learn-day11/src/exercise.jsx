import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

class App extends Component {
  state = {
    style: {
      backgroundColor: "cyan",
      width: "150px",
      height: "50px",
      fontSize: 20,
      position: "absolute",
      left: "50px",
      top: "50px",
    },
  };
  handleMouse = () => {
    const randomLeft =
      Math.floor(Math.random() * (window.innerWidth - 150)) + "px";
    const randomTop =
      Math.floor(Math.random() * (window.innerHeight - 50)) + "px";

    this.setState({
      style: {
        ...this.state.style,
        left: randomLeft,
        top: randomTop,
      },
    });
  };
  render() {
    return (
      <div style={this.state.style} onMouseOver={this.handleMouse}>
        <h3>Meltryllis</h3>
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
