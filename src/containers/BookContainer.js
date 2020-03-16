import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {onSelectChapter} from '../actions/selectionAction';
import Book from '../components/Book';

const mapStateToProps = state => {
  return {
    chapters: state.list.chapters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectChapter : bindActionCreators(onSelectChapter, dispatch)
  }
}

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book);

export default BookContainer;
