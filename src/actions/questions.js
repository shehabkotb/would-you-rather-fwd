import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { updateUserAnswers, updateUserQuestions } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION_VOTES = 'UPDATE_QUESTION_VOTES'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
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

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function createQuestion(answer) {
  return (dispatch) => {
    return saveQuestion(answer)
      .then((result) => {
        dispatch(addQuestion(result))
        dispatch(updateUserQuestions(result))
      })
      .catch((error) => console.log(error))
  }
}
