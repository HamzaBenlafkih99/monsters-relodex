import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import searchReducer from './redux/search-reducer/search.reducer';
import monsterReducer from './redux/monsters.reducer/monster.reducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  search: searchReducer,
  monster: monsterReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
