import { useRef, useState } from "react"
import {useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider/Authprovider";

export const Login = ()=>{
    const nameRef = useRef(null);
    const passwordref = useRef(null);
    const [error,setError] = useState();
    const navigate = useNavigate();
    const {setUser} = useAuth();

     const submitForm = (e)=>{
        e.preventDefault();
        const credentials = {
            [nameRef.current.name] : nameRef.current.value,
            [passwordref.current.name] : passwordref.current.value,
        }
    
        const userJSONVal = localStorage.getItem('userList');
        const userList = JSON.parse(userJSONVal);
    
        if(userList){
            const user = userList.find(
                (usr)=>usr.username ===credentials.username
            );
            if(user){
                if(user.password === credentials.password){
                    setUser(user);
                    navigate('/home')
                }else{
                    setError('Wrong Password');
                }
            }
                else{
                    setError('Not a valid user')
                }
            }else{
                setError('Something went Wrong!!')
                }
     }
    
        
    return(
        <main className="login-form">
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username: </label>
            <input 
             type="text"
             name="username"
             id="username"
             placeholder="type username.."
             ref={nameRef}
             />
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password.."
              ref={passwordref}
              />
            <br />
            <br />
            <div style={{color:"red"}}>{error}</div>
            <button>Login</button>
            <br/>
        </form>
        </main>
    )
}