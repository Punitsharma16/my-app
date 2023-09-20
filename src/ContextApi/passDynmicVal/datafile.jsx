import { createContext, useEffect, useState } from "react"
import { Task } from "./task"
export const sendData = createContext();
export const Datafile = ()=>{
    const [dataInfo,setData] = useState({title : '', body : ''});
    
    useEffect(()=>{
        const fetching = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/5')
            const data = await res.json();
            setData(data);
            console.log(data);
        }
        fetching();
    },[]);


    return(
        <>
        <h2>DataFile</h2>
        <sendData.Provider value={dataInfo}>
        <Task/>
        </sendData.Provider>
        </>
    )
}