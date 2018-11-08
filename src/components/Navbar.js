import React, { Component,Fragment } from 'react';
import {  Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../Redux/actioncreator'
import 'semantic-ui-css/semantic.min.css';
import { Button, Menu } from 'semantic-ui-react'


class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.removeCurrentUser()
  }

  whatToDisplay = () => {
    if (localStorage.token === undefined) {
      return (<Menu>
                <Menu.Item>
                  <Link to="/login"> Login </Link>
                </Menu.Item >
                <Menu.Item>
                  <Link to="/Signup">Signup</Link>
                </Menu.Item>
              </Menu>)
    } else {
      return (<Menu>
                <Menu.Item>
                  <Link to="/home" onClick={this.handleLogout}> Logout </Link>
                </Menu.Item>
            </Menu>)
    }

  }
  render(){
    return (
      <div>
        {this.whatToDisplay()}
      </div>

    )
  }
}

export default withRouter(connect(null,{removeCurrentUser})(Navbar))
