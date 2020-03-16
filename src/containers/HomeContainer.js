import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {onSelectTestament} from '../actions/selectionAction';
import Home from '../components/Home';

const mapStateToProps = state => {
  return {
    testaments: state.list.testaments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTestament : bindActionCreators(onSelectTestament, dispatch)
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
