import { getIntialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export function handleInitialData() {
  return (dispatch) => {
    return getIntialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions))
      dispatch(receiveUsers(users))
    })
  }
}
