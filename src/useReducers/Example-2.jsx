import { useReducer } from "react"

export const Classes = ()=>{
    const intitial = {
        username : 'abhi',
        classes: ["mon", "tue", "wed", "fri"],
        duration : 2,
        durationInWeek : 8,
    }
    const userRecuder = (state , action)=>{
        if(action.type==="increment"){
            const {duration , classes} = state;
            const newDuration = duration+action.payload;
            console.log(classes.length);
            const newWeeklyDuration = newDuration * classes.length;
        
        const newClasses = {
               ...state,
            duration : newDuration,
            durationInWeek : newWeeklyDuration,
        }
        return newClasses;
    }
    
}
    const [user, dispatchUser] = useReducer(userRecuder,intitial);
    return(
        <main>
            <p>User : {user.username}</p>
            <p>Classes : {user.classes}</p>
            <p>Duration : {user.duration}</p>
            <p>DurationInWeek : {user.durationInWeek}</p>
            <button onClick={()=>dispatchUser({
                type : 'increment',
                payload : 0.5
            })}>Extend 
                classes 0.5 hrs
            </button>
            <button onClick={()=>dispatchUser({
                type : 'increment',
                payload : 1
            })}>Extend 
                classes 1 hrs
            </button>
            <button onClick={()=>dispatchUser({
                type : 'increment',
                payload: 1.5,
            })}>Extend 
                classes 1.5 hrs
            </button>
            <br/>
            
        </main>
    )
}