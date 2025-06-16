import React, { useReducer, useState } from "react";
import axios from "axios";

function App() {
  // const [state, setState] = useState("");
  const [state, dispatch] = useReducer(
    // reducer 状态 动作信号
    (state, action) => {
      console.log("state:", state, "action:", action);
      // reducer必须要返回一个新状态
      const newState = { ...state };
      return newState;
    },
    // 初始状态
    {
      num: 10,
      data: [],
      loading: false,
      error: "",
    },
    (inialState) => {
      console.log("inialState:", inialState);
      return {
        num: 11,
        data: [],
        loading: false,
        error: "",
      };
    }
  );
  // console.log("state:", state);
  // console.log("dispatch:", dispatch);

  return (
    <div>
      <h1>App组件</h1>
      {state.num}
      <button onClick={() => dispatch({ type: "add", val: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "sub", val: 1 })}>-</button>
    </div>
  );
}

export default App;
