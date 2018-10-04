import React from 'react'
import Question from './Question'
import './QuestionDetails.css'

function QuestionDetails(props) {
  const { id } = props.match.params
  const { answeredIds } = props
  return (
    <div className="question-details">
      { answeredIds.includes(id)
        ? <Question id={id} answered={true} />
        : <Question id={id} answered={false} />
      }
    </div>
  )
}

export default QuestionDetails