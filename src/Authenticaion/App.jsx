import { Signup } from "./Authentication"
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Navbar } from "./navbar"
import './auth.css'
import { Home } from "./Home"
import { Profile } from "./Profile"
import { Products } from "./Products"
import { AuthProvider } from "./AuthProvider/Authprovider"


export const App = ()=>{
    return(
        <Router>
            <AuthProvider>
        <main>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to='/signup'/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </main>
        </AuthProvider>
        </Router>
    )
}