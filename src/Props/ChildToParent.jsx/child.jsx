import { useState } from "react"

export const Child = ({readEmail})=>{
    const [email,setEmail] = useState('');
    const info = (e)=>{
        setEmail(e.target.value);
    }
    return(
        <>
        <div>Child : {email}</div>
        <input type="text" name="email" id="email" value={email} onChange={info}/>
        <button onClick={()=>readEmail(email)}>Submit</button>
        </>
    )
}