function question(state = {}, action){
  console.log('Step 5 - setting question in state')
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.question
    default:
      return state
  }
}

export default question;

// state = {
//   question: [], score: 0
// }