import { useReducer } from "react"

export const Reducers = ()=>{
    const handleButton = (prev,action)=>{
        if(action === 'inc'){
            return prev+10;
        }
        if(action === 'dec'){
            return prev-5;
        }
    }
    const [number,dispatchNum] = useReducer(handleButton,5);
    
    return(
        <main>
            <p>Count : {number}</p>
            <button onClick={()=>dispatchNum('inc')}>+ten</button>
            <button onClick={()=>dispatchNum('dec')}>-five</button>
        </main>
    )
}