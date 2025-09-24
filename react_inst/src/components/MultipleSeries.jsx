
// DYNAMIC VALUES IN JSX STARTS...........................................
// const MultipleSeries = () => {
//     const name="Nature"; //create a javascript value
//     const type="hills";
//     const summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
//     const rating="8.2";
//     const returnGenre = () =>
//     {
//         const genre="Peacfull";
//         return genre;
//     }


//     return(  
//      <div>
//         <div>
//         <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//         </div>
//         <h2>Name:{name}</h2> 
//         <h3>{type}</h3>
//           {/* /* ....expresion in JSX... */ }
//         <h3>{9+12}</h3>
//         <p>
//            {summary}
//         </p>
//             {/* ....function call.... */}
//             <p>Genre:{returnGenre()}</p>

//     </div>
//     )
// };

// DYNAMIC VALUES IN JSX ENDS...........................................

// import React from 'react';
// // CONDITIONAL OPERATORS IN JSX STARTS.................................
// const MultipleSeries = () => {
//     let age=16;
//     // let canwatch="Not available";
//     // if(age>18)canwatch="watch now";
//     const canwatch=()=>{
//         if(age>18)return"watch now";
//         return"not";
//     }
//     // if(age<18)
//     // {
          
//     // return(  
//     //  <div>
//     //     <div>
//     //     <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//     //     </div>
//     //     <h2>Name:Nature</h2>
//     //     <h3>Hills</h3>
//     //     <p>
//     //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//     //     </p>
//     //     <button>Not Allowed</button>
//     // </div>
//     // );
//     // }

//     // return(  
//     //  <div>
//     //     <div>
//     //     <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//     //     </div>
//     //     <h2>Name:Nature</h2>
//     //     <h3>Hills</h3>
//     //     <p>
//     //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//     //     </p>
//     //     <button>Watch now</button>
//     // </div>
//     // );

//     //.......other method.............
    
//     // return(  
//     //  <div>
//     //     <div>
//     //     <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//     //     </div>
//     //     <h2>Name:Nature</h2>
//     //     <h3>Hills</h3>
//     //     <p>
//     //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//     //     </p>
//     //     <button>{age>18?"watch now":"Not available"}</button>
//     // </div>
//     // );

//     //..........other method..............
        
//     // return(  
//     //  <div>
//     //     <div>
//     //     <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//     //     </div>
//     //     <h2>Name:Nature</h2>
//     //     <h3>Hills</h3>
//     //     <p>
//     //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//     //     </p>
//     //     <button>{canwatch}</button>
//     // </div>
//     // );
//     //........other method...........
//         return(  
//      <div>
//         <div>
//         <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//         </div>
//         <h2>Name:Nature</h2>
//         <h3>Hills</h3>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//         </p>
//         <button>{canwatch()}</button>
//     </div>
//     );


// };
// CONDITIONAL OPERATORS IN JSX ENDS.................................


// COMPONENT MAKING STARTS........................................................
// const MultipleSeries = () => {
//     return(  
//      <div>
//         <div>
//         <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//         </div>
//         <h2>Name:Nature</h2>
//         <h3>Hills</h3>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//         </p>
//     </div>
//     )
// };
// COMPONENT MAKING ENDS........................................................


// DEFAULT EXPORT STARTS.............................................................
// const MultipleSeries = () => {
//   // Define a variable for age to demonstrate conditional rendering
//   let age = 16;

//   // Function to determine if content can be watched based on age
//   const canWatch = () => {
//     if (age >= 18) {
//       return "Watch now";
//     }
//     return "Not available";
//   };

//   // Define dynamic values for the component
//   const name = "Nature";
//   const type = "Hills";
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laboriosam!";
//   const rating = "8.2";

//   // Function to return a genre
//   const returnGenre = () => {
//     const genre = "Peaceful";
//     return genre;
//   };

//   return (
//     // Main container for the series card with inline styles
//       <div>
//            <div>
//               <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//            </div>
           
//         <h2>Name:{name}</h2> 
//         <h3>{type}</h3>
//           {/* /* ....expresion in JSX... */ }
//         <h3>{9+12}</h3>
//         <p>{summary}</p>
//             {/* ....function call.... */}
//         <p>Genre:{returnGenre()}</p>
//     </div>
//   );
// };

// export default MultipleSeries;
// DEFAULT EXPORT ENDS.............................................................


// NAMED EXPORT STARTS.............................................................
//    export const MultipleSeries = () => {
//   // Define a variable for age to demonstrate conditional rendering
//   let age = 16;

//   // Function to determine if content can be watched based on age
//   const canWatch = () => {
//     if (age >= 18) {
//       return "Watch now";
//     }
//     return "Not available";
//   };

//   // Define dynamic values for the component
//   const name = "Nature";
//   const type = "Hills";
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laboriosam!";
//   const rating = "8.2";

//   // Function to return a genre
//   const returnGenre = () => {
//     const genre = "Peaceful";
//     return genre;
//   };

//   return (
//     // Main container for the series card with inline styles
//       <div>
//            <div>
//               <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//            </div>
           
