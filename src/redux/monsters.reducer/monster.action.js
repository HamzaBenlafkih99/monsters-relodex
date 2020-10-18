import {
    Fetch_Monsters_Start,
    Fetch_Monsters_Success,
    Fetch_Monsters_Failed
} from '../action.types';

export const fetchMonsters = () => {
    return dispatch => {
        dispatch({ type: Fetch_Monsters_Start });
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(Response => Response.json())
          .then(data => dispatch({ type: Fetch_Monsters_Success, payload: data }))
          .catch(error => dispatch({ type: Fetch_Monsters_Failed, payload: error }))
    }
}