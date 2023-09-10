import { useState } from "react"

export const CheckBox = ()=>{
    const obj = {remember:false}
    const [check,setCheck] = useState(obj);

    const handleChecck = (event)=>{
        const {name,checked} = event.target
        check[name] = checked;
        setCheck({...check});
        console.log(check.remember);
    }
    return(
        <>
        <input type="checkbox" name="remember" id="check" checked={check.remember} onChange={handleChecck}/>
        <label htmlFor="check">Remember me</label>
        </>
    )
}