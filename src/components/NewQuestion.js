import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NewQuestion.css'

class NewQuestion extends Component {
  render() {
    const { users, authedUser, handleNewQuestion, firstOption, secondOption } = this.props
    return (
      <div className="show-question-container">
        <form className="show-question">
          <textarea placeholder="First Option"
                 className="first-option input-field"
                 value={firstOption}
                 name="firstOption"
                 onChange={handleNewQuestion}
                 rows="2"
                 style={{resize: "none"}}>
          </textarea>
          <textarea placeholder="Second Option"
                 className="second-option input-field"
                 value={secondOption}
                 name="secondOption"
                 onChange={handleNewQuestion}
                 rows="2"
                 style={{resize: "none"}}>
          </textarea>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)