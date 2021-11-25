import { FETCH_POKEMON, FETCH_MY_POKEMON, FETCH_SINGLE_POKEMON } from './types';

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
    fetch('http://localhost:3001/pokemons')
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_MY_POKEMON, payload: data }))
}