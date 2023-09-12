import { useState } from "react"
import styles from './onblur.module.css'

export const Err = ()=>{
    const isError = {
        name:false,
        email:false
    }
    const initialVal = {
        name:'',
        email:''
    }
    const [error,setError] = useState(isError);
    const [val,setVal] = useState(initialVal);
    const [succuss,setSuccuss] = useState(false);
    
    const validation = (event)=>{
        val[event.target.name] = event.target.value;
        setVal({...val})
        if(event.target.value===''){
            setError({...error,[event.target.name]:true});
        }else{
            setError({...error,[event.target.name]:false});
        }
    }

    const showData = (e)=>{
        // console.log(Object.values(val));
        if(Object.values(val).includes('') !== true){
            setSuccuss(true);
        }
        console.log(val);
    }
    return(
        <>
        <label htmlFor="name" >Name : </label>
        <input type="text" name="name" className={styles.name} id="name" onBlur={validation} placeholder="Name.."/>
    
        { error.name &&
            <div style={{color:'red'}} className={styles.err}>Name can not be empty</div>
        }
        <br/>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" onBlur={validation} placeholder="Email.."/>
    
        {
            error.email &&
            <div style={{color:'red'}}>Email can not be empty</div>
        }
        <br/>
        { succuss && <div style={{color:'green'}}>SignUp Succuss</div>
        }
        <button onClick={showData}>SignUp</button>
        </>
    )
}