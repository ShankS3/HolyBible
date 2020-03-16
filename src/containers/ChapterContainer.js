import {connect} from 'react-redux';
import Chapter from '../components/Chapter';

const mapStateToProps = state => {
  return {
    titles: state.list.titles,
    verses: state.list.verses
  }
}

const ChapterContainer = connect(mapStateToProps, null)(Chapter);

export default ChapterContainer;
