import {
  ON_FETCH_TESTAMENTS_SUCCESS,
  ON_FETCH_TESTAMENTS_FAILURE,
  ON_FETCH_BOOKS_SUCCESS,
  ON_FETCH_BOOKS_FAILURE,
  ON_FETCH_CHAPTERS_SUCCESS,
  ON_FETCH_CHAPTERS_FAILURE,
  ON_FETCH_VERSES,
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

function listReducer(state = initialState.list, action) {
  switch (action.type) {
    case ON_FETCH_TESTAMENTS_SUCCESS:
      return objectAssign({}, state, {
        testaments: objectAssign({}, state.testaments, {
          list: action.response,
          error: false,
          errorMessage: ""
        })
      });
    case ON_FETCH_TESTAMENTS_FAILURE:
      return objectAssign({}, state, {
        testaments: objectAssign({}, state.testaments, {
          list: [],
          error: true,
          errorMessage: action.response
        })
      });
    case ON_FETCH_BOOKS_SUCCESS:
      return objectAssign({}, state, {
        books: objectAssign({}, state.books, {
          list: action.response,
          error: false,
          errorMessage: ""
        })
      });
    case ON_FETCH_BOOKS_FAILURE:
      return objectAssign({}, state, {
        books: objectAssign({}, state.books, {
          list: [],
          error: true,
          errorMessage: action.response
        })
      });
    case ON_FETCH_CHAPTERS_SUCCESS:
      return objectAssign({}, state, {
        chapters: objectAssign({}, state.chapters, {
          list: action.response,
          error: false,
          errorMessage: ""
        })
      });
    case ON_FETCH_CHAPTERS_FAILURE:
      return objectAssign({}, state, {
        chapters: objectAssign({}, state.chapters, {
          list: [],
          error: true,
          errorMessage: action.response
        })
      });
    case ON_FETCH_VERSES:
      return objectAssign({}, state, {verses: action.verses});
    default:
      return state;
  }
}

export default listReducer;
