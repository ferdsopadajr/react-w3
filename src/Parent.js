import React from "react";

export default class Parent extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(
      this.props.children,
      child => <div className="wrapper-special">{child}</div>
    );
    return (
      <div className="wrapper">
        <p>
          This component has {React.Children.count(this.props.children)}{" "}
          children
        </p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
