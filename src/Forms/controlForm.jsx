import { useState } from "react";

export const Form =()=>{
    const intialize ={firstName:'',
    lastName:'',
    email:'',
    password:''}
    const [userinfo,setUserInfo] = useState(intialize)

    const userInfo = (event)=>{
        // console.log(event.target.name);
        // console.log(event.target.value);
        const{name,value} = event.target;
        // let changes = name==='email' ? value.toLowerCase():value.toUpperCase();
        userinfo[name] = value;
        setUserInfo({...userinfo});
        // console.log(userinfo);
    }
    const signUp = (e)=>{
        e.preventDefault();
        setUserInfo(intialize);
        console.log(userinfo);
    }
    return(
        <>
        <label htmlFor="firstName">FirstName : </label>
        <input type="text" name="firstName" value={userinfo.firstName} onChange={userInfo} id="firstName" />
        <br/>
        <br/>
        <label htmlFor="lastName">LastName : </label>
        <input type="text" name="lastName" value={userinfo.lastName} onChange={userInfo} id="lastName" />
        <br/>
        <br/>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" value={userinfo.email} onChange={userInfo} id="email" />
        <br/>
        <br/>
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" value={userinfo.password} onChange={userInfo} id="password" />
        <br/>
        <br/>
        <button onClick={signUp}>SignUp</button>
        </>
    )
}