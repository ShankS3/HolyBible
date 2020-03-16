import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {createStore, compose, applyMiddleware} from 'redux';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
