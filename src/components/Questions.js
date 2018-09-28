import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Questions.css'
import { Radio } from 'antd';
import Question from './Question'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Questions extends Component {
  state = {
    tab: 'unanswered'
  }

  handleTabs = event => {
    this.setState({
      tab: event.target.value
    })
  }

  render() {
    const { tab } = this.state
    const { questions, questionsId, unansweredIds, answeredIds, users } = this.props
    return (
      <div className="home-page">
        <div className="tabs">
          <RadioGroup defaultValue={tab} size="large" buttonStyle="solid" onChange={this.handleTabs}>
            <RadioButton value="unanswered">Unanswered</RadioButton>
            <RadioButton value="answered">Answered</RadioButton>
          </RadioGroup>
        </div>
        <ul>
          {tab === 'unanswered'?
            unansweredIds.map(id => <li key={id}><Question question={questions[id]} users={users}/></li>)
            : answeredIds.map(id => <li key={id}><Question question={questions[id]} users={users}/></li>)
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users}) {
  const unansweredIds = []
  const answeredIds = Object.keys(users[authedUser].answers)
  const questionsId = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  questionsId.map(id => answeredIds.includes(id) === false && unansweredIds.push(id))
  return {
    questions,
    questionsId,
    answeredIds,
    unansweredIds,
    users
  }
}

export default connect(mapStateToProps)(Questions)