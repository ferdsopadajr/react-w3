import React from "react";

export default class HeaderA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return state.favoritecolor === "blue"
      ? state
      : { favoritecolor: props.favcol };
  }
  shouldComponentUpdate(state) {
    return state.favoritecolor !== "black";
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };
  getSnapshotBeforeUpdate(props, state) {
    console.log("Previous:", props, state);
  }
  componentDidUpdate() {
    console.log("Current:", this.props, this.state);
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button id="cc" type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
