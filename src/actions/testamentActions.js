import {
  ON_FETCH_TESTAMENTS_SUCCESS,
  ON_FETCH_TESTAMENTS_FAILURE,
  ON_SELECT_TESTAMENT,
} from '../constants/actionTypes';
import { openDatabase } from 'react-native-sqlite-storage';
import { isEmpty } from 'lodash';

const db = openDatabase({
              name: 'bible.db',
              createFromLocation : "~bible.db",
              location:"Library"
            });

function onFetchTestaments() {
  return function(dispatch) {
    return db.transaction(txn => {
      txn.executeSql(
        "SELECT * FROM testaments",
        [],
        (txn, results) => {
          !isEmpty(results.rows)
          ? dispatch(onFetchTestamentsSuccess(results.rows.raw()))
          : dispatch(onFetchTestamentsFailure("No data found"))
        }
      )
    })
  }
}

function onFetchTestamentsSuccess(response){
  return {
    type: ON_FETCH_TESTAMENTS_SUCCESS,
    response
  }
}

function onFetchTestamentsFailure(response){
  return {
    type: ON_FETCH_TESTAMENTS_FAILURE,
    response
  }
}

function onSelectTestament(testament) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_TESTAMENT, testament});
  };
}

export { onFetchTestaments, onSelectTestament };
