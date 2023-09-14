import { useEffect, useState } from "react"
import { NewLoader } from "./loaderdesign";

export const TryLoader = ()=>{
    const [posts,setPost] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const fetchPost = async ()=>{
        setIsLoading(true);
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await resp.json();
            setPost(data);
            setIsLoading(false);
            console.log(data);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchPost();
    },[]);

    return(
        <>
        {isLoading ? <NewLoader/> :
            posts.map(({body,title})=>{
               return (
               <section>
                    <p>Title : {title}</p>
                    <p>Body : {body}</p>
                </section>
               )
            })
        }
        </>
    )
}