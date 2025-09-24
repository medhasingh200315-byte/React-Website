import { useState } from "react";

export const LiftStateUp=()=>{
     const[inputValue,setInputValue]=useState("");
    return(
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayContent inputValue={inputValue}/>
        </>
  );
};

const InputComponent=({inputValue,setInputValue})=>{
   
    return(
    <>
    <input 
    type="text" 
    placeholder="enter your name" 
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}
    ></input>
    </>
    );
};

const DisplayContent=()=>{
    return <p>The current input value is: </p>;
};