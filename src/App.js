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
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import NotFoundPage from './components/NotFoundPage'

function App() {
  const dispatch = useDispatch()
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
          authedUser={authedUser}
          path="/add"
          component={NewQuestion}
        />
        <ProtectedRoute
          authedUser={authedUser}
          path="/leaderboard"
          component={LeaderBoard}
        />
        <ProtectedRoute
          exact
          authedUser={authedUser}
          path="/"
          component={HomePage}
        />
        <ProtectedRoute
          authedUser={authedUser}
          path="*"
          component={NotFoundPage}
        />
      </Switch>
    </>
  )
}

export default App
