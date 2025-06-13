import React, { Component } from "react";
import Son2 from "./Son2";

export default class App extends Component {
  state = {
    num: 10,
  };

  render() {
    return (
      <div>
        <div>app</div>
        <Son2 num={this.state.num}></Son2>
      </div>
    );
  }
}
