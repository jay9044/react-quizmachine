import React from 'react'
import { decode } from 'he';
  class Question extends React.Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      console.log(' 1: calling fetchQuestion')
      this.props.fetchQuestion()
    }

    
    render(){
      const questions = Object.values(this.props.questions)
      const questionCategory = ['General Knowledge', 'Entertainment', 'Science', 'Sports', 'History', 'Politics','Mythology', 'Animals','Art','Geography', 'Vehicles','Celebrities']
  //     const questionCategory = [{id:1,title: 'General Knowledge'}, {id:2, title:'Entertainment'},{id:3,title: 'Science'},{id:4,title: 'Sports'},{id:5,title: 'History'},
  // {id:6,title: 'Politics'},{id:7,title: 'Mythology'},{id:8,title: 'Animals'},{id:9,title: 'Art'},{id:10,title: 'Geography'},{id:11,title: 'Vehicles'},{id:12,title: 'Celebrities'}]

      const questionDifficulty = ['easy', 'medium', 'hard']
      return (
        <div>
          <form>
          <label>
                Select Question category:
                <select value={this.props.selectCategory} onChange={(event) => {
                    this.props.setSelectCategory(event.target.value);
                }}>
                    {questionCategory.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </label>
          <label>
                Select Question Difficulty:
                <select value={"testing"}>
                    {questionDifficulty.map(option => (
                        <option  value={'testing'}>{option}</option>
                    ))}
                </select>
            </label>
          </form>

          <ul>
          {questions.map(question => {
            return(
              <div>
                <h2>Questions</h2>
                <p>{question.category}</p>
                <p>{question.difficulty}</p>
                <li key={question.question}>{decode(question.question)}</li>
                <h3>Click the correct answer</h3>
                <button>decode({question.correct_answer})</button>
             {question.incorrect_answers.map(answer=> {
               return(
               <button value={answer} onClick={ event => this.props.handleClick(event.target.value)}>{answer}</button>
               )
             })}
            </div>
            )
          })}
          </ul>
        </div>
      )
    }
  }
  
  export default Question
  
  const questionCategory = [{id:1,title: 'General Knowledge'}, {id:2, title:'Entertainment'},{id:3,title: 'Science'},{id:4,title: 'Sports'},{id:5,title: 'History'},
  {id:6,title: 'Politics'},{id:7,title: 'Mythology'},{id:8,title: 'Animals'},{id:9,title: 'Art'},{id:10,title: 'Geography'},{id:11,title: 'Vehicles'},{id:12,title: 'Celebrities'},]


//   render(){
//     const questions = Object.keys(this.props.questions)
//     return (
//       <div>
//         <ul>
//         {questions.map(question => {
//           return(
//           <li>{question.question}</li>
//         })}
//         </ul>
//       </div>
//     )
//     }
// }