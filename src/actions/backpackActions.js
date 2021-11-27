import { FETCH_BERRIES, FETCH_BERRY } from './types';


export const fetchBerries = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/berry')
    .then(response => response.json())
    .then(berry =>
        dispatch({
            type: FETCH_BERRIES,
            payload: berry
        })
        )
}

export const fetchBerry = id => dispatch => {
    fetch(`https://pokeapi.co/api/v2/berry/${id}`)
    .then( response => response.json())
    .then( berry =>
        dispatch({
            type: FETCH_BERRY,
            payload: berry
        }))
}