import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Actions
import { handleInitialData } from '../actions/shared'
// Components
import LoginPage from './LoginPage'
import Questions from './Questions'
import QuestionDetails from './QuestionDetails'
import PrivateRoute from './PrivateRoute'
import Header from './Header';
import Question from './Question'
import LoadingBar from 'react-redux-loading'
import LeaderboardPage from './LeaderboardPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, answeredIds, unansweredIds } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{backgroundColor: "#f95480", zIndex: "20"}}/>
          {authedUser !== null && <Header />}
          <Route path="/"
                 exact
                 component={LoginPage} />
          <PrivateRoute isAuthenticated={authedUser !== null}
                        exact
                        path="/questions"
                        component={(props) => <Questions {...props} answeredIds={answeredIds} unansweredIds={unansweredIds} />} />
          <PrivateRoute isAuthenticated={authedUser !== null}
                        path="/questions/:id"
                        component={(props) => <QuestionDetails {...props} answeredIds={answeredIds} />}/>
          <PrivateRoute isAuthenticated={authedUser !== null}
                        path="/add"
                        component={Question}/>
          <PrivateRoute isAuthenticated={authedUser !== null}
                        path="/leaderboard"
                        component={LeaderboardPage}/>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  if ( users && authedUser) {
    const unansweredIds = []
    const answeredIds = Object.keys(users[authedUser].answers)
    const questionsId = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    questionsId.map(id => answeredIds.includes(id) === false && unansweredIds.push(id))
    answeredIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return {
      authedUser,
      answeredIds,
      unansweredIds
    }
  }
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
