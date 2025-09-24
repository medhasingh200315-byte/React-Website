import { useEffect, useState } from "react"

export const CleanUp=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000)
        return()=>clearInterval(timer);
    },[])
    return(
        <div>
            <div>
                <p>Subscriber</p>
                <div id="odometer">
                    {count}
                </div>
                <h3>Subscriber <br />Realtime Counter</h3>
            </div>
        </div>
    )
}