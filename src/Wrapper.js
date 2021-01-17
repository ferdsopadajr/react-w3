import React from "react";

export default class Wrapper extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(
      this.props.children,
      child => <div className="wrapper-special">{child}</div>
    );
    console.log(React.Children);
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
