import { Icon } from "./icon"
import { SearchBar } from "./searchBar"
import { Logo } from "./logo"

export const Header = ()=>{
    const styleObj = {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'gray',
        padding:'10px'
    }
    return(
        <section style={styleObj}>
        <Icon/>
        <SearchBar/>
        <Logo/>
        </section>
    )
}