import {
  ON_FETCH_VERSES_SUCCESS,
  ON_FETCH_VERSES_FAILURE,
  ON_SELECT_VERSE,
} from '../constants/actionTypes';
import { openDatabase } from 'react-native-sqlite-storage';
import { isEmpty } from 'lodash';

const db = openDatabase({ name: 'bible.db', createFromLocation : "~bible.db", location:"Library" });

export function onSelectVerse(verse) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_VERSE, verse});
  };
}

function onFetchVerses(chapterId, title_id, verse_id) {
  console.log("CAlled onFetchAllTestaments");
  return function(dispatch) {
    return db.transaction(txn => {
      txn.executeSql(
        "SELECT * FROM verses WHERE chapter_id = ? AND title_id = IFNULL(?, title_id) OR id = IFNULL(?, id)",
        [chapterId, title_id, verse_id],
        (txn, results) => {
          !isEmpty(results.rows)
          ? dispatch(onFetchVersesSuccess(results.rows.raw()))
          : dispatch(onFetchVersesFailure("No data found"))
        }
      )
    })
  }
}

function onFetchVersesSuccess(response){
  return {
    type: ON_FETCH_VERSES_SUCCESS,
    response
  }
}

function onFetchVersesFailure(response){
  return {
    type: ON_FETCH_VERSES_FAILURE,
    response
  }
}

export { onSelectVerse,  onFetchVerses };
