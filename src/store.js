import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';
import {routerMiddleware, push} from 'react-router-redux';
import thunk from 'redux-thunk';

const defaultState = {};

export const history = createHistory();

const middleware = []
const enhancers = []

middleware.push(thunk);

// Router middleware
const router = routerMiddleware(history);
middleware.push(router);

const actionCreators = {

    push,
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options:
    // http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    actionCreators
  })
  : compose;
/* eslint-enable no-underscore-dangle */

// Apply Middleware & Compose Enhancers
enhancers.push(applyMiddleware(...middleware));
const enhancer = composeEnhancers(...enhancers);

const store = createStore(rootReducer, defaultState, enhancer);

export default store;
