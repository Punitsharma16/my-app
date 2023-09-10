import { useState } from "react"

export const NameError = ()=>{
    const startVal = {name:'',email:''}

    const [nameUser,setUser] = useState(startVal)
    const [showErr,setShowErr] = useState(false);
    const [showEmailErr, setShowEmailErr] = useState(false);

    const userChange = (event)=>{
        const{name,value} = event.target;
        nameUser[name] = value;
        setUser({...nameUser});
    }
    const signUp = (event)=>{
        event.preventDefault();
        if(nameUser.name === ''){
            setShowErr(true);
        }else{
            setShowErr(false);
        }
        if(nameUser.email === ''){
            setShowEmailErr(true);
        }else{
            setShowEmailErr(false);
        }
        console.log(nameUser.name);
        // console.log(result);
        console.log(nameUser);
        setUser(startVal);
    }
    return(
        <>
        <form>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" value={nameUser.name} onChange={userChange}/>
        <br/>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" value={nameUser.email} onChange={userChange}/>
        <br/>
        <button onClick={signUp}>SignUp</button>
        </form>
        {
            showErr && <p>Enter the name</p>
        }
        {
            showEmailErr && <p>Enter the Email</p>
        }
        </>
    )
}