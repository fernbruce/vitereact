import React, { Component } from "react";

export default class Alert extends Component {
  msg = "hello";
  render() {
    return (
      <div>
        <button onClick={this.fn1.bind(this)}>登录</button>
        <button
          onClick={() => {
            this.fn2();
          }}
        >
          登录
        </button>
      </div>
    );
  }
  fn1() {
    console.log("fn1被点击了");
    console.log(this.msg);
  }
  fn2() {
    console.log("fn2被点击了");
    console.log(this.msg);
  }
}
