import { ProductData } from "./Listproduct";
export const Login = ()=>{

    const notLogIn = {
        padding:'20px',
        fontSize:'26px',
        color:'red',
        border:'2px solid #fff',
        margin:'15px' ,
        borderRadius:'50%'
    }

    const forgotButton = {
        margin:'5px',
        padding:'6px',
        color:'red',
        borderRadius:'5px'
    }

    let loginState = true;
    if(!loginState){
        return (
            <section>
        <div style={notLogIn}>Plz Login First</div>
        <button style={forgotButton}>Forgot Password</button>
        </section>
        )
    }
    return <ProductData/>
}