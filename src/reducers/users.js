import { RECEIVE_USERS, UPDATE_USER_ANSWERS } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.users }
    case UPDATE_USER_ANSWERS:
      debugger
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
