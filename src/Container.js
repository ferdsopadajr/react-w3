import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Container is about to be unmounted.");
  }
  render() {
    return <h1>This is Child Component</h1>;
  }
}

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delChild = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        {this.state.show === true ? <Child /> : ""}
        <button type="button" onClick={this.delChild}>
          Delete Child
        </button>
      </div>
    );
  }
}
