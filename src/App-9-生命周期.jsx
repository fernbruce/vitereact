import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

function fn() {
  console.log(this.state);
}

class Box extends Component {
  render() {
    return <div>box</div>;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("aaa");
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("In Box componentWillUnmount执行了,页面将要卸载");
  }
}
export default class App extends Component {
  state = { num: 10 };
  constructor() {
    super();
    console.log("constructor执行了,组件已经创建了");
    fn.apply(this);
  }
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount执行了,组件即将被销毁");
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props);
    console.log("state", state);
    console.log("In App getDerivedStateFromProps执行了,组件的属性值被修改了");
    // return {
    //   num: 101,
    // };
    return {};
  }

  componentDidMount() {
    console.log("In App componentDidMount执行了kk页面渲染完毕");
    //1.页面渲染完成之后的初始化操作
    //2.请求服务端数据
    //3.监听，定时
  }
  // UNSAFE_componentWillUpdate() {//   console.log("componentWillUpdate执行了,页面更新之前");
  // }
  componentDidUpdate() {
    console.log("In App componentDidUpdate执行了,页面更新了");
  }
  getSnapshotBeforeUpdate(prevProps, prevState, prevSnapshot) {
    console.log("In App getSnapshotBeforeUpdate执行了,页面更新之前");
    //1.必须有返回值，可以是null,或者Snapshot
    //2.是在render运行过程中，已经更新了DOM树以后，在渲染之前执行的
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("In App shouldComponentUpdate执行了,页面是否需要更新");
    return true;
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps执行了,页面将要接受新的属性");
  // }

  componentWillUnmount() {
    console.log("In App componentWillUnmount执行了,页面将要卸载");
  }
  render() {
    console.log("In App render执行了,页面渲染了");
    console.log("state:", this.state);
    return (
      <div>
        <button
          onClick={() => {
            console.log("onClick:", this.state.num);
            this.setState({
              num: this.state.num + 1,
            });
          }}
        >
          点击
          {this.state.num}
        </button>
        <Header></Header>
        <Footer></Footer>
        {this.state.num % 2 && <Box></Box>}
      </div>
    );
  }
}
