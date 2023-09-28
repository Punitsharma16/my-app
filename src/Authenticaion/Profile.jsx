import { useAuth } from "./AuthProvider/Authprovider"

export const Profile = ()=>{
    const {user} = useAuth();
    return(
        <main className="profile">
        <h2>profile</h2>
        <p>Username : {user.username}</p>
        <p>Full Name : {user.fullname}</p>
        <p>DOB : {user.dob}</p>
        </main>
    )
}