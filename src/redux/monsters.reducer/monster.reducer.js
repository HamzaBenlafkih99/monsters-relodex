import {
    Fetch_Monsters_Start,
    Fetch_Monsters_Success,
    Fetch_Monsters_Failed
} from '../action.types';

const Initial_state = {
    isLoading: false,
    monsters: [],
    error: ''
}

const monsterReducer = (state= Initial_state, action) => {
    switch(action.type){
        case Fetch_Monsters_Start:
            return Object.assign({}, state, { isLoading: true });
        case Fetch_Monsters_Success:
            return Object.assign({}, state, { monsters: action.payload, isLoading: false });
        case Fetch_Monsters_Failed:
            return Object.assign({}, state, { error: action.payload, isLoading: false });
        default:
            return state;
    }
}

export default monsterReducer;