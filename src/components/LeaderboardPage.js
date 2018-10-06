import React, { Component } from 'react'
import { connect } from 'react-redux'
import './LeaderboardPage.css'
import UserCard from './UserCard'

class LeaderboardPage extends Component {
  render() {
    const { sortedUsers } = this.props

    return (
      <div className="leaderboard">
        <ul className="users-list">
          {sortedUsers.map(user =>
            <li key={user.id} className="user-card-container"><UserCard user={user} /></li>)
          }
        </ul>

      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const sortedUsers = Object.keys(users)
                      .map(id => users[id])
                      .sort((a, b) =>
                        (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)
                      )
  return {
    sortedUsers
  }
}

export default connect(mapStateToProps)(LeaderboardPage)