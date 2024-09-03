import React, { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";

class App extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  country = React.createRef();
  title = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.title.current.value);
    console.log(this.country.current.value);

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.firstName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    };

    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              ref={this.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              ref={this.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              ref={this.country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              ref={this.title}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-success">Submit</button>
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
