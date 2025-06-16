import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState("初始值");
  const fn = () => {
    console.log("普通函数：", state);
  };
  const mfn = useMemo(() => {
    return () => console.log("记忆函数：", state);
  }, []);
  fn();
  mfn();

  const update = () => {
    setState("更新后的值");
  };
  return (
    <div>
      <div>state值：{state}</div>
      <button onClick={update}>改变state</button>
    </div>
  );
}
export default App;
