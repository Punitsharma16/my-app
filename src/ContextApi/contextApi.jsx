import { createContext } from "react";
import { Home } from "./Home/Home"
import { Profile } from "./profile/Profile"
import { UserName } from "./profile/username";

export const Name = createContext();
export const Email = createContext();
export const TitleN = createContext();
export const Add = createContext();

export const ContextApi = ()=>{
    const username = 'Punit Sharma';
    const email = '@gmail.com';
    console.log(email);
    const add = 'Bhiwani';
    const title = 'Developer';

   
    return(
        <>
        <Name.Provider value={username}>
            <Email.Provider value={email}>
        <Profile/>
             </Email.Provider>
        </Name.Provider>

        <TitleN.Provider value={title}>
            <Add.Provider value={add}>
        <Home/>
        </Add.Provider>
        </TitleN.Provider>
       
        
        </>
    )
}