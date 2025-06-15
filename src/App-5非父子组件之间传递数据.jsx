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
        <Header
          num={this.state.num}
          update={this.updateNum.bind(this)}
        ></Header>
        <Footer
          num={this.state.num}
          update={this.updateNum.bind(this)}
        ></Footer>
      </div>
    );
  }

  updateNum(num) {
    this.setState({
      num: num,
    });
  }
}
