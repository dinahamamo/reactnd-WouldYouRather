import React, { Component } from 'react'
import './NewQuestion.css'

const NewQuestion = (props) =>{
  const { handleNewQuestion, firstOption, secondOption } = props
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

export default NewQuestion