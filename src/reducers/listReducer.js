import {
  ON_FETCH_TESTAMENTS,
  ON_FETCH_BOOKS,
  ON_FETCH_CHAPTERS,
  ON_FETCH_TITLES,
  ON_FETCH_VERSES,
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

function listReducer(state = initialState.list, action) {
  switch (action.type) {
    case ON_FETCH_TESTAMENTS:
      return objectAssign({}, state, {testaments: action.testaments});
    case ON_FETCH_BOOKS:
      return objectAssign({}, state, {books: action.books});
    case ON_FETCH_CHAPTERS:
      return objectAssign({}, state, {chapters: action.chapters});
    case ON_FETCH_TITLES:
      return objectAssign({}, state, {titles: action.titles});
    case ON_FETCH_VERSES:
      return objectAssign({}, state, {verses: action.verses});
    default:
      return state;
  }
}

export default listReducer;
