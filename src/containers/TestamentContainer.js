import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {onSelectBook} from '../actions/selectionAction';
import Testament from '../components/Testament';

const mapStateToProps = state => {
  return {
    books: state.list.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectBook : bindActionCreators(onSelectBook, dispatch)
  }
}

const TestamentContainer = connect(mapStateToProps, mapDispatchToProps)(Testament);

export default TestamentContainer;
