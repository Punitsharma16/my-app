import { useState } from "react"

export const ShowError = ()=>{
    const startVal = {name:'',email:''}

    const [user,setUser] = useState(startVal)
    const [showErr,setShowErr] = useState(false);
    const userChange = (event)=>{
        const{name,value} = event.target;
        user[name] = value;
        setUser({...user});
    }
    const signUp = (event)=>{
        event.preventDefault();
        const result = Object.values(user);
        // console.log(result);
        const isError = result.includes('');
        setShowErr(isError);
        // console.log(isError);
        // console.log(user);
        setUser(startVal);
    }
    return(
        <>
        <form>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" value={user.name} onChange={userChange}/>
        <br/>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" value={user.email} onChange={userChange}/>
        <br/>
        <button onClick={signUp}>SignUp</button>
        </form>
        { showErr && 
            <p style={{color:'red'}}>Please Fill All Details</p>
        }
        </>
    )
}