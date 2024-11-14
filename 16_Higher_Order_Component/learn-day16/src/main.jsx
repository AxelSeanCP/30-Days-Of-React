/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyle = (CompParam, name = "default") => {
  const colors = [
    {
      name: "default",
      backgroundColor: "#e7e7e7",
      color: "#000000",
    },
    {
      name: "react",
      backgroundColor: "#61dbfb",
      color: "#fffff",
    },
    {
      name: "success",
      backgroundColor: "#4CAF50",
      color: "#ffffff",
    },
    {
      name: "info",
      backgroundColor: "#2196F3",
      color: "#ffffff",
    },
    {
      name: "warning",
      backgroundColor: "#ff9800",
      color: "#ffffff",
    },
    {
      name: "danger",
      backgroundColor: "#f44336",
      color: "#ffffff",
    },
  ];
  const { backgroundColor, color } = colors.find((c) => c.name === name);

  const buttonStyles = {
    backgroundColor,
    padding: "10px 45px",
    border: "none",
    borderRadius: 3,
    margin: 3,
    cursor: "pointer",
    fontSize: "1.25rem",
    color,
  };
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};
const NewButton = buttonWithStyle(Button);
const ReactButton = buttonWithStyle(Button, "react");
const InfoButton = buttonWithStyle(Button, "info");
const SuccessButton = buttonWithStyle(Button, "success");
const WarningButton = buttonWithStyle(Button, "warning");
const DangerButton = buttonWithStyle(Button, "danger");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text="No Style" onClick={() => alert("I am not styled yet")} />
        <NewButton
          text="Styled Button"
          onClick={() => alert("I am the default style")}
        />
        <ReactButton text="React" onClick={() => alert("I have react color")} />
        <InfoButton
          text="Info"
          onClick={() => alert("I am styled with Info color")}
        />
        <SuccessButton
          text="Success"
          onClick={() => alert("I am successfull")}
        />
        <WarningButton
          text="Warning"
          onClick={() => alert("I warn you many times")}
        />
        <DangerButton
          text="Danger"
          onClick={() => alert("Oh no, you can not restore it")}
        />
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
