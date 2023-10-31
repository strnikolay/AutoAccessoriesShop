import { useState } from "react";
import "./good-counter.css"


function GoodCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count++);
  const decrement = () => setCount(count--);


  return(
    <div class="counter-wrapper">
      <button class="button-increment" onClick={() => decrement()}>-</button>
      <div class="item-count">{count}</div>
      <button class="button-decrement" onClick={() => increment()}>+</button>
    </div>
  )
}

export default GoodCounter;