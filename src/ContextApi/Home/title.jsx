import { useContext } from "react"
import { TitleN } from "../contextApi"
export const Title = ()=>{
    const title = useContext(TitleN);
    return(
        <>
        {/* <h4>Title</h4> */}
        <div>Title : {title}</div>
        </>
    )
}