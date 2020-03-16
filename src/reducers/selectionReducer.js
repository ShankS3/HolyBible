import {
  ON_SELECT_TESTAMENT,
  ON_SELECT_BOOK,
  ON_SELECT_CHAPTER,
  ON_SELECT_TITLE,
  ON_SELECT_VERSE,
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

function selectionReducer(state = initialState.selection, action) {
  switch (action.type) {
    case ON_SELECT_TESTAMENT:
      return objectAssign({}, state, {testament: action.testament});
    case ON_SELECT_BOOK:
      return objectAssign({}, state, {book: action.book});
    case ON_SELECT_CHAPTER:
      return objectAssign({}, state, {chapter: action.chapter});
    case ON_SELECT_TITLE:
      return objectAssign({}, state, {title: action.title});
    case ON_SELECT_VERSE:
      return objectAssign({}, state, {verse: action.verse});
    default:
      return state;
  }
}

export default selectionReducer;
