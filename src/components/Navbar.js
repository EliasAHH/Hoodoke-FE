import React, { Component,Fragment } from 'react';
import {  Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../Redux/actioncreator'


class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.removeCurrentUser()
    this.props.history.push('/login')
  }

  whatToDisplay = () => {
    if (localStorage.token) {
      return <Link to="/home" onClick={this.handleLogout}> Logout </Link>
    } else {
      return (<Fragment>
        <Link to="/login"> Login </Link>
        <Link to="/Signup">Signup</Link>
      </Fragment>)
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