//         <h2>Name:{name}</h2> 
//         <h3>{type}</h3>
//           {/* /* ....expresion in JSX... */ }
//         <h3>{9+12}</h3>
//         <p>{summary}</p>
//             {/* ....function call.... */}
//         <p>Genre:{returnGenre()}</p>
//     </div>
//   );
// };

// export const Footer =()=>{
//     return(
//         <p>copyright @Medha_Singh</p>
//     );
// };

// NAMED EXPORT ENDS.............................................................


// COMBINED EXPORT ENDS.............................................................
//     export const MultipleSeries = () => {
//   // Define a variable for age to demonstrate conditional rendering
//   let age = 16;

//   // Function to determine if content can be watched based on age
//   const canWatch = () => {
//     if (age >= 18) {
//       return "Watch now";
//     }
//     return "Not available";
//   };

//   // Define dynamic values for the component
//   const name = "Nature";
//   const type = "Hills";
//   const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laboriosam!";
//   const rating = "8.2";

//   // Function to return a genre
//   const returnGenre = () => {
//     const genre = "Peaceful";
//     return genre;
//   };

//   return (
//     // Main container for the series card with inline styles
//       <div>
//            <div>
//               <img src="hills.jpeg" alt="" width="40%" height="40%"/>
//            </div>
           
//         <h2>Name:{name}</h2> 
//         <h3>{type}</h3>
//           {/* /* ....expresion in JSX... */ }
//         <h3>{9+12}</h3>
//         <p>{summary}</p>
//             {/* ....function call.... */}
//         <p>Genre:{returnGenre()}</p>
//     </div>
//   );
// };
//     export default MultipleSeries;

//     export const Header=()=>
//     {
//      return(
//         <p>copyright @Medha_Singh</p>
//     );
//     }

//     export const Footer =()=>{
//     return(
//         <p>copyright @Medha_Singh</p>
//     );
// };
// COMBINED EXPORT ENDS.............................................................


// LOOPING IN JSX STARTS.........................................
// import seriesData from "../api/seriesData.json";
// const MultipleSeries = () => {

//   return (
//     <ul>
//       <li>
//            <div>
//               <img 
//                src={seriesData[0].img_url}
//                alt="" 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{seriesData[0].name}</h2> 
//         <h3>Rating:{seriesData[0].rating}</h3>
//         <p>Summary:{seriesData[0].description}</p>
//         <p>Genre:{seriesData[0].genre}</p>
//         <p>Cast:{seriesData[0].cast}</p>
//         <a href={seriesData[0].watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li>
//           <li>
//            <div>
//               <img 
//                src={seriesData[1].img_url}
//                alt="" 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{seriesData[1].name}</h2> 
//         <h3>Rating:{seriesData[1].rating}</h3>
//         <p>Summary:{seriesData[1].description}</p>
//         <p>Genre:{seriesData[1].genre}</p>
//         <p>Cast:{seriesData[1].cast}</p>
//         <a href={seriesData[1].watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li> 
//           <li>
//            <div>
//               <img 
//                src={seriesData[2].img_url}
//                alt="" 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{seriesData[2].name}</h2> 
//         <h3>Rating:{seriesData[2].rating}</h3>
//         <p>Summary:{seriesData[2].description}</p>
//         <p>Genre:{seriesData[2].genre}</p>
//         <p>Cast:{seriesData[2].cast}</p>
//         <a href={seriesData[2].watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li>
//           <li>
//            <div>
//               <img 
//                src={seriesData[3].img_url}
//                alt="" 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{seriesData[3].name}</h2> 
//         <h3>Rating:{seriesData[3].rating}</h3>
//         <p>Summary:{seriesData[3].description}</p>
//         <p>Genre:{seriesData[3].genre}</p>
//         <p>Cast:{seriesData[3].cast}</p>
//         <a href={seriesData[3].watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li>
//           <li>
//            <div>
//               <img 
//                src={seriesData[4].img_url}
//                alt="" 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{seriesData[4].name}</h2> 
//         <h3>Rating:{seriesData[4].rating}</h3>
//         <p>Summary:{seriesData[4].description}</p>
//         <p>Genre:{seriesData[4].genre}</p>
//         <p>Cast:{seriesData[4].cast}</p>
//         <a href={seriesData[4].watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li> 
//     </ul>
//   );
// };

// LOOPING IN JSX ENDS.........................................


// PROPS IN JS STARTS..........................................................
// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./SeriesCard";
// const MultipleSeries = () => {

//   return (
//     <ul>
//       {seriesData.map((curElem)=>(
//          <SeriesCard key={curElem.id} data={curElem}/>
//          ))}
//     </ul>
//   );
// };

// PROPS IN JS ENDS..........................................................


//CSS STARTS...............................................................
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const MultipleSeries = () => {

  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem)=>(
         <SeriesCard key={curElem.id} data={curElem}/>
         ))}
    </ul>
  );
};

//CSS ENDS................................................................
export default MultipleSeries;