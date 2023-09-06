import { ProductList } from "./listData";
import './List.css';
export const ProductData = ()=> {
    return(
        <>
        {
            ProductList.map((product)=>{
                const{id,name,brand,category,price}=product;
                return(
                    
                    <section key={id} className="card">
                        <div>Name : {name}</div>
                        <div>Brand : {brand}</div>
                        <div>Category : {category}</div>
                        <div>Price: {price}</div>
                        <button className="buyButton">Buy</button>
                        {price>80000&&<div>Expensive</div>}
                        <br/>
                    </section>
                )
            })
        }
        </>
    )
}