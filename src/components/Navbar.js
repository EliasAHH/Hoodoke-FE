import React, { Component,Fragment } from 'react';
import {  Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../Redux/actioncreator'
import 'semantic-ui-css/semantic.min.css';
import '../stylesheet/navbar.css'
import { Button, Menu } from 'semantic-ui-react'


class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.removeCurrentUser()
  }

  whatToDisplay = () => {
    if (localStorage.token === undefined) {
      return (<div className="menu">
                <div className="menu-item">
                  <Link to="/home">Hoodoke</Link>
                </div>
                <div className="menu-item right">
                  <Link to="/login"> Login </Link>
                </div >
                <div className="menu-item right">
                  <Link to="/Signup">Signup</Link>
                </div>
              </div>)
    } else {
      return (<div className="menu">
                <div className="menu-item">
                  <Link to="/home" onClick={this.handleLogout}> Logout </Link>
                </div>
            </div>)
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
