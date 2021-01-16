import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", age: null };
  }
  handleChange = ev => {
    if (ev.target.name === "age" && !Number(ev.target.value)) {
      alert("Your age must be a number!");
      return false;
    }
    this.setState({ [ev.target.name]: ev.target.value });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    // uncomment this code to apply validation only when form gets submitted
    // if (!Number(this.state.age)) alert("Your age must be a number!");
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
        <label>Enter your name: </label>
        <input type="text" name="username" onChange={this.handleChange} />
        <label>Enter your age: </label>
        <input type="text" name="age" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}
