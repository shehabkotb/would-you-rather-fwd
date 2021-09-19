import {
  RECEIVE_USERS,
  UPDATE_USER_ANSWERS,
  UPDATE_USER_QUESTIONS
} from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.users }
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid)
        }
      }
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
      return state
  }
}
