import { NavLink } from "react-router-dom"

export const Navbar= ()=>{
    return(
        <section className="links">
        <NavLink to={'/signup'}>SignUp</NavLink>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/profile'}>Profile</NavLink>
        <NavLink to={'/Products'}>Products</NavLink>
        </section>
    )
}