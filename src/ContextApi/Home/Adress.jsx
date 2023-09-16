import { useContext } from "react"
import { Add } from "../contextApi"
export const Adrress = ()=>{
    const add = useContext(Add);
    return(
        <>
        {/* <h4>Adrress</h4> */}
        <div>Address : {add}</div>
        </>
    )
}