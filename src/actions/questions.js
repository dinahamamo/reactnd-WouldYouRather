import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'


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

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
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

export function handleSaveQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    }).then(question => dispatch(addQuestion(question)))
  }
}
