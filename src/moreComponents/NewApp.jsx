  import { Header } from './Header/Header'
  import { NavComponents } from './NavBar/navComponents'
  import './newApp.css'
  import { Login } from './List/loginForList';
  import { useState } from 'react';
  export function NewApp(){
    // const darkMode = true;
    const style = {
      width:'120px',
      height:'40px',
      alignSelf:'center',
      borderRadius:'5px',
      fontSize:'20px'
  }
  let [mode,setMode] = useState('Dark')
  const changeMode = ()=>{
      if(mode==='Dark'){
          setMode('Light')
      }else{
          setMode('Dark')
      }

  }
    return(
        <section className= {mode==='Light'?'dark':'light'}>
        <Header/>
        <NavComponents/>
        <div className='productList-control'>
        <Login/>
        <button onClick={changeMode} style={style}>{mode} Mode</button>
        </div>
        </section>
    )
}