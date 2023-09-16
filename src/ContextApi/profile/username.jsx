 import { useContext } from 'react'
import {Name} from '../contextApi'
 export const UserName = ()=>{
    const username = useContext(Name);
    return(
        <>
        <div>UserName : {username}</div>
        </>
    )
}