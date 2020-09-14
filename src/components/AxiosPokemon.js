
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AxiosPokemon = e => {

    const [pokemon, setPokemon] = useState([]);

    const GetPokemon = e =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
        .then(response => {
            setPokemon(response.data.results);
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <h1>Welcome to the Pokemon API (now with Axios!)</h1>
            <button onClick = {GetPokemon}>Axios Pokemon!</button>
            <ul>
                {
                    pokemon.map((poke, i) =>
                    <li className = "text-capitalize" key = {i}>{poke.name}</li>)
                }
            </ul>
        </div>
    )

}

export default AxiosPokemon;