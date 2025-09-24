import { useEffect, useState } from "react"
export const ReactUseEffect=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("count value:",count);
    },[count]);
    return(
        <div>
            <h1>Hello,use effect</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
};