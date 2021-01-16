import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormsg: "",
      description: "The content of a textarea goes in the value attribute",
      mycar: "Volvo"
    };
  }
  handleChange = ev => {
    let name = ev.target.name;
    let value = ev.target.value;
    if (name === "age" && value != "" && !Number(value)) {
      this.setState({
        errormsg: (
          <small style={{ color: "red" }}>Your age must be a number!</small>
        )
      });
      return false;
    }
    this.setState({ [name]: value, errormsg: "" });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    // uncomment this code to apply validation only when form gets submitted
    // if (!Number(this.state.age)) alert("Your age must be a number!");
  };
  handleDropdown = ev => {
    this.setState({ mycar: ev.target.value });
  };
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    // conditional rendering
    let header = this.state.age
      ? `${this.state.username} ${this.state.age}`
      : this.state.username;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello {header}</h1>
        <textarea value={this.state.description} />
        <select value={this.state.mycar} onChange={this.handleDropdown}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <label>Enter your name: </label>
        <input type="text" name="username" onChange={this.handleChange} />
        <label>Enter your age: </label>
        <input type="text" name="age" onChange={this.handleChange} />
        {this.state.errormsg}
        <input type="submit" />
      </form>
    );
  }
}
