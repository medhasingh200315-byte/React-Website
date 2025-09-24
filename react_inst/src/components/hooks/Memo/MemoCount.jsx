import { useRef } from "react";
import { memo } from "react";

 const Counts=()=>{
    const renderCount=useRef(0);
    console.log(renderCount);

    return(
        <div>
            <p>Nope it</p>
            <span>{renderCount.current++}time(s)</span>
        </div>
    )
}

export default memo(Counts);