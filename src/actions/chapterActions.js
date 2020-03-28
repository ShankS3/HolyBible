import {
  ON_FETCH_CHAPTERS_SUCCESS,
  ON_FETCH_CHAPTERS_FAILURE,
  ON_SELECT_TITLE,
  ON_SELECT_CHAPTER,
} from '../constants/actionTypes';
import { openDatabase } from 'react-native-sqlite-storage';
import { isEmpty } from 'lodash';

const db = openDatabase({
              name: 'bible.db',
              createFromLocation : "~bible.db",
              location:"Library"
            });

function onFetchChapters(bookId=null, chapterId=null) {
  return function(dispatch) {
    return db.transaction(txn => {
      txn.executeSql(
        "SELECT * FROM title "+
        "WHERE book_id = IFNULL(?, book_id) "+
        "OR chapter = IFNULL(?, chapter)",
        [bookId, chapterId],
        (txn, results) => {
          !isEmpty(results.rows)
          ? dispatch(onFetchChaptersSuccess(results.rows.raw()))
          : dispatch(onFetchChaptersFailure("No data found"))
        }
      )
    })
  }
}

function onFetchChaptersSuccess(response){
  return {
    type: ON_FETCH_CHAPTERS_SUCCESS,
    response
  }
}

function onFetchChaptersFailure(response){
  return {
    type: ON_FETCH_CHAPTERS_FAILURE,
    response
  }
}

function onSelectChapter(chapter) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_CHAPTER, chapter});
  }
}

function onSelectTitle(title) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_TITLE, title});
  };
}

export { onFetchChapters, onSelectTitle, onSelectChapter };
