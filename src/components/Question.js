import React from 'react'
import './Question.css'
import { Avatar } from 'antd';
import { formatDate, formatTime } from '../utils/helpers'

function Question(props) {
  const { question, users } = props
  return (
    <div className="question">
      <div className="left-container">
        <Avatar size={150} src={users[question.author].avatarURL}/>
      </div>
      <div className="middle-container">
        <h2 className="question-author">{users[question.author].name} asks:</h2>
        <h3 className="question-text">Would you rather</h3>
        <div className="question-options">
          <p>{question.optionOne.text}</p>
          <span>Or</span>
          <p>{question.optionTwo.text}</p>
        </div>
      </div>
      <div className="right-container">
        <p className="date">{formatTime(question.timestamp)}</p>
        <p className="date">{formatDate(question.timestamp)}</p>
        <p className="votes">{question.optionOne.votes.length + question.optionTwo.votes.length} Votes</p>
      </div>
    </div>
  )
}

export default Question