import { useEffect,useState} from "react";
export const TodoDate=()=>{

    const[dateTime,setDateTime]=useState("");
        useEffect(()=>{
    const getDateTime=()=>{
    const now=new Date();
    const formattedDate=now.toLocaleDateString();
    const formattedTime=now.toLocaleTimeString();

    setDateTime(`${formattedDate}-${formattedTime}`)
    }

    const interval=setInterval(()=>{
        getDateTime();
    },1000)

    return()=>clearInterval(interval);
    },[]);

    return <h2 className="date-time">{dateTime}</h2>;
};

//................................................PRACTISE.....................................

// export const TodoDate=()=>{

//     const[dateTime,setDateTime]=useState("");
//     useEffect(()=>{
//     const getDateTime=()=>{
//     const now=new Date();
//     const formattedDate=now.toLocaleDateString();
//     const formattedTime=now.toLocaleTimeString();

//     setDateTime(`${formattedDate}-${formattedTime}`);
//     }

//     const interval=setInterval(()=>{getDateTime();},1000)

//     return()=>clearInterval(interval)

//     },[])

//     return <h2>{dateTime}</h2>
// } 