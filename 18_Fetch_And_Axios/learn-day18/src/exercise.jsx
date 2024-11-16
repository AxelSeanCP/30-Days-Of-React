import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };

  fetchCatData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchCatData();
  }

  render() {
    return (
      <div className="app">
        <h1>30 Days Of React</h1>
        <h2>Cats Paradise</h2>
        <div>
          <p>There are {this.state.data.length} cat breeds</p>
        </div>
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
