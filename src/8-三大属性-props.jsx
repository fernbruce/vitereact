import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

class App extends Component {
  state = {
    number: 0,
  };
  msg = "hello, Message";
  bane = React.createRef();
  render() {
    return (
      <>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          数值：{this.state.number}
        </button>
        <Banner
          ref={this.bane}
          changeNumber={(num) => {
            this.changeNum(num);
          }}
          num={this.state.number}
        ></Banner>
        <button
          onClick={() => {
            this.bane.current.setState({ msg: "来自父组件的关怀" });
          }}
        >
          修改
        </button>
      </>
    );
  }
  changeNum(num) {
    this.setState({ number: num });
  }
}

export default App;
