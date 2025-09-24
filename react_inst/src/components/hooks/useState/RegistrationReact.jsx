import { useState } from "react"

export const RegistrationFormReact=()=>{
    const[user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:""
    });



    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}))
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        
    }
    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <h1>Sign Up</h1>
                <p>Please fill up the form</p>
                

                <label htmlFor="firstName">
                    <b>First Name</b>
                </label>
                <input
                 type="text"
                 name="firstName"
                 placeholder="Enter firstname"
                 value={user.firstName}
                 onChange={handleInputChange}
                 required />

                 <label htmlFor="lastName">
                    <b>Last Name</b>
                </label>
                <input
                 type="text"
                 name="lastName"
                 placeholder="Enter lastname"
                 value={user.lastName}
                 onChange={handleInputChange}
                 required />

                 <label htmlFor="email">
                    <b>Email</b>
                 </label>
                 <input type="text" placeholder="Enter Email" name="email" required value={user.email} onChange={handleInputChange}/>

                 <label htmlFor="password">
                    <b>Password</b>
                 </label>
                 <input type="password"
                  name="password"
                  placeholder="Enter Password"
                  required 
                  value={user.password}
                  onChange={handleInputChange}/>

                  <label htmlFor="phone">
                    <b>Phone Number</b>
                  </label>
                  <input type="phone" name="phoneNumber" placeholder="123456789" required value={user.phoneNumber} onChange={handleInputChange}/>

                  <p>
                    By creating an account you agree to our
                    <a href="#" style={{color:"dodgerblue"}}>
                        Terms & Policy
                    </a>
                  </p>

                  <div>
                    <button type="submit">Sign Up </button>
                  </div>
            </div>
        </form>
        </>
    )
}