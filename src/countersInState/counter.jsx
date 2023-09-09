import { useState } from "react"

export const Counter = ()=>{
    const [count,setCount] = useState(0);
    
    // const increment = ()=>{
    //     setCount(count+1);
    // }

    // const decrement = ()=>{
    //     setCount(count-1);
    // }

    // const reset =()=>{
    //     setCount(0);
    // }
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

export const Counter1 = ()=>{
    const [count1,setCount] = useState(0);
    
    const incrementValue = (num)=>{
        for(let i=1; i<=num; i++){
            setCount(count1+i)
        }
    }
    return(
        <>
        <p>Count : {count1}</p>
        <button onClick={()=>incrementValue(3)}>+3</button>
        <button onClick={()=>incrementValue(10)}>+10</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}