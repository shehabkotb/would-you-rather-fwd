export const formatQuestion = (state, questionId) => {
  const question = state.questions[questionId]
  const user = state.users[question.author]

  return { ...question, author: user }
}
