  import { Header } from './Header/Header'
  import { NavComponents } from './NavBar/navComponents'
  import './newApp.css'
  import { Login } from './List/loginForList';
  export function NewApp(){
    const darkMode = true;
    
    return(
        <section className= {darkMode?'dark':'light'}>
        <Header/>
        <NavComponents/>
        <div className='productList-control'>
        <Login/>
        </div>
        </section>
    )
}