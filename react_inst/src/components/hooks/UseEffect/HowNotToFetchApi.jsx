import { useEffect, useState } from "react"

export const HowNotToFetchApi=()=>{
    const[pokemon, setPokemon]=useState(null);
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")

    const API="https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchPokemon =()=>{
           fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            setPokemon(data)
            setLoading(false)
        })
        .catch((error)=>{
        console.log(error)
        setError(error)
        setLoading(false)
        })
    }
    
    useEffect(()=>{
        fetchPokemon();
    },[]);

    if(loading)
        return(
            <div>
                <h1>Loading.......</h1>
            </div>
        );
    
        if(error)
            return(
                <div>
                    <h1>Error:{error.message}</h1>
                </div>
            )
    return(
        <section>
            <header>
                <h1>Catch poke</h1>
            </header>
            <ul>
                <li>
                    <figure>
                        <img 
                        src={pokemon.sprites.other.dream_world.front_default} 
                        alt="" />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div>
                        <p>
                            Height: <span>{pokemon.height}</span>
                        </p>
                        <p>
                            Speed: <span>{pokemon.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );

};