import { useState } from "react"

export const Counter2 = ()=>{
    const [count2,setCount2] = useState(0);
    const sumTillNum = (num)=>{
        for(let i=1; i<=num; i++){
            setCount2((prev)=>{
                return prev+i;
            })
        }
    }
    return(
        <>
        <p>Count : {count2}</p>
        <button onClick={()=>sumTillNum(3)}>+3</button>
        <button onClick={()=>sumTillNum(10)}>+10</button>
        <button onClick={()=>setCount2(0)}>Reset</button>
        </>
        
    )
}