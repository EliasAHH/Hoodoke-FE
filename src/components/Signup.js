import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSignup } from '../Redux/actioncreator'
import {withRouter} from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'


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
    this.props.history.push('/songs')
  }

  render(){
    return (
      <Form onSubmit={this.submitHandler}>
        <h1>Sign Up</h1>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' name="email" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' name="username" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder='Password' name="password" onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }

}

export default withRouter(connect(mapStateToProps,{ handleSignup })(Login))
