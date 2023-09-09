export const User = ()=>{
    let userObj = {};
    const userInfo = (event)=>{
        // console.log(event.target);
        userObj[event.target.name] = event.target.value;
    }
    const signUp = (e)=>{
        e.preventDefault();
        console.log(userObj);
    }

    return(
        <>
        <label htmlFor="firstName">FirstName : </label>
        <input type="text" name="firstName" onChange={userInfo} id="firstName" />
        <br/>
        <br/>
        <label htmlFor="lastName">LastName : </label>
        <input type="text" name="lastName" onChange={userInfo} id="lastName" />
        <br/>
        <br/>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" onChange={userInfo} id="email" />
        <br/>
        <br/>
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" onChange={userInfo} id="password" />
        <br/>
        <br/>
        <button onClick={signUp}>SignUp</button>
        </>
    )
}