import React, { Component } from "react";
import Alert from "./Alert";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Alert />
        <h1>公共头部</h1>
      </div>
    );
  }
}
