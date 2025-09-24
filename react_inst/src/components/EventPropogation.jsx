export const EventPropogation=()=>{
    const handleGrandParent=()=>{
        alert("Grandparent click")
    };
    const handleParentclick=()=>{
        alert("Parent click");
    };
    const handleChildClick=(event)=>{
        alert(event)
        event.stopPropogation();
        alert("child click")
    }
    return(
        <section className="main-div">
            <div className="g-div" onClick=
            {handleGrandParent}>
            <div className="p-div" onClick=
            {handleParentclick}>
            <button className="c-div" onClick=
            {handleChildClick}>
            </button>  
            </div>   
            </div>
        </section>
    )
}