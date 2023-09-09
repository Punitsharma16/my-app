import { useState, useSyncExternalStore } from "react";
import styles from './form.module.css';

export const DataOnUI = ()=>{
    const byDefault = {
        firstName: '',
        lastName: '',
        email:'',
        password:'',
    }
    const [data, setData] = useState(byDefault);
    const [dataList, setDataList] = useState([]);
    const [showTag,setShowTag] = useState(true);
    const [profilePic,setProfile] = useState(null);
    const inputData = (event)=>{
        const{name,value} = event.target;
        data[name] = value;
        setData({...data});
    }

    const handleProfile = (e)=>{
        const file = e.target.files[0];
        setProfile(URL.createObjectURL(file));
    }

    const signUp = (event)=>{
        event.preventDefault();
        setDataList([...dataList,data])
        setData(byDefault);
        setShowTag(false);
    }
    return(
        <>
        { showTag &&
        <form className={styles.formstyle}>
            <label htmlFor="pic">Profile Image :</label>
            <input type="file" name="profile" id="pic" accept=".jpg, .jpeg, .png" onChange={handleProfile} />
            <br/>
            <label htmlFor="firstName">FirstName :</label>
            <input type="text" name="firstName" value={data.firstName} placeholder="Enter first Name.." id="firstName" onChange={inputData} />
            <br/>
            <br/>
            <label htmlFor="lastName">LastName :</label>
            <input type="text" name="lastName" value={data.lastName} id="lastName" placeholder="Enter last Name.." onChange={inputData} />
            <br/>
            <br/>
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" value={data.email} placeholder="Enter Email.." onChange={inputData} />
            <br/>
            <br/>
            <label htmlFor="password">Password :</label>
            <input type="password" name="password" id="password" value={data.password} placeholder="Enter your password.." onChange={inputData} />
            <br/>
            <br/>
            <button onClick={signUp}>SignUp</button>
            <br/>
        </form>
}
        <section>
            {
                dataList.map(({firstName,lastName,email,password,profile},i)=>{
                    return(
                        <div className={styles.dataStyle}>
                            <img src={profilePic} className={styles.pic} alt="Showing.." style={{ maxWidth: '200px'}}/>
                            <div className={styles.prfileData}>
                                <p>Name : {`${firstName} ${ lastName}`}</p>
                                <p>Email : {email}</p>
                                <p>Password : {password}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}