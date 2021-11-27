import { FETCH_BERRIES, FETCH_BERRY, FETCH_ITEMS, FETCH_ITEM } from '../actions/types';

const initialState = { 
    berries: [],
    berry: {},
    items: [],
    item: {},
    mybackpacks: [],
    thisbackpack: {}
};

function backpackReducer( state = initialState, action) {
    switch(action.type) {
        case FETCH_BERRIES:
            return { ...state, berries: action.payload };
        case FETCH_BERRY:
            return { ...state, berry: action.payload }
        case FETCH_ITEMS:
            return { ...state, items: action.payload };
        case FETCH_ITEM:
            return { ...state, item: action.payload }
        default:
            return state;    
    }
}

export default backpackReducer;