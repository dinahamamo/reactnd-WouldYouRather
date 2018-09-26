import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.css'

import { Menu, Dropdown, Icon , Avatar} from 'antd';
import { setAuthedUser } from '../actions/authedUser';


class Header extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
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
        <div>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Avatar src={users[authedUser].avatarURL} />
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
export default connect(mapStateToProps)(Header)