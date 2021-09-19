import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import NotFoundPage from './NotFoundPage'
import QuestionAnswer from './QuestionAnswer'
import QuestionResult from './QuestionResult'

const QuestionView = () => {
  const { questionId } = useParams()

  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)
  const questions = useSelector((state) => state.questions)

  const questionExists = questionId in questions
  const answered = questionId in users[authedUser].answers

  if (!questionExists) return <NotFoundPage />

  return (
    <>
      {answered && <QuestionResult questionId={questionId} />}
      {!answered && <QuestionAnswer questionId={questionId} />}
    </>
  )
}

export default QuestionView
