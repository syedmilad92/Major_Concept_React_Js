import React, { useCallback, useState } from 'react'

const Child = ({increment,count}) =>{
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment} >increment</button>
        </div>
    )
}

const BasicExercise = () => {
    const [count,setCount] = useState(0)
    const increment = useCallback(()=>setCount(prev => prev + 1),[])
  return (
    <div>
        <h1>Parent</h1>
        <Child countProps={count} incrementProps={increment} />
    </div>
  )
}

export default BasicExercise