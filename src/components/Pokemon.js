import React, { useState } from 'react';

const Pokemon = props => {

    const [ pokemon, setPokemon ] = useState ([]);

    const getPokemons = e => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
                .then(response => {
                return response.json();
                })
                .then(response => {
                    setPokemon(response.results);
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });

    }

    return (
        <>
            <p>Welcome to the Pokemon API</p>
            <button onClick={getPokemons}>Gotta FETCH 'em all!</button>

            <h3>List of Pokemon:</h3>
            <ul>
                    {
                        pokemon.map( (poke, index) => 
                            <li className = "text-capitalize" key={index}>
                                {poke.name}
                            </li>)
                    }
                </ul>
        </>
    );
}

export default Pokemon;