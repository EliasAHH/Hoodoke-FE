import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../Redux/actioncreator'


class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.removeCurrentUser()


  }
  render(){
    return (
      <div>
        {localStorage.reduxState ? <Link to="/login" onClick={this.handleLogout}> Logout </Link> : <Link to="/login" onClick={this.handleLogout}> Logout </Link>}
       </div>
    )
  }
}

export default connect(null,{removeCurrentUser})(Navbar)
