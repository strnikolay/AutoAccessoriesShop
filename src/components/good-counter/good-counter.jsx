import { useState } from "react";
import "./good-counter.css"


function GoodCounter() {
  const [count, setCount] = useState(0)

  return(
    <div className="counter-wrapper">
      <button className="button-increment" onClick={() => setCount(count-1)}>-</button>
      <div className="item-count">{count}</div>
      <button className="button-decrement" onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default GoodCounter;