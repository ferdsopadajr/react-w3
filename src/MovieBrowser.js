import React from "react";

export default class MovieBrowser extends React.Component {
  render() {
    const currentPlaying = "Money Heist";
    const childrenWithExtraProps = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(child, {
          isPlaying: child.props.title === currentPlaying
        })
    );
    return <div className="movie-browser">{childrenWithExtraProps}</div>;
  }
}
