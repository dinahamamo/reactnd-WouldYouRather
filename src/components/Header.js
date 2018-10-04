import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.css'
import { withRouter } from 'react-router-dom'

import { Menu, Dropdown, Icon , Avatar} from 'antd';
import { setAuthedUser } from '../actions/authedUser';


class Header extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
    this.props.history.push("/")
  }

  render() {
    const { authedUser, users } = this.props
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={this.handleLogout}>Logout</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        header
        <h1 className="header-name">Hello, {users[authedUser].name}!</h1>
        <div>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Avatar size="large" src={users[authedUser].avatarURL} className="avatar"/>
          </Dropdown>
        </div>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}
export default withRouter(connect(mapStateToProps)(Header))