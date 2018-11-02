import React, { Component } from 'react';
import Player from './containers/Player'
import Login from  './components/Login'
import { Route, Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from './Redux/actioncreator'
import Home from './components/Home'
import Signup from './components/Signup'


class App extends Component {

  render() {
    return (
      <div>
        <Route path='/login'  component={Login}/>
        <Route path='/signup'  component={Signup}/>
        <Route path='/jukebox' component={Player} />
        <Route exact path='/home' component={Home} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    authCurrentUser: state.authCurrentUser
  }

}

export default connect(mapStateToProps,{ fetchUser })(App);
