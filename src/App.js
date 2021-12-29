import { useState } from "react";
import "./styles.css";
var Count = 0;
var Color = "Blue";
export default function App() {
  const [Count, Counter] = useState(0);
  function likeHandler() {
    var newCounter = Count + 1;
    Counter(newCounter);
  }
  return (
    <div className="App">
      <h1> UseLess Box </h1>
      <button style={{ backgroundColor: "#7dd3fc" }} onClick={likeHandler}>
        Like Me {Count}{" "}
      </button>
    </div>
  );
}
