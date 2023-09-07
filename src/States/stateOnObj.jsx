import { useState } from "react"

export const UserInfo = ()=>{
    let [user,setUser] = useState(
        {name:'guest',
        email:'@email.com',
        }
        );

        const changeName =()=>{
            setUser(
                {...user,
                name:'Abhinav'}
                )
        }
        const changeEmail = ()=>{
            setUser(
                {
                    ...user,
                    email:'Abhinav12@gmail.com'
                }
            )
        }
        

        return(
            <>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <button onClick={changeName}>changeName</button>
            <button onClick={changeEmail}>changeEmail</button>
            </>
        )
}