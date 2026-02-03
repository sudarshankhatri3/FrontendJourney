import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0)


    return (
        <div>
           
            <button onClick={()=>setCount+1}>
                increment 
            </button>
             <h2> count :{count+1}</h2>
        </div>
    )
}
export default Counter