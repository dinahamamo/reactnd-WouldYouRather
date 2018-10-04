import { saveQuestionAnswer } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer( qid, answer ) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(saveAnswer(authedUser, qid, answer))
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
  }
}
