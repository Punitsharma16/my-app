import { useParams } from "react-router-dom"

export const DynamicUrl = ()=>{
    const param = useParams();
    const users = [
        {
            name:'abhi',
            role:'student',
            city:'Bhiwani'

        },
        {
            name:'ravi',
            role:'student',
            city:'Village'
        },
        {
            name:'rahul',
            role:'student',
            city:'city'
        }
    ]

    const filteredPeople = users.filter(user => user.name === param.username);
    console.log(filteredPeople[0].name);
    return(
        <>
        <div>Name : {filteredPeople[0].name}</div>
        <div>Role : {filteredPeople[0].role}</div>
        <div>City : {filteredPeople[0].city}</div>
        </>
    )
}