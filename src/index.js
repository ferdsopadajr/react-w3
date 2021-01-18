import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import HeaderA from "./HeaderA";
import Container from "./Container";
import MyForm from "./MyForm";
import MovieBrowser from "./MovieBrowser";
import MovieTitle from "./MovieTitle";
import Parent from "./Parent";
import "./style";
import styles from "./appStyles.module";

ReactDOM.render(<Header favcol="yellow" />, document.getElementById("root"));
ReactDOM.render(<HeaderA favcol="black" />, document.getElementById("root-a"));
ReactDOM.render(<Container />, document.getElementById("root-b"));
ReactDOM.render(<MyForm increment={1} />, document.getElementById("root-c"));
ReactDOM.render(
  <MovieBrowser>
    <MovieTitle title="Money Heist" />
    <MovieTitle title="Start-Up" />
  </MovieBrowser>,
  document.getElementById("root-d")
);
ReactDOM.render(
  <Parent>
    <h3 className={styles.error}>MongoDB</h3>
    <h3>ExpressJS</h3>
    <h3>ReactJS</h3>
    <h3>NodeJS</h3>
  </Parent>,
  document.getElementById("root-e")
);
