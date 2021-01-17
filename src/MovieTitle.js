import React from "react";

export default class MovieTitle extends React.Component {
  render() {
    let description = "";
    let style = {};
    if (this.props.isPlaying == true) {
      style = { color: "red" };
      description = (
        <span style={{ color: "black" }}> is currently playing!</span>
      );
    }
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
          {description}
        </h1>
      </div>
    );
  }
}
