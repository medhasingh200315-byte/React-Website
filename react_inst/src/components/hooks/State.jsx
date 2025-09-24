import { useState } from "react";

export const State=()=>{
    const [count, setCount]=useState(5);
    const handleButtonClick=()=>{
        setCount(()=>count + 1)
    }
 
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </>
    );
   };


