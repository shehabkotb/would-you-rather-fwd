import './App.css'
import { Switch } from 'react-router'
import ProtectedRoute from './components/ProtectedRoute'
import { useDispatch, useSelector } from 'react-redux'
import { handleInitialData } from './actions/shared'
import { useEffect } from 'react'
import Header from './components/Header'
import LoginPage from './components/Login'
import HomePage from './components/HomePage'
import RedirectAuthedRoute from './components/RedirectAuthedRoute'
import QuestionView from './components/QuestionView'

function App() {
  //login
  //home with answered and unanswered questions tabs
  //poll for each question, with state answered or not with diffrent components
  //new questions
  //leaderboard
  const dispatch = useDispatch()
  // const loading = useSelector((state) => state.loadingBar.default)
  const authedUser = useSelector((state) => state.authedUser)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <>
      <Header authedUser={authedUser} />
      <Switch>
        <RedirectAuthedRoute
          authedUser={authedUser}
          path="/login"
          component={LoginPage}
        />
        <ProtectedRoute
          authedUser={authedUser}
          path="/questions/:questionId"
          component={QuestionView}
        />
        <ProtectedRoute
          exact
          authedUser={authedUser}
          path="/"
          component={HomePage}
        />
      </Switch>
    </>
  )
}

export default App
