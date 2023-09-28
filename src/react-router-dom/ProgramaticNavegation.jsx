import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Navigation = ()=>{
    const [info ,setInfo] = useState({name:'',email:''});
    const Navigate = useNavigate();
    const submitForm = (e)=>{
        e.preventDefault();
        // console.log();
        Navigate('/login/ravi');
    }
    return(
        <form onSubmit={submitForm}>
        <input type="text" name="name" id="name" onChange={(e)=>setInfo({...info,name:e.target.value})}/>
        <br/>
        <input type="email" name="email" id="email" onChange={(e)=>setInfo({...info,email:e.target.value})}/>
        <br/>
        <button>Login</button>
        </form>
    )
}