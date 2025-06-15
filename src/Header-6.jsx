import React, { Component } from "react";
import bus from "./bus";

export default class Header extends Component {
  state = { num: 90 };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    bus.subscribe((num) => {
      console.log("有消息来", num);
      this.setState({ num: num + 1 });
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            bus.publish(this.state.num);
          }}
        >
          修改数据
        </button>
        <p>头部组件,num={this.state.num}</p>
      </div>
    );
  }
}
