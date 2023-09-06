import { Home } from "./Home"
import { About } from "./About"
import { Prodcast } from "./Prodcast"
import './NavBar.css'
export const NavComponents =()=>{
    
    return(
        <section className="navBar">
            <Home/>
            <Prodcast/>
            <About/>
        </section>
    )
}