import React, { Component,Fragment } from 'react';
import {  Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../Redux/actioncreator'


class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.removeCurrentUser()
  }

  whatToDisplay = () => {
    if (localStorage.token === undefined) {
      return (<Fragment>
        <Link to="/login"> Login </Link>
        <Link to="/Signup">Signup</Link>
      </Fragment>)
    } else {
      return <Link to="/home" onClick={this.handleLogout}> Logout </Link>
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
