import React, { Component } from "react";
import GlobalContext from "./GlobalContext";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("children", this.props.children);
    return (
      <GlobalContext.Consumer>
        {(context) => {
          return (
            <div>
              <button onClick={() => context.update_num(context.num + 1)}>
                修改数据
              </button>
              <p>头部组件,num={context.num}</p>
              {this.props.children}
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}
