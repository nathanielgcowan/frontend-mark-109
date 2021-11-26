import { FETCH_POKEMON, FETCH_MY_POKEMON, FETCH_SINGLE_POKEMON, CATCH_POKEMON, DELETE_POKEMON } from '../actions/types';
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
        case CATCH_POKEMON:
            let new_pokemon = action.payload;
            let myNewPokemonList = state.mypokemon;
            myNewPokemonList.push(new_pokemon);
            return { ...state, mypokemon: myNewPokemonList }
        case DELETE_POKEMON:
            let filteredlist = state.mypokemon.filter(pokemon => pokemon.id !== action.payload.id )
            return { ...state, mypokemon: filteredlist }
        default:
            return state;
    }
}

export default pokeReducer;