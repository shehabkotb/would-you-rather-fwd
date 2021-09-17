import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'

export function getIntialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(
    ([questions, users]) => ({
      questions,
      users
    })
  )
}

/**
 *
 * @param {Object} question
 * @param {String} question.author
 * @param {String} question.optionOneText
 * @param {String} question.optionTwoText
 * @returns {{id: string, author: string, optionOne: string, optionTwo: string, timestamp: number}} Question Object
 */
export function saveQuestion(question) {
  return _saveQuestion(question)
}

/**
 *
 * @param {Object} object
 * @param {string} object.authedUser authed user id.
 * @param {string} object.qid questions id.
 * @param {string} object.answer "optionOne" || "optionTwo".
 * @returns Promise
 */
export function saveQuestionAnswer(object) {
  return _saveQuestionAnswer(object)
}
