import { FETCH_POKEMON } from './types';

export const fetchPokemon = pokeData => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_POKEMON, payload: data }))
}