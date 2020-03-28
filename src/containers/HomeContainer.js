import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testamentActions from '../actions/testamentActions';
import Home from '../components/Home';

const mapStateToProps = state => {
  return {
    testaments: state.list.testaments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    testamentActions: bindActionCreators(testamentActions, dispatch)
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
