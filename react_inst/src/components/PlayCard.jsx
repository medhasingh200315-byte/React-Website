export const PlayCard=(props)=>{
    // return(
    //     <li>
    //         <div>
    //             <img src={props.data.img}
    //              alt=""
    //              height="20%" 
    //              width="20%"
    //              />

    //         <h1>Rating:{props.data.rating}</h1>
    //        <h1>Name:{props.data.name}</h1>
    //        <h2>Type:{props.data.type}</h2>
    //        <h3>Summary:{props.data.summary}</h3>
    //        <a href={props.data.watch}>
    //         <button>Watch Now</button>
    //        </a>
    //         </div>
    //     </li>
    // )


    const{id,img,rating,name,type,summary,watch}=props.data;
         return(
        <li>
            <div>
                <img src={img}
                 alt=""
                 height="20%" 
                 width="20%"
                 />

            <h1>Rating:{rating}</h1>
           <h1>Name:{name}</h1>
           <h2>Type:{type}</h2>
           <h3>Summary:{summary}</h3>
           <a href={watch}>
            <button>Watch Now</button>
           </a>
            </div>
        </li>
    );
};
