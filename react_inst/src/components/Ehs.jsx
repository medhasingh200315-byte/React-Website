// export const Ehs=()=>{
//     const prac=()=>{
//         alert("hii")
//     }
//     const prac1=()=>{
//         alert("no")
//     }
//     const prac2=(show)=>{
//         alert(`hi ${show}`)
//     }
//     return(
//         <div>
//         <button onClick={prac}>Try 1</button> <br />
//         <button onClick={()=>prac1()}>Try 2</button> <br />
//         <button onClick={()=>prac2("Medha")}>Try3</button>
//         </div>

import { useState } from "react";

      
//     )
// }


export const Ehs=()=>{

    
    const[dateTime,setDateTime]=useState("");

    const getDateTime=()=>{
    const now=new Date();
    const formattedDate=now.toLocaleDateString();
    const formattedTime=now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`)
    }

    const interval=setInterval(()=>{getDateTime();},1000)
    return(
        <h2></h2>
    )
}