import React, { Component } from "react";
import GlobalContext from "./GlobalContext";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => {
          return (
            <div>
              <button onClick={() => context.update_num(++context.num)}>
                修改数据
              </button>
              <p>脚部组件,num={context.num}</p>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}
