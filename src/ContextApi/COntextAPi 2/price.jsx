import { useContext } from "react"
import { nameOfProduct } from "./owner"

export const Price = ()=>{
    const {price} = useContext(nameOfProduct);
    return(
        <>
        <div>Price : {price}</div>
        </>
    )
}