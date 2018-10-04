import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './AnsweredQuestion.css'

class AnsweredQuestion extends Component {
  render() {
    const { answered, users, authedUser, id, questions } = this.props
    const question = questions[id]

    let option = ""
    answered ? option = users[authedUser].answers[id] : null

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    let firstOptionPercentage = question.optionOne.votes.length / totalVotes * 100
    let secondOptionPercentage = question.optionTwo.votes.length / totalVotes * 100

    if (firstOptionPercentage - secondOptionPercentage === -100) {
      firstOptionPercentage = 20
      secondOptionPercentage = 80
    } else if (secondOptionPercentage - firstOptionPercentage === -100) {
      firstOptionPercentage = 80
      secondOptionPercentage = 20
    }

    const optionOneStyling = {
      width: `${firstOptionPercentage}%`,
      backgroundColor: option === 'optionOne' ? "#f95480" : "#fff",
      borderColor: option === 'optionOne' ? "#f95480" : "#d9d9d9"
    }

    const optionTwoStyling = {
      width: `${secondOptionPercentage}%`,
      backgroundColor: option === 'optionTwo' ? "#f95480" : "#fff",
      borderColor: option === 'optionTwo' ? "#f95480" : "#d9d9d9"
    }
    return (
      <div className="show-question-container">
        <div className="show-question">
          <div className="first-option" style={optionOneStyling}>
            <p>{question["optionOne"]["text"]} - {(question.optionOne.votes.length / totalVotes * 100).toFixed()}%</p>
            <p className="option-votes">({question.optionOne.votes.length} Votes)</p>
          </div>
          <div className="second-option" style={optionTwoStyling}>
            <p>{question["optionTwo"]["text"]} - {(question.optionTwo.votes.length / totalVotes * 100).toFixed()}%</p>
            <p className="option-votes">({question.optionTwo.votes.length} Votes)</p>
          </div>
        </div>
        <Link className="back" to="/questions">Take me back!</Link>
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)