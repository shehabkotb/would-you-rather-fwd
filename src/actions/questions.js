import { saveQuestionAnswer } from '../utils/api'
import { updateUserAnswers } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION_VOTES = 'UPDATE_QUESTION_VOTES'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function updateQuestionVotes(answer) {
  return {
    type: UPDATE_QUESTION_VOTES,
    ...answer
  }
}

export function answerQuestion(answer) {
  return (dispatch) => {
    saveQuestionAnswer(answer)
      .then(() => {
        dispatch(updateQuestionVotes(answer))
        dispatch(updateUserAnswers(answer))
      })
      .catch((error) => console.log(error))
  }
}
