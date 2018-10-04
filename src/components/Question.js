import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Question.css'
import { Avatar } from 'antd';
import { formatDate, formatTime } from '../utils/helpers'
import { handleSaveAnswer, handleSaveQuestion } from '../actions/questions'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import NewQuestion from './NewQuestion'

class Question extends Component {
  state = {
    selectedOption: '',
    firstOption: '',
    secondOption: ''
  }

  _questionsIndex() {
    const { id, questions } = this.props
    const question = questions[id]
    return(
      <div className="default-question-options">
        <p>{question["optionOne"]["text"]}</p>
        <span>Or</span>
        <p>{question["optionTwo"]["text"]}</p>
      </div>
    )
  }

  handleOptionChange = event => {
    event.preventDefault()
    const selectedOption = event.target.value
    const { dispatch, id } = this.props
    dispatch(handleSaveAnswer(id, selectedOption))
    this.setState({
      selectedOption
    })
  }

  handleNewQuestion = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitQuestion = event => {
    event.preventDefault()
    const { firstOption, secondOption } = this.state
    this.props.dispatch(handleSaveQuestion(firstOption, secondOption))
  }

  render() {
    const { id, users, questions, answered, authedUser } = this.props
    const { firstOption, secondOption } = this.state
    const question = questions[id]
    const location = window.location.pathname
    const type = location.split("/").slice(-1)[0]
    return (
      <div className={`question ${type === "add" ? "new-question" : null}`}>
        <div className="left-container">
          <Avatar size={150} src={question ? users[question.author].avatarURL : users[authedUser].avatarURL}/>
        </div>
        <div className="middle-container">
          <h2 className="question-author">{question ? users[question.author].name : users[authedUser].name} asks:</h2>
          <h3 className="question-text">Would you rather</h3>
          {type === "questions"
            ? this._questionsIndex()
            : type === id
              ? answered === false
                ? <UnansweredQuestion handleOptionChange={this.handleOptionChange} question={question} />
                : <AnsweredQuestion answered={answered} id={id} />
              : type === "add"
                ? <NewQuestion handleNewQuestion={this.handleNewQuestion} firstOption={firstOption} secondOption={secondOption} />
                : null}
        </div>
        {question
        ? <div className="right-container">
            <p className="date">{formatTime(question.timestamp)}</p>
            <p className="date">{formatDate(question.timestamp)}</p>
            <p className="votes">{question.optionOne.votes.length + question.optionTwo.votes.length} Votes</p>
          </div>
        : <div className="right-container">
            <button className="submit-button" type="submit" disabled={!firstOption || !secondOption} onClick={this.handleSubmitQuestion}>Ask Now!</button>
          </div>
        }
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

export default connect(mapStateToProps)(Question)