import { combineReducers } from "redux";
import bandsReducer from './bandsReducers';

export default combineReducers ({
    combineRed: bandsReducer
});