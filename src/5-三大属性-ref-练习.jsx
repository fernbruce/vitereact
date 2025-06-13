import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  input = React.createRef();
  header = React.createRef();
  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.input}
          onChange={() => {
            this.changeEvent();
          }}
        />
      </div>
    );
  }

  changeEvent() {
    console.log(this.input.current.value);
  }
}

export default App;
