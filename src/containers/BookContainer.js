import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chapterActions from '../actions/chapterActions';
import Book from '../components/Book';

const mapStateToProps = state => {
  return {
    chapters    : state.list.chapters,
    selectedBook: state.selection.book
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chapterActions : bindActionCreators(chapterActions, dispatch)
  }
}

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book);

export default BookContainer;
