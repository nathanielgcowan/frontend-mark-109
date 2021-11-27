import { FETCH_BERRIES, FETCH_BERRY, FETCH_ITEMS, FETCH_ITEM } from './types';


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

export const fetchItems = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/item/')
    .then(response => response.json())
    .then(items =>
        dispatch({
            type: FETCH_ITEMS,
            payload: items
        })
        )
}

export const fetchItem = id => dispatch => {
    fetch(`https://pokeapi.co/api/v2/item/${id}`)
    .then( response => response.json())
    .then( item =>
        dispatch({
            type: FETCH_ITEM,
            payload: item
        }))
}