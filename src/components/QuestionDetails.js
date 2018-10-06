import React from 'react'
import Question from './Question'
import './QuestionDetails.css'
import NotFound from './NotFound'

const QuestionDetails = (props) => {
  const { id } = props.match.params
  const { answeredIds, unansweredIds } = props
  return (
    <div className="question-details">
      { answeredIds.includes(id)
        ? <Question id={id} answered={true} />
        : unansweredIds.includes(id)
        ? <Question id={id} answered={false} />
        : <NotFound />
      }
    </div>
  )
}

export default QuestionDetails