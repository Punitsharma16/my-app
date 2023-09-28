import {Link, NavLink, Navigate, Route, Routes} from 'react-router-dom'
import { Home } from './home'
import { Login } from './login'
import { About } from './about'
import { NotFount } from './pageNotFound'
import './app.css'
import { DynamicUrl } from './DynamicUrl'
import { Navigation } from './ProgramaticNavegation'
import { QueryPara } from './queryPara/query'
import { Red } from './queryPara/RedColor'
export const App = ()=>{
    return(
        <>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        {/* <Link to="/home">Home</Link> */}
        <NavLink to='/home'>Home</NavLink>
        <br/>
        {/* <Link to="/about">About</Link> */}
        <NavLink to='/about'>About</NavLink>
        <br/>
        {/* <Link to="/login">Login</Link> */}
        <NavLink to='/login'>Login</NavLink>
        <br/>
        <br/>
        <NavLink to='/login/rahul'>Rahul</NavLink>
        <br/>
        <NavLink to='/login/abhi'>Abhi</NavLink>
        <br/>
        <NavLink to='/login/ravi'>Ravi</NavLink>
        <br/>
        <NavLink to='/navigation'>Form</NavLink>
        <br />
        <NavLink to='/product'>Product</NavLink>
        </div>
        <br/>
        <br/>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFount/>}/>
            <Route path='/navigation' element={<Navigation/>}/>
            <Route path='/login/:username' element={<DynamicUrl/>}/>
            <Route path='/product' element={<QueryPara/>}/>
            <Route path='/product/Color=red' element={<Red/>}/>
        </Routes>

        </>
        
    )
}