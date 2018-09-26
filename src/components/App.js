import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Actions
import { handleGetUsers } from '../actions/users'
// Components
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import PrivateRoute from './PrivateRoute'
import Header from './Header';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          {authedUser !== null && <Header />}
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute isAuthenticated={authedUser !== null} path="/home" component={HomePage} />
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
