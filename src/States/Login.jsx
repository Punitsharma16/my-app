import { useState } from "react"

export const Name = ()=>{
    let [userName,setUser] = useState('Guest');
    const updateName = ()=>{
        setUser('Shubham');
    }
    return(
        <section>
            <p>Name : {userName}</p>
            <button onClick={updateName}>Update Name</button>
        </section>
    )
}

export const Email = ()=>{
    let [userEmail,setEmail] = useState('@gmail.com');
    const updateEmail = ()=>{
        setEmail('Shubham@gmail.com')
    }
    return(
        <section>
            <p>Email : {userEmail}</p>
            <button onClick={updateEmail}>Update Email</button>
        </section>
    )
}