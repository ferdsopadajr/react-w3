import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red", favcol: "green" };
  }
  static getDerivedStateFromProps(props) {
    return { favoritecolor: props.favcol };
  }
  render() {
    let style = {
      backgroundColor: "yellow",
      fontFamily: "Lato",
      fontWeight: 900
    };
    return (
      <h1 style={style}>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

Header.defaultProps = {
  favcol: "pink"
};
