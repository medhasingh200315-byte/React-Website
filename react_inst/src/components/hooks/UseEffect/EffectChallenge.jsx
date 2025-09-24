import { useEffect, useState } from "react"

export const Challenge=()=>{
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");

    useEffect(()=>{
        document.title=`count:${count}`;
    },[count])
    return(
        <div>
            <h1>useEffect Challenge</h1>
            <p>
                count: <span>{count}</span>
            </p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>
                Name: <span>{name}</span>
            </p>
            <input type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}