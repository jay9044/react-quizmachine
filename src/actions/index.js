export function receiveQuestions(body){
  console.log('Step 4 - creating RECEIVE_QUESTION question object')
  return {
    type: 'RECEIVE_QUESTIONS',
    question: body.results
  }
}


export function fetchQuestionFromApi(){
  return function(dispatch, getState){
    const {selectCategory} = getState()
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
    .then(response => response.json())
    .then(result => {
      console.log('3: calling fetch')
      dispatch(receiveQuestions(result))
    })
    .catch(function(error) {
      // something went wrong. let's sort it out
    });
  }
}

export function setSelectCategory(selectCategory) {
  return {
      type: 'SET_SELECT_CATEGORY',
      selectCategory
  }
}





export function setAnswer(answer){
  return {
      type: 'RECEIVE_ANSWER',
      answer
  }
}




// export function nextQuestion() {
//   questionNumber++;
//   fetchQuestion(questionNumber);
// }

// let slideInterval = setInterval(nextQuestion,4000);


