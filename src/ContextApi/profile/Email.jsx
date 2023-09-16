import { useContext } from 'react'
import {Email} from '../contextApi'
export const EmailUser = ()=>{
    const email = useContext(Email);
    console.log(email);
    return(
        <>
        <div>Email : {email}</div>
        </>
    )
}