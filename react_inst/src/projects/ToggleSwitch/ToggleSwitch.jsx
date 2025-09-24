import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import "./ToggleSwitch.css";
export const ToggleSwitch=()=>{
    const[isOn,setIsOn]=useState(false);
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    };
    return(
        <div>
        <h1>Toggle Switch<IoIosSwitch /></h1>
        <div className="toggle-switch"
        style={{backgroundColor: isOn ? "green":"red"}}
        onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "on":"off"}`}>
                <span className="switch-state">{isOn? "On":"off"}</span>
            </div>
        </div>
        </div>
    )
}