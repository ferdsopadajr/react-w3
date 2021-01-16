import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import HeaderA from "./HeaderA";
import Container from "./Container";
import MyForm from "./MyForm";

ReactDOM.render(<Header favcol="yellow" />, document.getElementById("root"));
ReactDOM.render(<HeaderA favcol="black" />, document.getElementById("root-a"));
ReactDOM.render(<Container />, document.getElementById("root-b"));
ReactDOM.render(<MyForm increment={1} />, document.getElementById("root-c"));
