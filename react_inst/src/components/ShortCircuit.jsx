import { useState } from "react";

const ShortCircuitExample=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(true)
    const[user,setUser]=useState("")
    return(
        <section>
            <h1>Welcome to this</h1>
            {isLoggedIn && <p>You are logged in</p>}
            {user ? `Hello ${user}`:"Plz logged in"}

            <div>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                Toggle login State
                </button>
            <button onClick={()=>setUser("Hii")}>Set User</button>
            <button onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    );
};
export default ShortCircuitExample;
