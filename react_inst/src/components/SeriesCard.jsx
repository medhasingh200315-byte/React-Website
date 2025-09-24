// export const SeriesCard = (props) =>{
//   return (
//         <li>

//            <div>
//               <img 
//                src={props.data.img_url}
//                alt="" 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{props.data.name}</h2> 
//         <h3>Rating:{props.data.rating}</h3>
//         <p>Summary:{props.data.description}</p>
//         <p>Genre:{props.data.genre}</p>
//         <p>Cast:{props.data.cast}</p>
//         <a href={props.data.watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li>)
          
// };

//DESTRUCTOR STARTS....................................................
//     export const SeriesCard = (props) =>{
//         // export const SeriesCard=({data}) Other way
//         const {id, img_url, name, rating, description, cast, genre, watch_url}= 
//         props.data;
//     return (
//         <li key={props}>
//            <div>
//               <img 
//                src={img_url}
//                alt={name} 
//                width="40%"
//                height="40%"/>
//            </div>
           
//         <h2>Name:{name}</h2> 
//         <h3>Rating:{rating}</h3>
//         <p>Summary:{description}</p>
//         <p>Genre:{genre}</p>
//         <p>Cast:{cast}</p>
//         <a href={watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//     </li>)
          
// };
//DESTRUCTOR ENDS....................................................


//INLINE CSS IN JSX STARTS....................................................
//         export const SeriesCard = (props) =>{
//         // export const SeriesCard=({data}) Other way
//         const {img_url, name, rating, description, cast, genre, watch_url}= 
//         props.data;
//     return (
//         <li className="card">
//            <div>
//               <img 
//                src={img_url}
//                alt={name} 
//                width="40%"
//                height="40%"/>
//            </div>
//            <div className="card-content">
//         <h2>Name:{name}</h2> 
//         <h3 style={{margin:"1.2rem 0"}}>Rating:{rating}</h3>
//         <p style={{margin:"1.2rem 0"}}>Summary:{description}</p>
//         <p style={{margin:"1.2rem 0"}}>Genre:{genre}</p>
//         <p style={{margin:"1.2rem 0"}}>Cast:{cast}</p>
//         <a href={watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//         </div>
//     </li>)
          
// };
//INLINE CSS IN JSX ENDS....................................................


//CSS STARTS............................................................
//             export const SeriesCard = (props) =>{
//         // export const SeriesCard=({data}) Other way
//         const {img_url, name, rating, description, cast, genre, watch_url}= 
//         props.data;
//         const btn_style=
//         {
//             // padding:"1.2rem 2.4rem",
//             border:"none",


//             fontSize:"1.1rem",
//             border:"1px solid white",
//             backgroundColor:"blue",
//             // backgroundColor:"var( --bnt-hover-bg-color)",
//             // color:"var(--bg-color)",
//         }
//     return (
//         <li className="card">
//            <div>
//               <img 
//                src={img_url}
//                alt={name} 
//                width="40%"
//                height="40%"/>
//            </div>
//            <div className="card-content">
//         <h2>Name:{name}</h2> 
//         <h3>Rating:{rating}</h3>
//         <p>Summary:{description}</p>
//         <p>Genre:{genre}</p>
//         <p>Cast:{cast}</p>
//         <a href={watch_url} target="_blank">
//         <button
//         style={btn_style }
//         >Watch Now</button>
//         </a>
//         </div>
//     </li>)
          
// };
//CSS ENDS............................................................


//CONDITIONS IN CSS STARTS..........................................
//                 export const SeriesCard = (props) =>{
//         // export const SeriesCard=({data}) Other way
//         const {img_url, name, rating, description, cast, genre, watch_url}= 
//         props.data;
//         const btn_style=
//         {
//             // padding:"1.2rem 2.4rem",
//             border:"none",
//             fontSize:"1.1rem",
//             border:"1px solid white",
//             backgroundColor:"blue",
//             // backgroundColor:"var( --bnt-hover-bg-color)",
//             // color:"var(--bg-color)",
//         }
//     return (
//         <li className="card">
//            <div>
//               <img 
//                src={img_url}
//                alt={name} 
//                width="40%"
//                height="40%"/>
//            </div>
//            <div className="card-content">
//         <h2>Name:{name}</h2> 
//         <h3>Rating: <span className={`rating timepass ${rating>=8.5? "super_hit" : "average"}`}> {rating}</span></h3>
//         <p>Summary:{description}</p>
//         <p>Genre:{genre}</p>
//         <p>Cast:{cast}</p>
//         <a href={watch_url} target="_blank">
//         <button
//         style={btn_style }
//         >Watch Now</button>
//         </a>
//         </div>
//     </li>)
          
