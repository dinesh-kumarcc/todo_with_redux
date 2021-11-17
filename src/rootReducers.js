import { combineReducers } from 'redux';
import blogReducers from './blogReducers';
import reducers from './reducers';

const rootReducers = combineReducers({
    blogReducers,
    reducers
})
export default rootReducers