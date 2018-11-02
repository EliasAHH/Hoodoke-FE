import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/actioncreator'
import Navbar from './Navbar'
class Home extends Component {

  componentDidMount = () => {
    if(localStorage.getItem("token")) {
      this.props.fetchUser(localStorage.token)
    }
  }

  render(){
    console.log(this.props.authCurrentUser)
    return(
      <div>
        <Navbar />
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


export default connect(mapStateToProps, { fetchUser })(Home)