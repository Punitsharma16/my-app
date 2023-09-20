import { createContext } from "react"
import { Products } from "./product"

 export const nameOfProduct = createContext();
export const Owner = ()=>{
    const name = 'mobile';
    const price = '15000';
    return(
        <>
        <h3>Flipcart</h3>
        <nameOfProduct.Provider value={{name,price}}>
        <Products/>
        </nameOfProduct.Provider>
        </>
    )
}