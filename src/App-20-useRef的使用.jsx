import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

function App() {
  const username = useRef("");

  return (
    <div>
      <input type="text" ref={username} />
      <button
        onClick={() =>
          (username.current.value = username.current.value + "123")
        }
      >
        重置
      </button>
    </div>
  );
}
export default App;
