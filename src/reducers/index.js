import { combineReducers } from "redux";
import pokeReducer from './pokeReducer';
import backpackReducer from './backpackReducer';

export default combineReducers ({
    combineRed: pokeReducer,
    combineRedTwo: backpackReducer
});