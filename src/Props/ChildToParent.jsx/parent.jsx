import { Child } from "./child"

export const Parent = ()=>{
    const getInfo = (email,name)=>{
        console.log("info",email);
    }
    return(
        <>
        <Child readEmail = {getInfo}/>
        </>
    )
}