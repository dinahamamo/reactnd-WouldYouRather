import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Actions
import { handleGetUsers } from '../actions/users'
// Components
import LoginPage from './LoginPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={LoginPage} />
        </div>
      </Router>

    );
  }
}

export default connect()(App);
