import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware ,createStore} from 'redux';
import Todo from './Todo';
// import store from './store';
import Main from './Main';
import Blog from './Blog';
import rootReducers from './rootReducers';
import { saveState } from './localStorage';

import { loadState } from './localStorage';


const persistedState = loadState();
  
// const initialStore = {
//   cart: cartItems,
//   amount: 0,
//   total: 0,
//   persistedState
// }

const store = createStore(rootReducers,persistedState, applyMiddleware());

store.subscribe(() => {
  saveState({
   /* example state */
    todo:store.getState().reducers,
    Blog:store.getState().blogReducers
  });
});

function App() {
  
  return (
    <>
    <Provider store={store}>
      <Todo/>
      {/* <Main/> */}
      <Blog/>
    </Provider>
    </>
  );
}

export default App;
