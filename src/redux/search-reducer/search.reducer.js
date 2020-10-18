import { act } from 'react-dom/test-utils';
import { Search_Field_Type } from '../action.types';

const initial_state = {
    searchField: ''
};

const searchReducer = (state= initial_state, action) => {
    switch(action.type){
        case Search_Field_Type:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

export default searchReducer;
