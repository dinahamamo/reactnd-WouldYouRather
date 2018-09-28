import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Actions
import { handleInitialData } from '../actions/shared'
// Components
import LoginPage from './LoginPage'
import Questions from './Questions'
import PrivateRoute from './PrivateRoute'
import Header from './Header';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          {authedUser !== null && <Header />}
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute isAuthenticated={authedUser !== null} path="/questions" component={Questions} />
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
