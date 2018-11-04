import { connect } from 'react-redux'
import Question from '../components/Question';
import Welcome from '../components/Welcome';
import { fetchQuestionFromApi, setSelectCategory } from '../actions';

export const mapStateToProps = reduxState => {
  return {
    questions: reduxState.question,
    // selectCategory: reduxState.selectCategory
  };
};

const mapDispatchToProps = dispatch => {
  
  return {
    // disptach set awnser, which is set by button value awnser,
    //dispatch fetch from api again on handle click
    
    setSelectCategory: (selectCategory) => {
      dispatch(setSelectCategory(selectCategory))
    },
    handleClick: () => {dispatch(fetchQuestionFromApi())
    },
    fetchQuestion: () => {
      console.log('2: getting action creator')
      dispatch(fetchQuestionFromApi()
     )}
     
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
