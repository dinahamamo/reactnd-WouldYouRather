import React from 'react'
import { Link } from 'react-router-dom'
import {  Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const UnansweredQuestion = (props) => {
  const { question } = props
  return (
    <div className="show-question-container">
      <form className="show-question">
        <RadioGroup  size="large" buttonStyle="solid" onChange={props.handleOptionChange}>
          <RadioButton value="optionOne">{question["optionOne"]["text"]}</RadioButton>
          <RadioButton value="optionTwo">{question["optionTwo"]["text"]}</RadioButton>
        </RadioGroup>
      </form>
      <Link className="back" to="/questions">Take me back!</Link>
    </div>
  )
}

export default UnansweredQuestion