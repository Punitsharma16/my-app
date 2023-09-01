export function PrintArray(){
    const names = ['Abhi','Raghav','Tej','Ujjwal'];
    return (
        <div>
            {names.map((el,i)=>{
                return (
                <div>
                    Person-{i+1} : {el}
                </div>
                )
            })
            }

        </div>
    )
}
