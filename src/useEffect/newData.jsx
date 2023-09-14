import { useEffect, useState } from "react"
import Styles from './newData.module.css'
export const NewData = ()=>{
    const [shops,setShops] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setShops([...shops,...data]);
            console.log(data);
            console.log(page);
        })
    },[page])
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.innerHeight + document.documentElement.scrollTop > (document.documentElement.offsetHeight*0.9)){
                setPage(page+1);
            }
        })
    },[page])
    return(
        <main>
            {
                shops.map(({category,description,id,image,price,title,})=>{
                    return(
                        <section className={Styles.card} key={id}>
                            <h3>Category : {category}</h3>
                            <p>Description : {description}</p>
                            <img src={image} alt="loading.." height='150px' width='150px'/>
                            <h4>Title : {title}</h4>
                            <p>Price : {price}</p>
                        </section>
                    )                    

                })
            }
            <br/>
        </main>
    )
}