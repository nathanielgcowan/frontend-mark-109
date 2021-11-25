import { FETCH_POKEMON, FETCH_MY_POKEMON, FETCH_SINGLE_POKEMON } from '../actions/types';
const intitialState = { pokemon: [], mypokemon: [], singleMon: {}};
function pokeReducer(state = intitialState, action) {
    switch(action.type) {
        case FETCH_POKEMON:
            let list = action.payload;
            return { ...state, pokemon:list };
        case FETCH_MY_POKEMON:
            let mylist = action.payload;
            return { ...state, mypokemon:mylist };
        case FETCH_SINGLE_POKEMON:
            let singlepokemon = action.payload;
            return { ...state, singleMon:singlepokemon };
        default:
            return state;
    }
}

export default pokeReducer;