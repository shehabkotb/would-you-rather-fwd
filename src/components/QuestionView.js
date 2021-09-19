import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import QuestionAnswer from './QuestionAnswer'
import QuestionResult from './QuestionResult'

const QuestionView = () => {
  const { questionId } = useParams()

  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)

  const answered = questionId in users[authedUser].answers

  return (
    <>
      {answered && <QuestionResult />}
      {!answered && <QuestionAnswer />}
    </>
  )
}

export default QuestionView
