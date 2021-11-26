import { FETCH_POKEMON, FETCH_MY_POKEMON, FETCH_SINGLE_POKEMON, CATCH_POKEMON, DELETE_POKEMON } from './types';

export const fetchPokemon = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=150')
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_POKEMON, payload: data }))
}

export const fetchSinglePokemon = id => dispatch => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_SINGLE_POKEMON, payload: data }))
}

export const fetchMyPokemon = pokeData => dispatch => {
    fetch('http://localhost:3001/mypokemons')
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_MY_POKEMON, payload: data }))
}

export const newPokemon = pokemonData => dispatch => {
    console.log(dispatch)
    fetch('http://localhost:3001/mypokemons', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemonData)
    })
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon)
        return dispatch({
            type: CATCH_POKEMON,
            payload: pokemon
        })
    }
    );
};

export const deletePokemon = id => dispatch => {
    console.log(dispatch)
    fetch(`http://localhost:3001/mypokemons/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(response => response.json())
    .then(pokemon => {
        return dispatch({
            type: DELETE_POKEMON,
            payload: pokemon
        })
    }
    );
};