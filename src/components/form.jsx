import SearchBar from "./text";
export const Name = ()=>{
    return(
        <div>
            <SearchBar/>
            <label>Name : </label>
            <input type="text" placeholder="Enter Your Name.." />
        </div>
    );
}

export const Email = ()=>{
    return (
        <div>
            <label>Email : </label>
            <input type="email" placeholder="Email.." />
        </div>
    )
}