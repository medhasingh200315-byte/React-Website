// import { useContext } from "react"
// import { BioContext, useBioContext } from "."
import {useBioContext } from "."

export const Home=()=>{
    const myName=useBioContext()
    return <h1>Hi {myName}</h1>
}
