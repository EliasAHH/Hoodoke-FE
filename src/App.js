import React, { Component } from 'react';
import Player from './containers/Player'
import Login from  './components/Login'
import { withRouter,Route, Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from './Redux/actioncreator'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Songselection from './containers/Songselection'


class App extends Component {
  componentDidMount(){
    if(localStorage.getItem("token")) {
      this.props.fetchUser(localStorage.token)
    }
  }

  render() {
     console.log(this.props.currentUser)
    return (
      <div>
        <Navbar/>
        <Route path='/login'  component={Login}/>
        <Route path='/signup'  component={Signup}/>
        <Route path='/jukebox/:name' component={Player} />
        <Route path='/songs' component={Songselection} />
        <Route exact path='/' component={Home} />
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

export default withRouter(connect(mapStateToProps,{ fetchUser })(App));
