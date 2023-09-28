import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider/Authprovider"

export const Logout = ()=>{
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const logout = ()=>{
        setUser({})
        navigate('/login');
    }
    return(
        <main className="logout-btn-container">
        <button className="logout-btn" onClick={logout}>Logout</button>
        </main>
    )
}