import { useEffect, useState } from "react"

export const FetchData = ()=>{
    const [photosData, setPhotoData] = useState([]);
    
    useEffect(()=>{
        const fetchPhoto = async ()=>{
            
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await resp.json();
                setPhotoData(data);
                
                // console.log(data);
            } catch (error) {
                
                console.log(error);
            }
        }
        fetchPhoto();
    },[])

    return(
        <main>
            {
                photosData.map(({albumId,id,title,url})=>{
                    return(
                        <section key={id}>
                        <div>AlbumId : {albumId}</div>
                        <img src={url} alt="loading.." height='100px' width='100px' />
                        <p>Title : {title}</p>
                        <br/>
                        </section>
                        
                    )
                })
    
            }
        </main>
    )
}