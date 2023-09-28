import { NavLink } from "react-router-dom"
import { useAuth } from "./AuthProvider/Authprovider"

export const Navbar= ()=>{
    const {user} = useAuth();
    const {username} = user;
    return(
        <section className="links">
     {!username && <NavLink to={'/signup'}>SignUp</NavLink>}
       { username && <NavLink to={'/home'}>Home</NavLink>}
        {!username &&<NavLink to={'/login'}>Login</NavLink>}
        {username && <NavLink to={'/profile'}>Profile</NavLink>}
        { username &&<NavLink to={'/Products'}>Products</NavLink>}
        {username &&<NavLink to={'/logout'}>Logout</NavLink>}
        </section>
    )
}