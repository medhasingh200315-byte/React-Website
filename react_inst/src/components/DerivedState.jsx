// const users=[
//     { name:"alicae",age:45},
//     { name:"bob",age:12},
//     { name:"asxzscae",age:42},
//     { name:"aqame",age:90},
// ];
// export const DerivedState=()=>
// {
// return(
//     <div className="main-div">
//         <h1>Users List</h1>
//         <ul>
//             {users.map((curElem, index)=>{
//                 return(
//                     <li key={index}>
//                         {curElem.name}-{curElem.age}year old
//                     </li>
//                 );
//             })}
//         </ul>
//     </div>
// );
// }

import { useState } from "react";

//............other method..................


export const DerivedState=()=>
{
    const [users,setUsers]=useState([
    { name:"alicae",age:45},
    { name:"bob",age:12},
    { name:"asxzscae",age:42},
    { name:"aqame",age:90},
])
console.log(users);
const userCount=users.length;
const averageAge=users.reduce((accum, curElem)=>accum+curElem.age,0)/userCount;
return(
    <div className="main-div">
        <h1>Users List</h1>
        <ul>
            {users.map((curElem, index)=>{
                return(
                    <li key={index}>
                        {curElem.name}-{curElem.age}year old
                    </li>
                );
            })}
        </ul>
        <p>Total Users:{userCount}</p>
        <p>Average Age:{averageAge}</p>
    </div>
);
}
