export const Info = ()=>{
    let userName = '';
    let password = '';
    const username = (event)=>{
        userName = event.target.value;
    }
    const userpassword = (event)=>{
        console.log(event);
        password = event.target.value;
    }

    const submit = (e)=>{
        e.preventDefault();
        console.log(userName);
        console.log(password);
    }

    return(
        <>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name"onChange={username} placeholder="Enter your name.." />
        <br/>
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" onChange={userpassword} placeholder="Enter Your Password.." />
        <br/>
        <button type="submit" onClick={submit}>Login</button>
        </>
    )
}