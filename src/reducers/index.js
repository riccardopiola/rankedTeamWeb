import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router


// Combine all our reducers togeher
const rootReducer = combineReducers({ routing: routerReducer });

export default rootReducer;
