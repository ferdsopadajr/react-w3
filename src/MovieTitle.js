import React from "react";

export default class MovieTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let style = this.props.isPlaying == true ? { color: "red" } : {};
    return (
      <div>
        <h1 style={style}>{this.props.title}</h1>
      </div>
    );
  }
}
