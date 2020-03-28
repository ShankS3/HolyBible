import {
  ON_FETCH_BOOKS_SUCCESS,
  ON_FETCH_BOOKS_FAILURE,
  ON_SELECT_BOOK,
} from '../constants/actionTypes';
import { openDatabase } from 'react-native-sqlite-storage';
import { isEmpty } from 'lodash';

const db = openDatabase({
              name: 'bible.db',
              createFromLocation : "~bible.db",
              location:"Library"
            });

function onFetchBooks(testamentId, bookId) {
  return function(dispatch) {
    return db.transaction(txn => {
      txn.executeSql(
        "SELECT * FROM books "+ 
        "WHERE testament_id = IFNULL(?, testament_id) "+
        "OR id = IFNULL(?, id)",
        [testamentId, bookId],
        (txn, results) => {
          !isEmpty(results.rows)
          ? dispatch(onFetchBooksSuccess(results.rows.raw()))
          : dispatch(onFetchBooksFailure("No data found"))
        }
      )
    })
  }
}

function onFetchBooksSuccess(response){
  return {
    type: ON_FETCH_BOOKS_SUCCESS,
    response
  }
}

function onFetchBooksFailure(response){
  return {
    type: ON_FETCH_BOOKS_FAILURE,
    response
  }
}

function onSelectBook(book) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_BOOK, book});
  };
}

export { onFetchBooks, onSelectBook };
