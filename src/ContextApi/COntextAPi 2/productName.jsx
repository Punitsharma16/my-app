import { useContext } from "react"
import { nameOfProduct } from "./owner"

export  const ProductName = ()=>{
    const {name} = useContext(nameOfProduct);
    return(
        <>
        <div>Name : {name}</div>
        </>
    )
}