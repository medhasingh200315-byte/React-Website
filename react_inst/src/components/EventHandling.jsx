export const EventHandling=()=>{
    function handleButtonClick(){
        alert("lolo")
    };
    const handleWelcomeUser=(user)=>{
        alert(`hi ${user}`)
    };
    return(
        <>
        <button onClick={handleButtonClick}>Click Me</button>
        <br />
        <button onClick={()=>handleButtonClick()}>Click Me 2</button>
        <br />
        <button onClick={()=>alert("jiji")}>Check</button>
        <br />
        <button onClick={()=>handleWelcomeUser("kiki")}>Click me</button>
        </>
    );
};
