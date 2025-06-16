import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("hello");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
    console.log("count", count);
  }, []);
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
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              {item.username}-{item.password}-{item.role}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
