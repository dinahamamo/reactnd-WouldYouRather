import React, { Component } from 'react'
import { connect } from 'react-redux'
import './LoginPage.css'
import { Card } from 'antd';

import { setAuthedUser } from '../actions/authedUser'

const { Meta } = Card;

class LoginPage extends Component {
  handleAuthedUser = (id) => {
    this.props.dispatch(setAuthedUser(id))
    this.props.history.push("/home")
  }

  render() {
    const { userIds, users, authedUser } = this.props
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

function mapStateToProps({ users, authedUser }) {
  return {
    userIds: Object.keys(users),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(LoginPage)
