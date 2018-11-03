import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSubmit } from '../Redux/actioncreator'
import {withRouter} from 'react-router-dom'


class Login extends Component {

   state = {
     username: "",
     password: ""
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]:event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.props.history.push('/songs')
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
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

export default withRouter(connect(mapStateToProps,{ handleSubmit })(Login))
