import './App.css'
import { Route, Switch } from 'react-router'
import ProtectedRoute from './components/ProtectedRoute'
import { LoadingBar } from 'react-redux-loading'
import { useDispatch, useSelector } from 'react-redux'
import { handleInitialData } from './actions/shared'
import { useEffect } from 'react'

function App() {
  //login
  //home with answered and unanswered questions tabs
  //poll for each question, with state answered or not with diffrent components
  //new questions
  //leaderboard
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loadingBar.default)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <>
      <LoadingBar loading={loading} />
      {/* {console.log(loading)} */}
      {!loading && (
        <Switch>
          <Route path="/login">login</Route>
          <ProtectedRoute path="/private" component={TestComponent} />
        </Switch>
      )}
    </>
  )
}

function TestComponent() {
  return <div>test</div>
}

export default App
