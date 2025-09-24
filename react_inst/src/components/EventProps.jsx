// export const EventProps=()=>{
//     const HandleWelcomeUser=(user)=>{
//         alert(`hi,${user}`)
//     };

//     const handleHover=()=>{
//         alert(`Thanks`)
//     };
//     return(
//         <>
//         <WelcomeUser
//          onClick={()=>HandleWelcomeUser("kiki")}
//          onMouseEnter={handleHover}
//          />
//         </>
//     );
// };

// const WelcomeUser=(props)=>{
//     const handleGreeting=()=>{
//         alert(`Hii`);
//         props.onClick();
//     };
//     return(
//         <>
//         <button onClick={props.onClick}>Click</button>
//         <button onMouseEnter={props.onMouseEnter}>Hover</button>
//         <button onClick={handleGreeting}>Greetings</button>
//         </>
//     )
// }

//..........other method................
export const EventProps=()=>{
    const handleWelcomeUser=(user)=>{
        alert(`hi,${user}`)
    };

    const handleHover=()=>{
        alert(`Thanks`)
    };

    
    
    return(
        <>
        <WelcomeUser
         onClick={()=>handleWelcomeUser("kiki")}
         onMouseEnter={handleHover}
         />
        </>
    );
};

const WelcomeUser=(props)=>{
    const{onClick, onMouseEnter}=props;
    const handleGreeting=()=>{
        alert(`Hii`);
        onClick();
    };
    return(
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover</button>
        <button onClick={handleGreeting}>Greetings</button>
        </>
    );
    
};