import { useRef } from "react";

export const UseRef=()=>{
    const username=useRef(null);
    const password=useRef(null);
     const handleFormSubmit=(e)=>{
            e.preventDefault();
        }
    return (
       
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username}/>
            <br />
            <input type="text" id="password" ref={password}/>
            <br />
            <button>Submit</button>
        </form>
    )
}