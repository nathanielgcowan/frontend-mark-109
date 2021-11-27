import { FETCH_BERRIES, FETCH_BERRY } from '../actions/types';

const initialState = { 
    berries: [],
    berry: {},
    mybackpacks: [],
    thisbackpack: {}
};

function backpackReducer( state = initialState, action) {
    switch(action.type) {
        case FETCH_BERRIES:
            return { ...state, berries: action.payload };
        case FETCH_BERRY:
            return { ...state, berry: action.payload }
        default:
            return state;    
    }
}

export default backpackReducer;