/* eslint-disable react/prop-types */
import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formattedCapital =
    capital && capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ""
    );
  const formatLanguage = languages.length > 1 ? "Languages" : "Language";

  return (
    <div className="country">
      <div className="country_flag">
        <img src={flag} alt={name} />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div className="country_text">
        <p>{formattedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(", ")}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  );
};

class App extends Component {
  state = {
    data: [],
  };

  // fetchCountryData = async () => {
  //   const url = "https://restcountries.com/v2/all"; // Updated URL
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     this.setState({
  //       data,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching country data:", error);
  //   }
  // };

  axiosCountryData = async () => {
    const url = "https://restcountries.com/v2/all";
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
    // this.fetchCountryData();
    this.axiosCountryData();
  }

  render() {
    return (
      <div className="App">
        <h1>React Component Life Cycles</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div className="countries-wrapper">
            {this.state.data.map((country) => (
              <Country key={country} country={country} />
            ))}
          </div>
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
