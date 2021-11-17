import { createStore } from 'redux';
// import reducer from './reducers';
import rootReducers from './rootReducers';

import {loadState} from './localStorage';


const persistedState = loadState();
  
// const initialStore={
//     /* state of your app */
//     todo:reducers,
//     blog:blogReducers,
//     persistedState
// }



function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(rootReducers,persistedState, loadFromLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;