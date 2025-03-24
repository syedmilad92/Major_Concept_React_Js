import React, { useMemo, useState } from 'react'
import { SearchComponent } from './SearchComponent';

export const CounterDisplay = React.memo(({count,increment}) => {
    console.log("CounterDisplay re-rendered");
  return (
    <div>
        <p>count: {count}</p>
        <button type='button' onClick={increment} >increment</button>
    </div>
  )
})

const MemoCallbackReactMemo = () => {
    const [count,setCount] = useState(0)
    const [text, setText] = useState("");
    const data = useMemo(() => ["apple", "banana", "mango"], []);

    const squaredCount = useMemo(()=>{
        return count * count;
    },[count])

    // useCallback to memoize the increment function
    const increment = React.useCallback(()=>{
        console.log("increament...")
        setCount((prev)=>prev+1)
    },[])

  return (
    <div>
        <SearchComponent data={data} />
        <h1>Performance Optimization Demo</h1>
        <CounterDisplay count={count} increment={increment} />
        <p>Squared Count: {squaredCount}</p>
        <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default MemoCallbackReactMemo