// };

//........other method................
// import styles from"./Multiple.module.css";

//         export const SeriesCard = (props) =>{
//         // export const SeriesCard=({data}) Other way
//         const {img_url, name, rating, description, cast, genre, watch_url}= 
//         props.data;
//         const btn_style=
//         {
//             // padding:"1.2rem 2.4rem",
//             border:"none",
//             fontSize:"1.1rem",
//             border:"1px solid white",
//             backgroundColor:`${rating >=8.5?"green":"yellow"}`,
//             // backgroundColor:"var( --bnt-hover-bg-color)",
//             // color:"var(--bg-color)",
//             fontWeight:"bold",
//             cursor:"pointer",
//         };
//         const ratingClass=rating>=8.5? styles.super_hit : styles.average;
//     return (
//         <li className={styles.card}>
//            <div>
//               <img 
//                src={img_url}
//                alt={name} 
//                width="40%"
//                height="40%"/>
//            </div>
//            {/* <div className={styles.card_content}> */}
//            <div className={styles["card_content"]}>
//         <h2>Name:{name}</h2> 
//         <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}> {rating}</span></h3>
//         <p>Summary:{description}</p>
//         <p>Genre:{genre}</p>
//         <p>Cast:{cast}</p>
//         <a href={watch_url} target="_blank">
//         <button
//         style={btn_style }
//         >Watch Now</button>
//         </a>
//         </div>
//     </li>)
          
// };
//CONDITIONS IN CSS ENDS..........................................


//STYLED COMPONENTS STARTS........................................
import styles from"./Multiple.module.css";
import styled from 'styled-components';
        // export const SeriesCard = (props) =>{
        // // export const SeriesCard=({data}) Other way
        // const {img_url, name, rating, description, cast, genre, watch_url}= 
        // props.data;
        // // const btn_style={}
        //     const ButtonMedha=styled.button({
        //               // padding:"1.2rem 2.4rem",
        //     border:"none",
        //     fontSize:"1.1rem",
        //     border:"1px solid white",
        //     backgroundColor:`${rating >=8.5?"green":"yellow"}`,
        //     // backgroundColor:"var( --bnt-hover-bg-color)",
        //     // color:"var(--bg-color)",
        //     fontWeight:"bold",
        //     cursor:"pointer",
        // });

        //.........other method.............
         export const SeriesCard = (props) =>{
        // export const SeriesCard=({data}) Other way
        const {img_url, name, rating, description, cast, genre, watch_url}= 
        props.data;
        // const btn_style={}
            const ButtonMedha=styled.button`
                      // padding:1.2rem 2.4rem;
            border:none;
            font-size:1.1rem;
            border:1px solid white;
            background-color:${(props)=>
                props.rating>= 8.5?"green":"yellow"};
            // backgroundColor:"var( --bnt-hover-bg-color);
            // color:var(--bg-color;
            font-weight:bold;
            cursor:pointer;
        `;

        const Rating= styled.h3`
        font-size:1.6rem;
        color:green;
        text-transform:capitalize;
        `;
        
        
        
        const ratingClass=rating>=8.5? styles.super_hit : styles.average;
    return (
        <li className={styles.card}>
           <div>
              <img 
               src={img_url}
               
               alt={name} 
               width="40%"
               height="40%"/>
           </div>
           {/* <div className={styles.card_content}> */}
           <div className={styles["card_content"]}>
        <h2>Name:{name}</h2> 
        <Rating>
            Rating: 
            <span className={`${styles.rating} ${ratingClass}`}> {rating}</span>
        </Rating>
        <p>Summary:{description}</p>
        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url} target="_blank">
        <ButtonMedha>WATCH NOW</ButtonMedha>
        </a>
        </div>
    </li>)
          
};
//STYLED COMPONENTS ENDS........................................