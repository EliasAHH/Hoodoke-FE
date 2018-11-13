import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSubmit } from '../Redux/actioncreator'
import { withRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'


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
    console.log()
    return (
          <Form onSubmit={this.submitHandler}>
            <h1>Log In</h1>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' name="username" onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input type="password" placeholder='Password' name="password" onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <Button type='submit'>Submit </Button>
            </Form.Field>

        </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }

}

export default withRouter(connect(mapStateToProps,{ handleSubmit })(Login))
