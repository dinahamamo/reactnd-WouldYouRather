import React from 'react'
import './UserCard.css'
import { Avatar } from 'antd';

const UserCard = (props) => {
  const { user } = props
  return (
    <div className="user-card">
      <div className="card-top-conatiner">
        <Avatar size={180} src={user.avatarURL}/>
      </div>
      <div className="card-middle-container">
        <h2 className="question-author">{user.name}</h2>
        <p className="user-numbers">Asked Questions: {user.questions.length}</p>
        <p className="user-numbers">Answered Questions: {Object.keys(user.answers).length}</p>
      </div>
      <div className="card-bottom-container">
        <h2 className="user-score">Total Score: {user.questions.length + Object.keys(user.answers).length}</h2>
      </div>
    </div>
  )
}

export default UserCard