import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("hello");
  return (
    <div>
      App{count}
      {name}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
    </div>
  );
}

export default App;
