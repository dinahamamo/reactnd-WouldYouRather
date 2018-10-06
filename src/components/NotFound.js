import React, { Component } from 'react'
import './NotFound.css'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class NotFound extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
    this.props.history.push("/")

  }

  render() {
    return (
      <div className="not-found">
        <h1>OOPS</h1>
        <h2>This page isn't here.</h2>
        <Link to="/" onClick={this.handleLogout()}>Take me to the homepage!</Link>
      </div>
    )
  }

}

export default withRouter(connect()(NotFound))