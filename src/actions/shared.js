import { getIntialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getIntialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions))
      dispatch(receiveUsers(users))
      dispatch(hideLoading())
    })
  }
}
