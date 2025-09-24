import { useState } from "react"

export const Registration=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");


    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        switch(name){
            case "firstName":
            setFirstName(e.target.value);
            break;
            
            case "LastName":
            setLastName(e.target.value);
            break;

            case "email":
            setEmail(e.target.value);
            break;

            case "password":
            setPassword(e.target.value);
            break;

            case "phone":
            setPhoneNumber(e.target.value);
            break;

        };

    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const formData={
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        }
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
                 value={firstName}
                 onChange={handleInputChange}
                 required />

                 <label htmlFor="lastName">
                    <b>Last Name</b>
                </label>
                <input
                 type="text"
                 name="lastName"
                 placeholder="Enter lastname"
                 value={lastName}
                 onChange={handleInputChange}
                 required />

                 <label htmlFor="email">
                    <b>Email</b>
                 </label>
                 <input type="text" placeholder="Enter Email" name="email" required value={email} onChange={handleInputChange}/>

                 <label htmlFor="password">
                    <b>Password</b>
                 </label>
                 <input type="password"
                  name="password"
                  placeholder="Enter Password"
                  required 
                  value={password}
                  onChange={handleInputChange}/>

                  <label htmlFor="phone">
                    <b>Phone Number</b>
                  </label>
                  <input type="phone" name="phone" placeholder="123456789" required value={phoneNumber} onChange={handleInputChange}/>

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