import {Link, Route, Routes} from 'react-router-dom'
import { Home } from './home'
import { Login } from './login'
import { About } from './about'
import { NotFount } from './pageNotFound'
export const App = ()=>{
    return(
        <>
        <div>App</div>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <br/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFount/>}/>
        </Routes>

        </>
        
    )
}