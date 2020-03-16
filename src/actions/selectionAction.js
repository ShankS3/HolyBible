import {
  ON_SELECT_TESTAMENT,
  ON_SELECT_BOOK,
  ON_SELECT_CHAPTER,
  ON_SELECT_TITLE,
  ON_SELECT_VERSE,
} from '../constants/actionTypes';

export function onSelectTestament(testament) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_TESTAMENT, testament});
  };
}

export function onSelectBook(book) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_BOOK, book});
  };
}

export function onSelectChapter(chapter) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_CHAPTER, chapter});
  };
}

export function onSelectTitle(title) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_TITLE, title});
  };
}

export function onSelectVerse(verse) {
  return function(dispatch) {
    dispatch({type: ON_SELECT_VERSE, verse});
  };
}
