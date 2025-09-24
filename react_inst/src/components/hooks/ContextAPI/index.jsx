import { createContext, useContext } from "react";

export const BioContext=createContext();

export const BioProvider=({children})=>{

    const myName="Megha";
    return <BioContext.Provider value={myName}>{children}</BioContext.Provider>;
}

//custom hooks

export const useBioContext=()=>{
    const context=useContext(BioContext);
    return context;
};