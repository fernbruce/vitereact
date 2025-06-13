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
      type: "password",
      tips: "显示密码",
    };
  }
  render() {
    return (
      <div>
        <input type={this.state.type} />
        <button
          onClick={() => {
            this.changeEvent();
          }}
        >
          {this.state.tips}
        </button>
      </div>
    );
  }

  changeEvent() {
    if (this.state.type === "password") {
      this.setState({
        type: "text",
        tips: "隐藏密码",
      });
    } else {
      this.setState({
        type: "password",
        tips: "显示密码",
      });
    }
  }
}

export default App;
