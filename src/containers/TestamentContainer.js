import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/bookActions';
import Testament from '../components/Testament';

const mapStateToProps = state => {
  return {
    books: state.list.books,
    selectedTestament: state.selection.testament
  }
}

const mapDispatchToProps = dispatch => {
  return {
    bookActions : bindActionCreators(bookActions, dispatch),
  }
}

const TestamentContainer = connect(mapStateToProps, mapDispatchToProps)(Testament);

export default TestamentContainer;
