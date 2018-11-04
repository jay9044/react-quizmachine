import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';
import Welcome from './Welcome'
class App extends React.Component {
  render(){
    return (
      <div>
        <Welcome/>
        <QuestionContainer/>
      </div>
    )
  }
}

export default App;
