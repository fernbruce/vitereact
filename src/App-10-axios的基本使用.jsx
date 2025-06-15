import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

// rest风格操作
// axios.get(url="",options={})
// axios.put(url="",data={},options={})//更新数据[整体数据]   所有字段修改
// axios.post(url="",data={},options={})//创建、新增、上传
// axios.patch(url="",data={},options={})//更新数据[局部数据] 单一字段的修改
// axios.delete(url="",options={})
// 返回值 promise对象，异步回调对象

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
  state = { city: "北京", weather_data: [] };
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
  city = React.createRef();

  render() {
    console.log("In App render执行了,页面渲染了");
    return (
      <div>
        <input
          type="text"
          ref={this.city}
          onChange={() => {
            this.setState({ city: this.city.current.value });
          }}
        />
        <button
          onClick={() => {
            this.get_weather();
          }}
        >
          查询
        </button>
        {/* <img
          src="https://objectstorageapi.eu-central-1.run.claw.cloud/gg2hxe1z-test/cat.png"
          alt=""
        /> */}
        <table>
          <tbody>
            <tr>
              <td>时间</td>
              <td>情报</td>
            </tr>
            {this.state.weather_data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.hours}</td>
                  <td>{item.wea}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  get_weather() {
    const ret = axios;
    const url = `http://gfeljm.tianqiapi.com/api?unescape=1&version=v63&appid=48268161&appsecret=2fqE8BUR&city=${this.state.city}`;
    console.log(url);
    // var that = this;
    // console.log(that.state);
    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        weather_data: response.data.hours,
      });

      // console.log("state:", that.state);
    });
    console.log("ret", ret);
  }
}
