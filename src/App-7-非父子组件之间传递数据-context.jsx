import React, { Component } from "react";
import Register from "./Register";
import Footer from "./Footer";
import Header from "./Header";

export default class App extends Component {
  state = {
    num: 100,
  };
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}
