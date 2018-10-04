import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    const { unansweredIds, answeredIds } = this.props
    return (
      <div className="questions">
        <div className="tabs">
          <RadioGroup defaultValue={tab} size="large" buttonStyle="solid" onChange={this.handleTabs}>
            <RadioButton value="unanswered">Unanswered</RadioButton>
            <RadioButton value="answered">Answered</RadioButton>
          </RadioGroup>
        </div>
        <ul className="question-container">
          {tab === 'unanswered'?
            unansweredIds.map(id =>
              <li key={id}>
                <Link to={`/questions/${id}`}>
                  <Question id={id}/>
                </Link>
              </li>)
            : answeredIds.map(id =>
              <li key={id}>
                <Link to={`/questions/${id}`}>
                  <Question id={id} />
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default (Questions)