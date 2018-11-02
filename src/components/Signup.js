import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSignup } from '../Redux/actioncreator'
import {withRouter} from 'react-router-dom'


class Login extends Component {

   state = {
     username: "",
     password: "",
     email:""
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]:event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.handleSignup(this.state)
    this.props.history.push('/home')
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
            <label>Email</label>
            <input placeholder='Email' name="email" onChange={this.handleChange}/>
            <label>Username</label>
            <input placeholder='Username' name="username" onChange={this.handleChange}/>
            <label>Password</label>
            <input type="password" placeholder='Password' name="password" onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }

}

export default withRouter(connect(mapStateToProps,{ handleSignup })(Login))
