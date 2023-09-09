import { useState } from "react"

export const Array = ()=>{
    const [days,setClass] = useState(['Sun','Mon','Wed']);
    const addDays = ()=>{
        setClass([
            ...days,'Tues','Fri'
        ])
    }
    return (
        <>
        <p>Classes : {days.join(" ")}</p>
        <button onClick={addDays}>Add Classes</button>
        </>
    )
}