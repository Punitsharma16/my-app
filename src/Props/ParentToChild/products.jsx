import { Shoe } from "./Shoes"
import { Mobile } from "./mobile"

export const ShoeTwo = ()=>{
    return(
        <>
        <Shoe brand = {"Nike"} price={'2000'} size={'10'}/>
        <br/>
        <Shoe brand = {"Adidas"} price={2500} size={'8'}/>
        <br />
        <Mobile brand ={"Oppo"} price={"18000"}/>
        <br />
        <Mobile brand = {"Apple"} price= {"80000"}/>
        </>
    )
}