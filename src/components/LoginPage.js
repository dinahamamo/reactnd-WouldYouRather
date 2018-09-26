import React, { Component } from 'react'
import { connect } from 'react-redux'
import './LoginPage.css'
import { Card } from 'antd';

import { setAuthedUser } from '../actions/authedUser'

const { Meta } = Card;

class LoginPage extends Component {
  handleAuthedUser = (id) => {
    const { from } = this.props.location.state || {from: {pathname: "/home"}}
    this.props.dispatch(setAuthedUser(id))
    this.props.history.push(from)
  }

  render() {
    const { userIds, users } = this.props

    return (
      <div className="login-page">
        <h1 className="login-title">Would you rather be logged in as</h1>
        <ul className="cards-container">
          {userIds.map(user =>
          <li key={user} onClick={() => this.handleAuthedUser(user)}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<img alt="example" src={users[user].avatarURL} />}
              >
              <Meta
                title={users[user].name}
              />
            </Card>
          </li>
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(LoginPage)
