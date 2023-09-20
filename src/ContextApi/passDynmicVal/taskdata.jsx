import { useContext } from "react"
import { sendData } from "./datafile"

export const TaskData = ()=>{
    const {title,body} = useContext(sendData);
    console.log(sendData);
    return(
        <>
        <section>
            <div>Title : {title}</div>
            <div>Body : {body}</div>
        </section>
        </>
    )
}