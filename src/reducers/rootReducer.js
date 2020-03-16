import {combineReducers} from 'redux';
import selection from './selectionReducer';
import list from './listReducer';

const appReducer = combineReducers({
  selection,
  list,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
