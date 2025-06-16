import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  createContext,
  useContext,
  useReducer,
} from "react";
import axios from "axios";

const GlobalContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, num: state.num + 1 };
    case "minus":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

const initialState = 100;
const init = (inialState) => {
  return { num: inialState };
};

function App() {
  // const [num, setNum] = useState(100);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <GlobalContext value={{ state, dispatch }}>
        <Header></Header>
        <Footer></Footer>
      </GlobalContext>
    </div>
  );
}

function Header() {
  const value = useContext(GlobalContext);
  return (
    <div>
      <h2>Header</h2>
      <p>{value.state.num}</p>
      <button onClick={() => value.dispatch({ type: "add", val: 1 })}>+</button>
      <button onClick={() => value.dispatch({ type: "minus", val: 1 })}>
        -
      </button>
    </div>
  );
}

function Footer() {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <h2>Footer</h2>
      <p>{state.num}</p>
      <button onClick={() => dispatch({ type: "add", val: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "minus", val: 1 })}>-</button>
    </div>
  );
}
export default App;
