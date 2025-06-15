import React, { Component } from "react";
import bus from "./bus";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    bus.subscribe((num) => {
      console.log("有消息来", num);
      this.setState({ num: num + 1 });
    });
  }
  state = {
    num: 100,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            bus.publish(this.state.num);
          }}
        >
          点击
        </button>
        <p>脚部组件,num={this.state.num}</p>
      </div>
    );
  }
}
