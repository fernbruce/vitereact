import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        账号：
        <input type="text" />
        <br />
        密码：
        <input type="password" />
        <br />
        <input type="checkbox" checked />
        记住登录
        <br />
        <input type="submit" value="注册" />
      </div>
    );
  }
}

export default Register;
